const farmerSchemes = [
  {
    id: 301,
    name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
    type: "Central",
    benefit: "Direct income support of ₹6,000 per year",
    eligible: "Small and Marginal Farmers",
    min_score: 40,
    official_website: "https://pmkisan.gov.in",

    description: "PM-KISAN provides direct financial support of ₹6,000 per year to small and marginal farmers to help meet agricultural expenses and ensure financial stability.",

    documents_required: [
      "Aadhaar Card",
      "Bank Account Details",
      "Land Ownership / Land Records",
      "Mobile Number"
    ],

    application_process: [
      "Visit the official PM-KISAN portal.",
      "Register using Aadhaar and bank account details.",
      "Submit landholding and personal information.",
      "Verification by authorities.",
      "Receive installment directly in bank account."
    ],

    last_date: "Ongoing as per PM-KISAN notifications.",

    contact_info: "PM-KISAN Helpline: 155261 | Official Website: https://pmkisan.gov.in",

    faqs: [
      "The scheme provides ₹6,000 per year in three installments.",
      "Only landholding farmers are eligible.",
      "Payments are directly credited to bank accounts."
    ]
  },
  {
    id: 302,
    name: "Pradhan Mantri Kisan Maandhan Yojana",
    type: "Central",
    benefit: "Pension of ₹3,000/month after 60 years",
    eligible: "Small and Marginal Farmers aged 18-40",
    min_score: 40,
    official_website: "https://www.pmkmy.gov.in",

    description: "A voluntary pension scheme for small and marginal farmers to provide financial security after retirement by contributing a small monthly amount during working years.",

    documents_required: [
      "Aadhaar Card",
      "Bank Account Details",
      "Age Proof",
      "Land Ownership Records"
    ],

    application_process: [
      "Visit PM-KMY portal or nearest CSC.",
      "Fill registration form with personal, bank, and land details.",
      "Pay monthly contribution.",
      "Verification by authorities.",
      "Receive pension of ₹3,000/month after age 60."
    ],

    last_date: "Ongoing scheme.",

    contact_info: "Helpline: 1800-180-1111 | Official Website: https://www.pmkmy.gov.in",

    faqs: [
      "The pension starts at age 60.",
      "Contribution amount depends on age at entry.",
      "Both male and female farmers can enroll."
    ]
  },
  {
    id: 303,
    name: "Sub-Mission on Agricultural Mechanization (SMAM)",
    type: "Central",
    benefit: "Subsidy on agricultural machinery",
    eligible: "Small and Marginal Farmers",
    min_score: 45,
    official_website: "https://agrimachinery.nic.in",

    description: "SMAM promotes modern agricultural machinery among farmers. It provides subsidies for tractors, harvesters, seed drills, and other mechanized tools to increase productivity.",

    documents_required: [
      "Aadhaar Card",
      "Land Ownership / Land Records",
      "Bank Account Details",
      "Caste Certificate (if applicable)",
      "Quotation of Agricultural Machinery",
      "Passport Size Photographs"
    ],

    application_process: [
      "Visit the official SMAM portal or nearest Agriculture Department office.",
      "Register with required personal and land details.",
      "Select the agricultural machinery for which subsidy is required.",
      "Upload necessary documents and quotation.",
      "Verification by concerned authority.",
      "Receive subsidy amount directly in bank account after approval."
    ],

    last_date: "As per state and central government subsidy notifications.",

    contact_info: "Contact District Agriculture Office | Official Website: https://agrimachinery.nic.in",

    faqs: [
      "SMAM provides subsidy on purchase of agricultural machinery.",
      "Small and marginal farmers get higher subsidy benefits.",
      "Subsidy amount varies based on category and equipment.",
      "The scheme helps improve productivity and reduce labor costs."
    ]
  },
  {
    id: 304,
    name: "Rashtriya Krishi Vikas Yojana (RKVY)",
    type: "Central",
    benefit: "Grants for crop development and infrastructure",
    eligible: "All farmers",
    min_score: 40,
    official_website: "https://rkvy.nic.in",

    description: "RKVY provides financial assistance to farmers and states for crop development, modern farming techniques, and agricultural infrastructure.",

    documents_required: [
      "Aadhaar Card",
      "Land Records",
      "Bank Account Details",
      "Project Proposal (for infrastructure support)"
    ],

    application_process: [
      "Visit RKVY official portal or district agriculture office.",
      "Submit proposal or register for grants.",
      "Provide all required documents.",
      "Verification and approval by authorities.",
      "Receive grant amount or subsidy as per approval."
    ],

    last_date: "Ongoing as per annual notifications.",

    contact_info: "District Agriculture Office | Official Website: https://rkvy.nic.in",

    faqs: [
      "RKVY supports modern agricultural practices.",
      "Grants can be used for crops or infrastructure projects.",
      "Open to farmers and farmer organizations."
    ]
  },
  {
    id: 305,
    name: "Agriculture Infrastructure Fund (AIF)",
    type: "Central",
    benefit: "Financial support for storage, cold chains, and processing units",
    eligible: "Farmers, FPOs, Cooperatives, Agri-entrepreneurs",
    min_score: 50,
    official_website: "https://agriinfra.dac.gov.in",

    description: "AIF provides long-term finance and interest subvention for building farm storage, cold storage, and processing units to reduce post-harvest losses and improve profitability.",

    documents_required: [
      "Aadhaar Card",
      "Bank Account Details",
      "Project Proposal",
      "Land Ownership Records"
    ],

    application_process: [
      "Apply via official AIF portal.",
      "Submit project proposal with all documents.",
      "Verification by nodal officer.",
      "Sanction and disbursement of funds.",
      "Start project implementation with financial support."
    ],

    last_date: "Applications accepted as per scheme cycle.",

    contact_info: "AIF Helpdesk | Official Website: https://agriinfra.dac.gov.in",

    faqs: [
      "AIF supports both individuals and FPOs.",
      "Interest subvention reduces financial burden.",
      "Funds can be used for post-harvest infrastructure."
    ]
  },
  {
    id: 306,
    name: "Interest Subvention on Short-Term Crop Loans",
    type: "Central",
    benefit: "Lower interest on crop loans",
    eligible: "All farmers with crop loans",
    min_score: 40,
    official_website: "https://www.rbi.org.in",

    description: "This scheme reduces the interest rate on short-term crop loans by 2-3% for farmers, helping reduce the cost of borrowing for cultivation purposes.",

    documents_required: [
      "Aadhaar Card",
      "Bank Loan Documents",
      "Land Ownership Records"
    ],

    application_process: [
      "Apply for a crop loan at a participating bank.",
      "Bank applies interest subvention automatically.",
      "Verify loan documents and disbursement."
    ],

    last_date: "Ongoing scheme as per bank notifications.",

    contact_info: "Participating Banks | RBI Website: https://www.rbi.org.in",

    faqs: [
      "Interest subvention reduces effective interest rate for farmers.",
      "Available for crop loans up to ₹3 lakhs.",
      "Bank handles the application process."
    ]
  },
  {
    id: 307,
    name: "Subsidy on Seeds and Fertilizers",
    type: "Central",
    benefit: "Reduced cost of seeds and fertilizers",
    eligible: "All farmers",
    min_score: 40,
    official_website: "https://agricoop.nic.in",

    description: "Government provides subsidy on quality seeds and fertilizers to reduce the cost of cultivation and encourage better farming practices.",

    documents_required: [
      "Aadhaar Card",
      "Ration Card (if required)",
      "Bank Account Details",
      "Land Records"
    ],

    application_process: [
      "Purchase seeds/fertilizers from registered dealers.",
      "Provide Aadhaar and land details.",
      "Subsidy automatically applied at purchase point."
    ],

    last_date: "Ongoing as per government notification.",

    contact_info: "District Agriculture Office | Official Website: https://agricoop.nic.in",

    faqs: [
      "Subsidy is applied at dealer level.",
      "Encourages purchase of quality inputs.",
      "Available for various crops."
    ]
  },
  {
    id: 308,
    name: "Mahatma Jyotirao Phule Karj Mafi Yojana",
    type: "Maharashtra",
    benefit: "Farm loan waiver",
    eligible: "Eligible Farmers of Maharashtra",
    min_score: 40,
    official_website: "https://mjpsky.maharashtra.gov.in",

    description: "State-level loan waiver scheme for farmers in Maharashtra to provide relief from outstanding agricultural debts.",

    documents_required: [
      "Aadhaar Card",
      "Land Records",
      "Bank Loan Documents"
    ],

    application_process: [
      "Visit nearest agriculture office or official portal.",
      "Submit loan details and personal information.",
      "Verification by authorities.",
      "Loan waiver processed and communicated."
    ],

    last_date: "As per state government notification.",

    contact_info: "District Agriculture Office | Official Website: https://mjpsky.maharashtra.gov.in",

    faqs: [
      "Loan waiver reduces financial burden.",
      "Eligibility depends on state criteria.",
      "Only for farmers with outstanding loans."
    ]
  },
  {
    id: 309,
    name: "Rythu Bandhu Scheme",
    type: "Maharashtra",
    benefit: "Investment support of ₹5,000 per acre per season",
    eligible: "Farmer landowners in Telangana",
    min_score: 40,
    official_website: "https://pmkisan.gov.in/rythubandhu",

    description: "State-level investment support in Telangana to help farmers meet cultivation expenses and reduce financial stress.",

    documents_required: [
      "Aadhaar Card",
      "Land Records",
      "Bank Account Details"
    ],

    application_process: [
      "Registration through state portal or local agriculture office.",
      "Submit land and personal details.",
      "Verification by officials.",
      "Investment support credited to bank account."
    ],

    last_date: "As per Telangana government notification.",

    contact_info: "Telangana Agriculture Department | Official Website: https://pmkisan.gov.in/rythubandhu",

    faqs: [
      "Support is credited per acre per season.",
      "Only landowners are eligible.",
      "Funds can be used for crop cultivation."
    ]
  },
  {
    id: 310,
    name: "CM-Kisan Scheme",
    type: "Maharashtra",
    benefit: "Direct benefit transfer to farmers",
    eligible: "Farmers in Odisha",
    min_score: 40,
    official_website: "https://odishafarmers.gov.in/cm-kisan",

    description: "Odisha state-level scheme provides direct financial assistance to farmers to support agricultural activities.",

    documents_required: [
      "Aadhaar Card",
      "Bank Account Details",
      "Land Records"
    ],

    application_process: [
      "Register on state CM-Kisan portal or local CSC.",
      "Submit personal and land details.",
      "Verification by authorities.",
      "Funds transferred directly to bank account."
    ],

    last_date: "Ongoing as per state notification.",

    contact_info: "Odisha Agriculture Department | Official Website: https://odishafarmers.gov.in/cm-kisan",

    faqs: [
      "Direct benefit transfer reduces middlemen delays.",
      "Eligibility as per state criteria.",
      "Funds help with farming inputs and expenses."
    ]
  },
  {
    id: 311,
    name: "Pradhan Mantri FPO Scheme",
    type: "Central",
    benefit: "Financial support to Farmer Producer Organizations",
    eligible: "FPOs and small farmer groups",
    min_score: 50,
    official_website: "https://fpo.dac.gov.in",

    description: "Supports Farmer Producer Organizations by providing grants for capacity building, infrastructure, and production enhancement.",

    documents_required: [
      "FPO Registration Certificate",
      "Bank Account Details",
      "Project Proposal"
    ],

    application_process: [
      "FPO applies on official portal.",
      "Submit documents and project proposal.",
      "Verification and approval.",
      "Funds disbursed as per approved project."
    ],

    last_date: "As per scheme notifications.",

    contact_info: "DAC FPO Division | Official Website: https://fpo.dac.gov.in",

    faqs: [
      "FPOs can receive grants for infrastructure and production.",
      "Small farmers benefit indirectly via FPO support.",
      "Supports market linkages and capacity building."
    ]
  },
  {
    id: 312,
    name: "Krishi Sinchai Yojana (PMKSY)",
    type: "Central",
    benefit: "Subsidy for irrigation and water conservation",
    eligible: "Farmers with cultivable land",
    min_score: 40,
    official_website: "https://pmksy.gov.in",

    description: "Pradhan Mantri Krishi Sinchai Yojana provides financial support for irrigation projects, micro-irrigation, and water harvesting to improve water use efficiency and crop productivity.",

    documents_required: [
      "Aadhaar Card",
      "Land Records",
      "Bank Account Details",
      "Project Proposal (if required)"
    ],

    application_process: [
      "Apply via PMKSY portal or local agriculture office.",
      "Submit land and project details.",
      "Verification and approval.",
      "Subsidy released for approved irrigation systems."
    ],

    last_date: "Ongoing as per scheme cycle.",

    contact_info: "District Agriculture Office | Official Website: https://pmksy.gov.in",

    faqs: [
      "Subsidy available for drip and sprinkler irrigation.",
      "Promotes efficient water usage.",
      "Only landowning farmers eligible."
    ]
  },
  {
    id: 313,
    name: "Maharashtra Bhumi Sudhar Yojana",
    type: "Maharashtra",
    benefit: "Financial assistance for land development and leveling",
    eligible: "Small and Marginal Farmers in Maharashtra",
    min_score: 40,
    official_website: "https://agrima.maharashtra.gov.in",

    description: "This scheme provides financial support to farmers for land development, leveling, and improvement of irrigation facilities to enhance crop productivity.",

    documents_required: [
      "Aadhaar Card",
      "Land Ownership Records",
      "Bank Account Details",
      "Land Survey / Plot Map"
    ],

    application_process: [
      "Visit the local agriculture office or official portal.",
      "Submit land details and required documents.",
      "Verification and site inspection by officials.",
      "Approval of subsidy amount.",
      "Funds credited directly to bank account."
    ],

    last_date: "As per state government notifications.",

    contact_info: "District Agriculture Office | Official Website: https://agrima.maharashtra.gov.in",

    faqs: [
      "Scheme supports land leveling and irrigation improvement.",
      "Small and marginal farmers get priority.",
      "Funds are directly transferred to the farmer’s bank account."
    ]
},
{
    id: 314,
    name: "Maharashtra Fertilizer Subsidy Scheme",
    type: "Maharashtra",
    benefit: "Subsidy on fertilizers to reduce cultivation costs",
    eligible: "All Farmers in Maharashtra",
    min_score: 40,
    official_website: "https://agrima.maharashtra.gov.in",

    description: "State government provides subsidy on chemical and organic fertilizers to help farmers reduce input costs and encourage balanced nutrient use for crops.",

    documents_required: [
      "Aadhaar Card",
      "Bank Account Details",
      "Land Records",
      "Purchase Receipt from Registered Dealer"
    ],

    application_process: [
      "Purchase fertilizers from registered dealers.",
      "Provide Aadhaar and land details at purchase.",
      "Subsidy automatically applied at point of sale.",
      "Ensure receipts are saved for verification if required."
    ],

    last_date: "As per state government notifications.",

    contact_info: "District Agriculture Office | Official Website: https://agrima.maharashtra.gov.in",

    faqs: [
      "Subsidy reduces overall fertilizer cost.",
      "Applicable for all registered farmers in Maharashtra.",
      "Encourages proper nutrient management for crops."
    ]
}
];