from flask import Flask, render_template, request, jsonify, session, redirect, url_for, flash
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import os, json, requests

app = Flask(__name__)
# Google Gemini API
GEMINI_API_KEY = "AIzaSyBC5O9KrKJkNDpE6aElJK6Anz7n9DaNEB0"
GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta2/models/text-bison-001:generateText"
app.secret_key = 'kisansahayata_secret_2024'
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///kisansahayata.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# LibreTranslate – change URL to http://localhost:5000 if self-hosted
LIBRE_TRANSLATE_URL = "https://libretranslate.com/translate"
LIBRE_TRANSLATE_KEY = ""   # add your key if using libretranslate.com

# ─── MODELS ────────────────────────────────────────────────────────────────────

class Scheme(db.Model):
    id           = db.Column(db.Integer, primary_key=True)
    title        = db.Column(db.String(200), nullable=False)
    category     = db.Column(db.String(50), nullable=False)   # govt / financial / insurance
    scheme_type  = db.Column(db.String(50), default='Central') # Central / Maharashtra
    description  = db.Column(db.Text, nullable=False)
    eligibility  = db.Column(db.Text)
    benefits     = db.Column(db.Text)
    how_to_apply = db.Column(db.Text)
    documents    = db.Column(db.Text)   # JSON list
    faqs         = db.Column(db.Text)   # JSON list
    deadline     = db.Column(db.String(100))
    start_date   = db.Column(db.String(50))
    end_date     = db.Column(db.String(50))
    phone        = db.Column(db.String(50))
    official_url = db.Column(db.String(300))
    status       = db.Column(db.String(20), default='active')
    tags         = db.Column(db.String(300), default='')
    created_at   = db.Column(db.DateTime, default=datetime.utcnow)

    def to_dict(self):
        return {
            'id': self.id, 'title': self.title, 'category': self.category,
            'scheme_type': self.scheme_type, 'description': self.description,
            'eligibility': self.eligibility, 'benefits': self.benefits,
            'how_to_apply': self.how_to_apply,
            'documents': json.loads(self.documents) if self.documents else [],
            'faqs': json.loads(self.faqs) if self.faqs else [],
            'deadline': self.deadline, 'start_date': self.start_date,
            'end_date': self.end_date, 'phone': self.phone,
            'official_url': self.official_url, 'status': self.status,
            'tags': self.tags,
            'created_at': self.created_at.strftime('%d-%m-%Y') if self.created_at else ''
        }

class Admin(db.Model):
    id       = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(80), unique=True, nullable=False)
    password = db.Column(db.String(120), nullable=False)

# ─── SEED DATA ──────────────────────────────────────────────────────────────────

def seed_data():
    if Admin.query.count() == 0:
        db.session.add(Admin(username='admin', password='admin123'))

    if Scheme.query.count() == 0:
        schemes = [
            # GOVT
            dict(title="Mahatma Jyotirao Phule Karj Mafi Yojana", category="govt", scheme_type="Maharashtra",
                 description="Farm loan waiver scheme for Maharashtra farmers. Reduces burden of outstanding crop loans from nationalized, cooperative, and rural banks.",
                 eligibility="Eligible farmers of Maharashtra with outstanding crop loans",
                 benefits="Farm loan waiver up to ₹2 lakh",
                 how_to_apply="Visit official portal. Login using Aadhar-linked mobile. Upload documents and submit.",
                 documents='["Aadhar Card","Bank Passbook","Loan Account Statement","Land Ownership (7/12 extract)","Mobile linked with Aadhar"]',
                 faqs='["Only farmers with crop loans are covered","Waiver depends on eligibility","Bank and Aadhar must be linked"]',
                 start_date="01-01-2022", end_date="31-03-2026", phone="1800-233-0222",
                 official_url="https://mjpsky.maharashtra.gov.in", deadline="31-03-2026",
                 tags="loan waiver,maharashtra,karj mafi,crop loan", status="active"),
            dict(title="Baliraja Chetna Abhiyan", category="govt", scheme_type="Maharashtra",
                 description="Awareness and counseling initiative for Maharashtra farmers facing financial and psychological stress. Free training and mental health support.",
                 eligibility="All farmers in Maharashtra",
                 benefits="Free counseling and training programs",
                 how_to_apply="Visit nearest Agriculture Office or Gram Panchayat to register.",
                 documents='["Aadhar Card","Farmer ID","Land Proof (7/12)","Mobile Number","Residence Proof"]',
                 faqs='["Available for all Maharashtra farmers","Counseling is free","Multiple programs available"]',
                 start_date="01-01-2006", end_date="Ongoing", phone="1800-233-0222",
                 official_url="https://maharashtra.gov.in", deadline="Ongoing",
                 tags="awareness,counseling,maharashtra,farmer support", status="active"),
            dict(title="Magel Tyala Shettale Yojana", category="govt", scheme_type="Maharashtra",
                 description="Financial assistance for farm pond construction to promote water conservation and improve irrigation for Maharashtra farmers.",
                 eligibility="Farmers with land ownership in Maharashtra",
                 benefits="Subsidy for farm pond (Shettale) construction",
                 how_to_apply="Visit MahaDBT portal, register with Aadhar, select scheme and submit.",
                 documents='["Aadhar Card","Land Ownership (7/12)","Bank Passbook","Passport Photo","Mobile linked with Aadhar"]',
                 faqs='["Subsidy depends on pond size","Valid land ownership required","Technical inspection before approval"]',
                 start_date="01-01-2016", end_date="Ongoing", phone="022-49150800",
                 official_url="https://mahadbt.maharashtra.gov.in", deadline="Ongoing",
                 tags="farm pond,water conservation,maharashtra,irrigation subsidy,shettale", status="active"),
            dict(title="PM-KISAN Samman Nidhi", category="govt", scheme_type="Central",
                 description="Direct income support of Rs 6000 per year to small and marginal farmers in three equal installments to help meet agricultural expenses.",
                 eligibility="Small and marginal farmers with less than 2 hectares land",
                 benefits="Rs 6000 per year in 3 installments of Rs 2000 each",
                 how_to_apply="Apply at pmkisan.gov.in or nearest CSC. Register with Aadhar and bank details.",
                 documents='["Aadhar Card","Bank Account Details","Land Ownership Records","Mobile Number"]',
                 faqs='["Rs 6000 per year in three installments","Only landholding farmers eligible","Payments credited directly to bank"]',
                 start_date="01-02-2019", end_date="Ongoing", phone="155261",
                 official_url="https://pmkisan.gov.in", deadline="Ongoing",
                 tags="pm kisan,income support,central,6000,direct benefit,samman nidhi", status="active"),
            dict(title="Pradhan Mantri Krishi Sinchai Yojana", category="govt", scheme_type="Central",
                 description="Har Khet Ko Pani – ensures irrigation water to every field. Provides subsidy on micro-irrigation for improved water use efficiency.",
                 eligibility="All farmers, priority to water-stressed regions",
                 benefits="55% subsidy for small farmers, 45% for others on micro-irrigation",
                 how_to_apply="Apply at State Agriculture Department or official portal.",
                 documents='["Aadhar Card","Land Records","Bank Account","Photograph"]',
                 faqs='["Promotes drip and sprinkler irrigation","Higher subsidy for small farmers","Apply through state departments"]',
                 start_date="01-07-2015", end_date="Ongoing", phone="1800-180-1551",
                 official_url="https://pmksy.gov.in", deadline="Ongoing",
                 tags="irrigation,drip,sprinkler,pmksy,water,micro irrigation", status="active"),
            dict(title="Dr. Punjabrao Deshmukh Interest Subsidy", category="govt", scheme_type="Maharashtra",
                 description="Maharashtra government scheme providing interest subsidy on short-term crop loans for timely repaying farmers.",
                 eligibility="Farmers with crop loans from nationalized or cooperative banks in Maharashtra",
                 benefits="Interest subsidy on timely repayment of crop loans",
                 how_to_apply="Obtain crop loan from bank and repay on time. Bank applies subsidy automatically.",
                 documents='["Aadhar Card","Bank Passbook","Crop Loan Sanction Letter","Repayment Proof","Land Records"]',
                 faqs='["Only short-term crop loans eligible","Must repay within due date","Subsidy credited via banking system"]',
                 start_date="01-01-2005", end_date="Ongoing", phone="1800-233-0222",
                 official_url="https://maharashtra.gov.in", deadline="Ongoing",
                 tags="interest subsidy,crop loan,maharashtra,punjabrao deshmukh", status="active"),
            # FINANCIAL
            dict(title="Kisan Credit Card (KCC)", category="financial", scheme_type="Central",
                 description="Provides adequate and timely credit to farmers for agricultural needs including cultivation, post-harvest expenses, and allied activities at low interest.",
                 eligibility="All farmers, sharecroppers, tenant farmers, and SHGs",
                 benefits="Credit up to Rs 3 lakh at 4% interest with interest subvention",
                 how_to_apply="Apply at any nationalized bank, cooperative bank, or regional rural bank.",
                 documents='["Aadhar Card","PAN Card","Land Records","Bank Account","Passport Photograph"]',
                 faqs='["Credit limit based on cultivation area","4% interest after subvention","Valid 5 years with annual renewal"]',
                 start_date="01-08-1998", end_date="Ongoing", phone="1800-11-1109",
                 official_url="https://www.nabard.org", deadline="Ongoing",
                 tags="kcc,credit card,loan,kisan credit,working capital,bank,4 percent", status="active"),
            dict(title="PM Kisan Maandhan Yojana (PM-KMY)", category="financial", scheme_type="Central",
                 description="Voluntary pension scheme for small and marginal farmers providing Rs 3000 per month pension after age 60.",
                 eligibility="Small and marginal farmers aged 18-40 years",
                 benefits="Rs 3000 per month pension after 60 years of age",
                 how_to_apply="Visit PM-KMY portal or nearest CSC. Fill registration and start monthly contribution.",
                 documents='["Aadhar Card","Bank Account","Age Proof","Land Records"]',
                 faqs='["Monthly contribution depends on entry age","Equal contribution by government","Minimum 20 years of contribution"]',
                 start_date="12-09-2019", end_date="Ongoing", phone="1800-267-6888",
                 official_url="https://www.pmkmy.gov.in", deadline="Ongoing",
                 tags="pension,maandhan,retirement,monthly income,pm kmy,3000", status="active"),
            dict(title="Agriculture Infrastructure Fund (AIF)", category="financial", scheme_type="Central",
                 description="Medium to long-term debt financing for post-harvest management infrastructure including cold storage, warehouses, and processing units.",
                 eligibility="Farmers, FPOs, PACS, SHGs, and Agri-entrepreneurs",
                 benefits="Rs 1 lakh crore fund with 3% interest subvention for 7 years",
                 how_to_apply="Apply through scheduled commercial banks or cooperative banks with project proposal.",
                 documents='["Aadhar Card","PAN Card","Land Documents","Bank Details","Project Proposal","FPO Certificate"]',
                 faqs='["Covers cold storage and warehouse","3% interest subvention","Credit guarantee also available"]',
                 start_date="09-08-2020", end_date="31-03-2032", phone="011-23382366",
                 official_url="https://agriinfra.dac.gov.in", deadline="31-03-2032",
                 tags="infrastructure,cold storage,warehouse,post harvest,aif", status="active"),
            # INSURANCE
            dict(title="Pradhan Mantri Fasal Bima Yojana (PMFBY)", category="insurance", scheme_type="Central",
                 description="Crop insurance scheme providing financial support to farmers for crop loss due to natural calamities, pests, and diseases.",
                 eligibility="All farmers with registered land holdings growing notified crops",
                 benefits="Comprehensive crop insurance at low premium – Kharif 2%, Rabi 1.5%",
                 how_to_apply="Apply through banks, insurance companies, or CSC centers before sowing season.",
                 documents='["Aadhar Card","Land Records","Bank Account","Crop Loan Details","Passport Photograph"]',
                 faqs='["Very low premium rates","Covers natural calamities pests diseases","Claim based on crop cutting experiments"]',
                 start_date="13-01-2016", end_date="Ongoing", phone="1800-200-7710",
                 official_url="https://pmfby.gov.in", deadline="Before sowing season",
                 tags="pmfby,fasal bima,crop insurance,kharif,rabi,natural calamity,pest", status="active"),
            dict(title="Pradhan Mantri Jeevan Jyoti Bima Yojana", category="insurance", scheme_type="Central",
                 description="Life insurance scheme providing Rs 2 lakh coverage to farmers and citizens at a very low annual premium of Rs 436.",
                 eligibility="Bank account holders aged 18-50 years",
                 benefits="Rs 2 lakh life insurance at Rs 436 per year premium",
                 how_to_apply="Enroll through bank branch or banking app. Premium auto-debited from account.",
                 documents='["Aadhar Card","Bank Account","Mobile Number","Consent Form"]',
                 faqs='["Affordable premium of Rs 436","Auto-renewable annually","Coverage on death from any cause"]',
                 start_date="09-05-2015", end_date="Ongoing", phone="1800-180-1111",
                 official_url="https://www.jansuraksha.gov.in", deadline="31 May every year",
                 tags="life insurance,jeevan jyoti,pmjjby,death benefit,436", status="active"),
            dict(title="Maharashtra Shetkari Sahayata Yojana", category="insurance", scheme_type="Maharashtra",
                 description="Maharashtra government relief for farmers affected by natural calamities like drought, flood, and unseasonal rain.",
                 eligibility="Maharashtra farmers affected by natural calamities",
                 benefits="Compensation up to Rs 25000 per hectare for crop damage",
                 how_to_apply="Apply through Talathi/Gram Sevak within 30 days of calamity.",
                 documents='["Aadhar Card","Land Records (7/12)","Bank Passbook","Photograph","Calamity Proof"]',
                 faqs='["Apply within 30 days of calamity","Covers drought flood unseasonal rain","Compensation per hectare after damage assessment"]',
                 start_date="01-01-2015", end_date="Ongoing", phone="1800-233-0222",
                 official_url="https://maharashtra.gov.in", deadline="Within 30 days of calamity",
                 tags="maharashtra,relief,natural calamity,drought,flood,shetkari sahayata", status="active"),
        ]
        for s in schemes:
            db.session.add(Scheme(**s))
    db.session.commit()

# ─── ADMIN ROUTES ───────────────────────────────────────────────────────────────

@app.route('/admin/login', methods=['GET', 'POST'])
def admin_login():
    if request.method == 'POST':
        admin = Admin.query.filter_by(username=request.form.get('username'),
                                      password=request.form.get('password')).first()
        if admin:
            session['admin_logged_in'] = True
            return redirect(url_for('admin_dashboard'))
        flash('Invalid credentials', 'error')
    return render_template('admin_login.html')

@app.route('/admin/logout')
def admin_logout():
    session.clear()
    return redirect(url_for('admin_login'))

@app.route('/admin')
@app.route('/admin/dashboard')
def admin_dashboard():
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    schemes = Scheme.query.order_by(Scheme.created_at.desc()).all()
    stats = {
        'total': Scheme.query.count(),
        'active': Scheme.query.filter_by(status='active').count(),
        'inactive': Scheme.query.filter_by(status='inactive').count(),
        'govt': Scheme.query.filter_by(category='govt').count(),
        'financial': Scheme.query.filter_by(category='financial').count(),
        'insurance': Scheme.query.filter_by(category='insurance').count(),
    }
    return render_template('admin_dashboard.html', schemes=schemes, stats=stats)

@app.route('/admin/scheme/add', methods=['GET', 'POST'])
def admin_add_scheme():
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    if request.method == 'POST':
        docs_list = [d.strip() for d in request.form.get('documents','').split('\n') if d.strip()]
        faqs_list = [f.strip() for f in request.form.get('faqs','').split('\n') if f.strip()]
        db.session.add(Scheme(
            title=request.form['title'], category=request.form['category'],
            scheme_type=request.form.get('scheme_type','Central'),
            description=request.form['description'],
            eligibility=request.form.get('eligibility',''),
            benefits=request.form.get('benefits',''),
            how_to_apply=request.form.get('how_to_apply',''),
            documents=json.dumps(docs_list), faqs=json.dumps(faqs_list),
            deadline=request.form.get('deadline',''), start_date=request.form.get('start_date',''),
            end_date=request.form.get('end_date',''), phone=request.form.get('phone',''),
            official_url=request.form.get('official_url',''), tags=request.form.get('tags',''),
            status=request.form.get('status','active'),
        ))
        db.session.commit()
        flash('✅ Scheme added successfully!', 'success')
        return redirect(url_for('admin_dashboard'))
    return render_template('admin_add_scheme.html', scheme=None)

@app.route('/admin/scheme/edit/<int:sid>', methods=['GET', 'POST'])
def admin_edit_scheme(sid):
    if not session.get('admin_logged_in'):
        return redirect(url_for('admin_login'))
    scheme = Scheme.query.get_or_404(sid)
    if request.method == 'POST':
        scheme.title = request.form['title']
        scheme.category = request.form['category']
        scheme.scheme_type = request.form.get('scheme_type','Central')
        scheme.description = request.form['description']
        scheme.eligibility = request.form.get('eligibility','')
        scheme.benefits = request.form.get('benefits','')
        scheme.how_to_apply = request.form.get('how_to_apply','')
        scheme.documents = json.dumps([d.strip() for d in request.form.get('documents','').split('\n') if d.strip()])
        scheme.faqs = json.dumps([f.strip() for f in request.form.get('faqs','').split('\n') if f.strip()])
        scheme.deadline = request.form.get('deadline','')
        scheme.start_date = request.form.get('start_date','')
        scheme.end_date = request.form.get('end_date','')
        scheme.phone = request.form.get('phone','')
        scheme.official_url = request.form.get('official_url','')
        scheme.tags = request.form.get('tags','')
        scheme.status = request.form.get('status','active')
        db.session.commit()
        flash('✅ Scheme updated successfully!', 'success')
        return redirect(url_for('admin_dashboard'))
    docs_text = '\n'.join(json.loads(scheme.documents)) if scheme.documents else ''
    faqs_text = '\n'.join(json.loads(scheme.faqs)) if scheme.faqs else ''
    return render_template('admin_add_scheme.html', scheme=scheme, docs_text=docs_text, faqs_text=faqs_text)

@app.route('/admin/scheme/delete/<int:sid>', methods=['POST'])
def admin_delete_scheme(sid):
    if not session.get('admin_logged_in'):
        return jsonify({'error': 'Unauthorized'}), 401
    s = Scheme.query.get_or_404(sid)
    title = s.title
    db.session.delete(s)
    db.session.commit()
    return jsonify({'success': True, 'message': f'"{title}" deleted.'})

@app.route('/admin/scheme/toggle/<int:sid>', methods=['POST'])
def admin_toggle_scheme(sid):
    if not session.get('admin_logged_in'):
        return jsonify({'error': 'Unauthorized'}), 401
    s = Scheme.query.get_or_404(sid)
    s.status = 'inactive' if s.status == 'active' else 'active'
    db.session.commit()
    return jsonify({'success': True, 'status': s.status})

# ─── FARMER ROUTES ──────────────────────────────────────────────────────────────

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/govscheme')
def govscheme():
    return render_template('govscheme.html')

@app.route('/financial')
def financial():
    return render_template('financial.html')

@app.route('/insurance')
def insurance():
    return render_template('insurance.html')

@app.route('/scheme_detail')
def scheme_detail():
    return render_template('scheme_detail.html')

# ─── APIs ───────────────────────────────────────────────────────────────────────

@app.route('/api/schemes')
def api_schemes():
    category = request.args.get('category','')
    stype = request.args.get('type','')
    q = Scheme.query.filter_by(status='active')
    if category:
        q = q.filter_by(category=category)
    if stype and stype != 'All':
        q = q.filter_by(scheme_type=stype)
    return jsonify([s.to_dict() for s in q.order_by(Scheme.created_at.desc()).all()])

@app.route('/api/schemes/<int:sid>')
def api_scheme_detail(sid):
    return jsonify(Scheme.query.get_or_404(sid).to_dict())

# ─── HELPER: Call Gemini API ────────────────────────────────────────────────────

def ask_gemini(user_message, context=""):
    system_prompt = (
        "You are Kisan Mitra, a helpful assistant for Indian farmers. "
        "Answer questions about government schemes, financial assistance, crop insurance, "
        "farming practices, and agricultural policies. "
        "Keep answers concise, practical, and farmer-friendly. "
        "If someone greets you or asks how you are, respond warmly and naturally. "
        "If you don't know something specific, guide the farmer to contact the local agriculture office."
    )

    full_prompt = system_prompt
    if context:
        full_prompt += f"\n\nRelevant scheme info:\n{context}"
    full_prompt += f"\n\nUser message: {user_message}"

    payload = {
        "contents": [
            {
                "parts": [{"text": full_prompt}]
            }
        ],
        "generationConfig": {
            "temperature": 0.7,
            "maxOutputTokens": 512
        }
    }

    try:
        response = requests.post(
            f"{GEMINI_ENDPOINT}?key={GEMINI_API_KEY}",
            headers={"Content-Type": "application/json"},
            json=payload,
            timeout=10
        )
        if response.status_code == 200:
            data = response.json()
            return data['candidates'][0]['content']['parts'][0]['text']
        else:
            print(f"Gemini error {response.status_code}: {response.text}")
            return None
    except Exception as e:
        print(f"Gemini call failed: {e}")
        return None


# ─── HELPER: Translate via LibreTranslate ──────────────────────────────────────

def translate_text(text, target_lang):
    if not target_lang or target_lang in ('en', 'english'):
        return text
    try:
        payload = {
            "q": text,
            "source": "en",
            "target": target_lang,
            "format": "text"
        }
        if LIBRE_TRANSLATE_KEY:
            payload["api_key"] = LIBRE_TRANSLATE_KEY
        r = requests.post(LIBRE_TRANSLATE_URL, json=payload, timeout=5)
        if r.status_code == 200:
            return r.json().get('translatedText', text)
    except Exception as e:
        print(f"Translation failed: {e}")
    return text


# ─── CHATBOT ROUTE ─────────────────────────────────────────────────────────────
def ask_gemini(user_message, context=""):
    system_prompt = (
        "You are Kisan Mitra, a helpful assistant for Indian farmers. "
        "Answer questions about government schemes, financial assistance, crop insurance, "
        "farming practices, and agricultural policies. "
        "When DB scheme info is provided in context, use it to give precise answers. "
        "For general farming questions, answer from your own knowledge. "
        "If someone greets you or asks how you are, respond warmly and naturally. "
        "Keep answers concise, practical, and farmer-friendly. "
        "Always respond in the same language the user is writing in."
    )

    full_prompt = system_prompt
    if context:
        full_prompt += f"\n\n--- Relevant Scheme Info from Database ---\n{context}\n--- End ---"
    full_prompt += f"\n\nFarmer: {user_message}\nKisan Mitra:"

    payload = {
        "contents": [{"parts": [{"text": full_prompt}]}],
        "generationConfig": {"temperature": 0.7, "maxOutputTokens": 512}
    }

    try:
        response = requests.post(
            f"{GEMINI_ENDPOINT}?key={GEMINI_API_KEY}",
            headers={"Content-Type": "application/json"},
            json=payload,
            timeout=10
        )
        if response.status_code == 200:
            return response.json()['candidates'][0]['content']['parts'][0]['text']
        else:
            print(f"Gemini error {response.status_code}: {response.text}")
            return None
    except Exception as e:
        print(f"Gemini call failed: {e}")
        return None


def translate_text(text, target_lang):
    if not target_lang or target_lang in ('en', 'english'):
        return text
    try:
        payload = {"q": text, "source": "en", "target": target_lang, "format": "text"}
        if LIBRE_TRANSLATE_KEY:
            payload["api_key"] = LIBRE_TRANSLATE_KEY
        r = requests.post(LIBRE_TRANSLATE_URL, json=payload, timeout=5)
        if r.status_code == 200:
            return r.json().get('translatedText', text)
    except Exception as e:
        print(f"Translation failed: {e}")
    return text


def find_scheme_in_message(msg_lower):
    """Search DB for any scheme whose title/tags appear in the user message."""
    schemes = Scheme.query.filter_by(status='active').all()

    # 1. Exact title match
    for s in schemes:
        if s.title.lower() in msg_lower:
            return s, schemes

    # 2. Keyword match using tags and title words
    STOP_WORDS = {
        'how', 'are', 'you', 'the', 'what', 'who', 'why', 'when', 'where',
        'can', 'does', 'did', 'was', 'were', 'has', 'have', 'had', 'will',
        'would', 'could', 'should', 'tell', 'about', 'please', 'help', 'get',
        'for', 'and', 'with', 'your', 'this', 'that', 'from', 'they', 'there',
        'their', 'much', 'many', 'some', 'any', 'all', 'not', 'but', 'yes',
        'okay', 'which', 'give', 'show', 'want', 'need', 'know', 'its', 'than',
        'apply', 'it', 'is', 'to', 'me', 'my', 'do', 'be', 'of', 'in', 'on',
        'documents', 'document', 'required', 'eligibility', 'eligible', 'benefit',
        'benefits', 'scheme', 'schemes', 'yojana', 'detail', 'details', 'info'
    }
    words = [w for w in msg_lower.split() if len(w) > 3 and w not in STOP_WORDS]

    best_match = None
    best_score = 0
    for s in schemes:
        combined = f"{s.title} {s.tags}".lower()
        score = sum(1 for w in words if w in combined)
        if score > best_score:
            best_score = score
            best_match = s

    if best_score >= 1:
        return best_match, schemes

    return None, schemes


def detect_intent(msg_lower):
    """Detect what the user is asking about a scheme."""
    if any(w in msg_lower for w in ['apply', 'application', 'register', 'registration', 'kaise apply', 'apply kare']):
        return 'how_to_apply'
    if any(w in msg_lower for w in ['document', 'documents', 'required', 'papers', 'kagaz', 'dastavej']):
        return 'documents'
    if any(w in msg_lower for w in ['eligible', 'eligibility', 'who can', 'paatra', 'qualification']):
        return 'eligibility'
    if any(w in msg_lower for w in ['benefit', 'benefits', 'money', 'amount', 'laabh', 'fayda', 'how much']):
        return 'benefits'
    if any(w in msg_lower for w in ['deadline', 'last date', 'end date', 'expiry', 'kab tak']):
        return 'deadline'
    if any(w in msg_lower for w in ['phone', 'helpline', 'contact', 'number', 'call']):
        return 'contact'
    if any(w in msg_lower for w in ['link', 'website', 'url', 'portal', 'online']):
        return 'url'
    return 'full_detail'  # default: show everything


# ─── HELPER: Call Gemini API ────────────────────────────────────────────────────

def ask_gemini(user_message, context=""):
    system_prompt = (
        "You are Kisan Mitra, a helpful assistant for Indian farmers. "
        "Answer ANY question the farmer asks — whether it's about farming schemes, "
        "general knowledge, geography, weather, crops, or daily life. "
        "When DB scheme info is provided, use it for precise answers. "
        "For all other questions, answer from your own knowledge confidently. "
        "If someone greets you or asks how you are, respond warmly. "
        "Keep answers concise and farmer-friendly. "
        "Always respond in the same language the user writes in."
    )

    full_prompt = system_prompt
    if context:
        full_prompt += f"\n\n--- Database Info ---\n{context}\n--- End ---"
    full_prompt += f"\n\nFarmer: {user_message}\nKisan Mitra:"

    payload = {
        "contents": [{"parts": [{"text": full_prompt}]}],
        "generationConfig": {"temperature": 0.7, "maxOutputTokens": 512}
    }

    try:
        url = f"https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key={GEMINI_API_KEY}"
        response = requests.post(
            url,
            headers={"Content-Type": "application/json"},
            json=payload,
            timeout=15
        )
        if response.status_code == 200:
            result = response.json()
            return result['candidates'][0]['content']['parts'][0]['text']
        else:
            print(f"Gemini error {response.status_code}: {response.text}")
            return None
    except Exception as e:
        print(f"Gemini call failed: {e}")
        return None


# ─── HELPER: Translate ──────────────────────────────────────────────────────────

def translate_text(text, target_lang):
    if not target_lang or target_lang in ('en', 'english'):
        return text
    try:
        payload = {"q": text, "source": "en", "target": target_lang, "format": "text"}
        if LIBRE_TRANSLATE_KEY:
            payload["api_key"] = LIBRE_TRANSLATE_KEY
        r = requests.post(LIBRE_TRANSLATE_URL, json=payload, timeout=5)
        if r.status_code == 200:
            return r.json().get('translatedText', text)
    except Exception as e:
        print(f"Translation failed: {e}")
    return text


# ─── HELPER: Find scheme in message ────────────────────────────────────────────

def find_scheme_in_message(msg_lower, active_only=True):
    """Returns best matching scheme from DB based on title/tags keywords."""
    status_filter = 'active' if active_only else None
    if status_filter:
        schemes = Scheme.query.filter_by(status='active').all()
    else:
        schemes = Scheme.query.all()

    # 1. Exact title match
    for s in schemes:
        if s.title.lower() in msg_lower:
            return s, schemes

    # 2. Keyword match
    STOP_WORDS = {
        'how', 'are', 'you', 'the', 'what', 'who', 'why', 'when', 'where',
        'can', 'does', 'did', 'was', 'were', 'has', 'have', 'had', 'will',
        'would', 'could', 'should', 'tell', 'about', 'please', 'help', 'get',
        'for', 'and', 'with', 'your', 'this', 'that', 'from', 'they', 'there',
        'their', 'much', 'many', 'some', 'any', 'all', 'not', 'but', 'yes',
        'okay', 'which', 'give', 'show', 'want', 'need', 'know', 'its', 'than',
        'apply', 'it', 'is', 'to', 'me', 'my', 'do', 'be', 'of', 'in', 'on',
        'documents', 'document', 'required', 'eligibility', 'eligible', 'benefit',
        'benefits', 'scheme', 'schemes', 'yojana', 'detail', 'details', 'info',
        'inactive', 'active', 'total', 'list', 'show', 'all'
    }
    words = [w for w in msg_lower.split() if len(w) > 3 and w not in STOP_WORDS]

    best_match = None
    best_score = 0
    for s in schemes:
        combined = f"{s.title} {s.tags}".lower()
        score = sum(1 for w in words if w in combined)
        if score > best_score:
            best_score = score
            best_match = s

    if best_score >= 1:
        return best_match, schemes

    return None, schemes


# ─── HELPER: Detect intent ──────────────────────────────────────────────────────

def detect_intent(msg_lower):
    """Detect what the user wants to know about a scheme."""
    if any(w in msg_lower for w in ['apply', 'application', 'register', 'registration', 'kaise apply', 'apply kare', 'how to']):
        return 'how_to_apply'
    if any(w in msg_lower for w in ['document', 'documents', 'required', 'papers', 'kagaz', 'dastavej']):
        return 'documents'
    if any(w in msg_lower for w in ['eligible', 'eligibility', 'who can', 'paatra', 'qualification']):
        return 'eligibility'
    if any(w in msg_lower for w in ['benefit', 'benefits', 'money', 'amount', 'laabh', 'fayda', 'how much']):
        return 'benefits'
    if any(w in msg_lower for w in ['deadline', 'last date', 'end date', 'expiry', 'kab tak']):
        return 'deadline'
    if any(w in msg_lower for w in ['phone', 'helpline', 'contact', 'number', 'call']):
        return 'contact'
    if any(w in msg_lower for w in ['link', 'website', 'url', 'portal', 'online']):
        return 'url'
    return 'full_detail'


# ─── CHATBOT ROUTE ─────────────────────────────────────────────────────────────

@app.route('/api/chatbot', methods=['POST'])
def chatbot():
    data = request.get_json()
    user_message = data.get('message', '').strip()
    user_lang    = data.get('lang', 'en').strip().lower()

    if not user_message:
        return jsonify({'reply': 'Please type a message.'})

    msg_lower = user_message.lower()
    reply_en  = None
    gemini_context = ""

    # ── STEP 1: Greetings / thanks ─────────────────────────────────────────────
    how_are_you = ['how are you', 'how r you', 'how are u', 'kaise ho', 'kaisa hai']
    greetings   = ['hello', 'hi', 'namaste', 'good morning', 'good afternoon', 'good evening', 'hey']
    thanks      = ['thank you', 'thanks', 'dhanyawad', 'shukriya']

    if any(p in msg_lower for p in how_are_you):
        reply_en = (
            "I'm doing great, thank you for asking! 😊 "
            "I'm Kisan Mitra, always ready to help farmers.\n"
            "How can I assist you today? 🌾"
        )
    elif msg_lower.strip() in greetings or (len(msg_lower.split()) <= 2 and any(g in msg_lower for g in greetings)):
        reply_en = (
            "🙏 Namaskar! I am Kisan Mitra, your farming assistant.\n"
            "I can help you with:\n"
            "• Government Schemes\n"
            "• Financial Assistance & Loans\n"
            "• Crop Insurance\n\n"
            "How can I help you today?"
        )
    elif any(t in msg_lower for t in thanks):
        reply_en = "You're welcome! Feel free to ask anything about farming schemes. 🌾"

    # ── STEP 2: Count / stats queries (FIXED for inactive/active/category) ──────
    if not reply_en:
        import re
        is_count_query = bool(re.search(
            r'(how many|count|total|number of).*(scheme|yojana)|'
            r'(scheme|yojana).*(how many|count|total)',
            msg_lower
        ))

        if is_count_query:
            # Detect active / inactive / all
            if 'inactive' in msg_lower:
                status_filter = 'inactive'
                label = 'inactive'
            elif 'active' in msg_lower and 'inactive' not in msg_lower:
                status_filter = 'active'
                label = 'active'
            else:
                status_filter = None
                label = 'total'

            # Detect category
            category = None
            if 'insurance' in msg_lower:
                category = 'insurance'
            elif 'financial' in msg_lower or 'loan' in msg_lower or 'credit' in msg_lower:
                category = 'financial'
            elif 'government' in msg_lower or 'govt' in msg_lower:
                category = 'govt'

            # Build query
            q = Scheme.query
            if status_filter:
                q = q.filter_by(status=status_filter)
            if category:
                q = q.filter_by(category=category)
            count = q.count()

            cat_label = f"{category} " if category else ""
            reply_en = f"There are <strong>{count}</strong> {label} {cat_label}schemes in the system."

    # ── STEP 3: List schemes query ─────────────────────────────────────────────
    if not reply_en:
        is_list_query = bool(re.search(
            r'(list|show|display|give).*(scheme|yojana)|(all).*(scheme|yojana)',
            msg_lower
        ))

        if is_list_query:
            status_filter = 'inactive' if 'inactive' in msg_lower else 'active'
            category = None
            if 'insurance' in msg_lower:
                category = 'insurance'
            elif 'financial' in msg_lower or 'loan' in msg_lower:
                category = 'financial'
            elif 'government' in msg_lower or 'govt' in msg_lower:
                category = 'govt'

            q = Scheme.query.filter_by(status=status_filter)
            if category:
                q = q.filter_by(category=category)
            schemes_list = q.all()

            if schemes_list:
                names = "\n".join([
                    f"• <strong>{s.title}</strong> ({s.category.upper()} – {s.scheme_type})"
                    for s in schemes_list
                ])
                cat_label = f"{category} " if category else ""
                reply_en = (
                    f"<strong>📋 {status_filter.capitalize()} {cat_label}Schemes ({len(schemes_list)}):</strong>\n\n"
                    f"{names}\n\n"
                    f"Ask me about any specific scheme for full details."
                )
            else:
                reply_en = f"No {status_filter} schemes found."

    # ── STEP 4: Smart DB lookup with intent detection ──────────────────────────
    if not reply_en:
        matched_scheme, all_schemes = find_scheme_in_message(msg_lower)
        intent = detect_intent(msg_lower)

        if matched_scheme:
            docs = json.loads(matched_scheme.documents) if matched_scheme.documents else []
            faqs = json.loads(matched_scheme.faqs) if matched_scheme.faqs else []

            if intent == 'how_to_apply':
                reply_en = (
                    f"<strong>📝 How to Apply – {matched_scheme.title}</strong>\n\n"
                    f"{matched_scheme.how_to_apply}\n\n"
                    f"<strong>📄 Documents Required:</strong>\n"
                    + "\n".join([f"• {d}" for d in docs]) +
                    f"\n\n<strong>📞 Helpline:</strong> {matched_scheme.phone or 'N/A'}\n"
                    f"<strong>🌐 Portal:</strong> {matched_scheme.official_url or 'Visit nearest agriculture office'}"
                )
            elif intent == 'documents':
                reply_en = (
                    f"<strong>📄 Documents Required – {matched_scheme.title}</strong>\n\n"
                    + "\n".join([f"• {d}" for d in docs]) +
                    "\n\n<em>Make sure all documents are self-attested before applying.</em>"
                )
            elif intent == 'eligibility':
                reply_en = (
                    f"<strong>✅ Eligibility – {matched_scheme.title}</strong>\n\n"
                    f"{matched_scheme.eligibility}"
                )
            elif intent == 'benefits':
                reply_en = (
                    f"<strong>💰 Benefits – {matched_scheme.title}</strong>\n\n"
                    f"{matched_scheme.benefits}"
                )
            elif intent == 'deadline':
                reply_en = (
                    f"<strong>📅 Deadline – {matched_scheme.title}</strong>\n\n"
                    f"Start Date: {matched_scheme.start_date or 'N/A'}\n"
                    f"End Date: {matched_scheme.end_date or 'N/A'}\n"
                    f"Deadline: {matched_scheme.deadline or 'N/A'}"
                )
            elif intent == 'contact':
                reply_en = (
                    f"<strong>📞 Contact – {matched_scheme.title}</strong>\n\n"
                    f"Helpline: {matched_scheme.phone or 'N/A'}\n"
                    f"Official Portal: {matched_scheme.official_url or 'N/A'}"
                )
            elif intent == 'url':
                reply_en = (
                    f"<strong>🌐 Official Portal – {matched_scheme.title}</strong>\n\n"
                    f"{matched_scheme.official_url or 'Please visit your nearest agriculture office.'}"
                )
            else:
                reply_en = (
                    f"<strong>📋 {matched_scheme.title}</strong> "
                    f"<em>({matched_scheme.scheme_type} – {matched_scheme.category.upper()})</em>\n\n"
                    f"{matched_scheme.description}\n\n"
                    f"<strong>✅ Eligibility:</strong> {matched_scheme.eligibility}\n\n"
                    f"<strong>💰 Benefits:</strong> {matched_scheme.benefits}\n\n"
                    f"<strong>📝 How to Apply:</strong> {matched_scheme.how_to_apply}\n\n"
                    f"<strong>📄 Documents:</strong>\n"
                    + "\n".join([f"• {d}" for d in docs]) +
                    f"\n\n<strong>📅 Deadline:</strong> {matched_scheme.deadline or 'N/A'}\n"
                    f"<strong>📞 Helpline:</strong> {matched_scheme.phone or 'N/A'}\n"
                    f"<strong>🌐 Portal:</strong> {matched_scheme.official_url or 'N/A'}"
                )

            # Build Gemini context from matched scheme
            gemini_context = (
                f"Scheme: {matched_scheme.title}\n"
                f"Category: {matched_scheme.category}\n"
                f"Description: {matched_scheme.description}\n"
                f"Eligibility: {matched_scheme.eligibility}\n"
                f"Benefits: {matched_scheme.benefits}\n"
                f"How to Apply: {matched_scheme.how_to_apply}\n"
                f"Documents: {', '.join(docs)}\n"
                f"Deadline: {matched_scheme.deadline}\n"
                f"Helpline: {matched_scheme.phone}\n"
                f"FAQs: {'; '.join(faqs)}"
            )

    # ── STEP 5: Gemini — handles everything not answered by DB ────────────────
    if not reply_en:
        # Pure Gemini answer (general knowledge, geography, farming tips, etc.)
        gemini_reply = ask_gemini(user_message, context=gemini_context)
        reply_en = gemini_reply or (
            "Sorry, I couldn't connect right now. 😔\n"
            "Please call helpline: <strong>1800-233-0222</strong>"
        )
    else:
        # DB answered — add a short Gemini tip on top
        gemini_tip = ask_gemini(
            f"Give one very short helpful tip (1 sentence) about: {user_message}",
            context=gemini_context
        )
        if gemini_tip:
            reply_en += f"\n\n<strong>💡 Tip:</strong> {gemini_tip}"

    # ── STEP 6: Translate ──────────────────────────────────────────────────────
    if user_lang and user_lang not in ('en', 'english'):
        final_reply = translate_text(reply_en, user_lang)
    else:
        final_reply = reply_en

    return jsonify({'reply': final_reply})

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        seed_data()
    app.run(debug=True, host='0.0.0.0', port=5000)
