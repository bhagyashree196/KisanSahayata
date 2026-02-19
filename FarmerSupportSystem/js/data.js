// ===== SCHEMES DATABASE =====

// Maharashtra State Schemes
const maharashtraSchemes = [
  {
  id: 101,
  name: "Mahatma Jyotirao Phule Karj Mafi Yojana",
  type: "Maharashtra",
  benefit: "Farm loan waiver",
  eligible: "Eligible Farmers of Maharashtra",
  min_score: 40,
  official_website: "https://mjpsky.maharashtra.gov.in",
  start_date: "01-01-2022",
  end_date: "31-03-2026",
  phone: "1800-233-0222",

  // Detailed Information
  description: "Mahatma Jyotirao Phule Karj Mafi Yojana is a Maharashtra Government scheme aimed at providing farm loan waiver assistance to farmers facing financial difficulties. The scheme helps reduce the burden of outstanding crop loans taken from nationalized, cooperative, and rural banks. It ensures financial stability and promotes sustainable agricultural development in the state.",

  documents_required: [
    "Aadhar Card",
    "Bank Passbook",
    "Loan Account Statement",
    "Land Ownership Documents (7/12 extract)",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the official Maharashtra Government portal.",
    "Login using Aadhar-linked mobile number.",
    "Verify personal and loan details.",
    "Upload required documents.",
    "Submit the application online.",
    "Track application status through the portal."
  ],

  
  faqs: [
    "Only eligible farmers with crop loans are covered under this scheme.",
    "Loan waiver amount depends on government eligibility criteria.",
    "Farmers must ensure bank and Aadhar details are correctly linked."
    ]
  },
  {
  id: 102,
  name: "Baliraja Chetna Abhiyan",
  type: "Maharashtra",
  benefit: "Farmer awareness and counseling support",
  eligible: "All Farmers in Maharashtra",
  min_score: 30,
  official_website: "https://maharashtra.gov.in",
  start_date: "01-01-2006",
end_date: "Ongoing",
phone: "1800-233-0222",

  

  // Detailed Information
  description: "Baliraja Chetna Abhiyan is an awareness and counseling initiative launched by the Government of Maharashtra to support farmers facing financial, social, and psychological stress. The scheme focuses on educating farmers about modern agricultural practices, financial planning, government schemes, mental health counseling, and sustainable farming techniques. It aims to reduce farmer distress and promote overall well-being in rural areas.",

  documents_required: [
    "Aadhar Card",
    "Farmer ID (if available)",
    "Land Ownership Proof (7/12 extract)",
    "Mobile Number",
    "Residence Proof"
  ],

  application_process: [
    "Visit the nearest Agriculture Office or Gram Panchayat.",
    "Register your details for the awareness program.",
    "Attend counseling or training sessions conducted by officials.",
    "Participate in workshops related to modern farming techniques and government schemes.",
    "Follow up with local agriculture officers for additional support."
  ],

 
  faqs: [
    "This scheme is available for all farmers in Maharashtra.",
    "Counseling services are provided free of cost.",
    "Farmers can participate in multiple awareness programs under this initiative."
   ]
  },
  {
  id: 103,
  name: "Magel Tyala Shettale Yojana",
  type: "Maharashtra",
  benefit: "Farm pond construction subsidy",
  eligible: "Farmers with land ownership",
  min_score: 50,
  official_website: "https://mahadbt.maharashtra.gov.in",
start_date: "01-01-2016",
end_date: "Ongoing",
phone: "022-49150800",

  // Detailed Information
  description: "Magel Tyala Shettale Yojana is a Maharashtra Government scheme that provides financial assistance to farmers for constructing farm ponds (Shettale) on their agricultural land. The scheme aims to promote water conservation, improve irrigation facilities, and enhance crop productivity. By storing rainwater in farm ponds, farmers can ensure water availability during dry seasons and reduce dependency on rainfall.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents (7/12 extract)",
    "Bank Passbook",
    "Passport Size Photograph",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the MahaDBT official portal.",
    "Register/Login using Aadhar-linked mobile number.",
    "Select 'Magel Tyala Shettale Yojana' from available schemes.",
    "Fill in land and personal details.",
    "Upload required documents.",
    "Submit application and track status online."
  ],

 
  faqs: [
    "Subsidy amount depends on pond size and government guidelines.",
    "Only farmers with valid land ownership can apply.",
    "Technical inspection may be conducted before subsidy approval."
  ]
},
  {
  id: 104,
  name: "Dr. Punjabrao Deshmukh Interest Subsidy Scheme",
  type: "Maharashtra",
  benefit: "Interest subsidy on crop loans",
  eligible: "Farmers with crop loans",
  min_score: 45,
  official_website: "https://maharashtra.gov.in",
  start_date: "01-01-2005",
end_date: "Ongoing",
phone: "1800-233-0222",


  // Detailed Information
  description: "Dr. Punjabrao Deshmukh Interest Subsidy Scheme is a Maharashtra Government initiative that provides interest subsidy on short-term crop loans taken by farmers. The scheme encourages timely repayment of agricultural loans by offering reduced interest rates. Farmers who repay their crop loans within the stipulated time are eligible for interest concessions, thereby reducing their financial burden and promoting credit discipline.",

  documents_required: [
    "Aadhar Card",
    "Bank Passbook",
    "Crop Loan Sanction Letter",
    "Loan Repayment Proof",
    "Land Ownership Documents (7/12 extract)"
  ],

  application_process: [
    "Obtain crop loan from a nationalized or cooperative bank.",
    "Ensure timely repayment of the loan within the due date.",
    "Bank verifies eligibility for interest subsidy.",
    "Subsidy amount is credited directly to the farmer's loan account.",
    "Check status through the respective bank branch."
  ],

 
  faqs: [
    "Only short-term crop loans are eligible for interest subsidy.",
    "Farmers must repay the loan within the specified time to receive benefits.",
    "Subsidy is credited directly through the banking system."
  ]
},
  {
  id: 105,
  name: "Nanaji Deshmukh Krishi Sanjivani Project (PoCRA)",
  type: "Maharashtra",
  benefit: "Climate-resilient agriculture support",
  eligible: "Farmers in drought-prone areas",
  min_score: 60,
  official_website: "https://pocra.maharashtra.gov.in",
  start_date: "01-01-2018",
end_date: "31-03-2025",
phone: "022-69117300",



  // Detailed Information
  description: "Nanaji Deshmukh Krishi Sanjivani Project (PoCRA - Project on Climate Resilient Agriculture) is an initiative by the Government of Maharashtra to support farmers in drought-prone and climate-vulnerable regions. The scheme promotes climate-resilient farming practices, water conservation, soil health improvement, crop diversification, and sustainable agricultural technologies. It aims to increase farm productivity and income while reducing climate-related risks.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents (7/12 extract)",
    "Bank Passbook",
    "Village Residency Proof",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the PoCRA official portal or contact the Gram Panchayat.",
    "Check if your village is listed under the PoCRA project area.",
    "Register with required personal and land details.",
    "Select eligible climate-resilient activities or interventions.",
    "Submit documents for verification.",
    "Approval and financial assistance provided as per guidelines."
  ],

 
  faqs: [
    "Only selected drought-prone villages are covered under PoCRA.",
    "Financial assistance varies depending on selected activities.",
    "The scheme promotes water conservation and sustainable farming methods."
  ]
},
  {
  id: 106,
  name: "Maharashtra State Crop Insurance Scheme",
  type: "Maharashtra",
  benefit: "Crop insurance coverage",
  eligible: "All Farmers",
  min_score: 35,
  official_website: "https://krishi.maharashtra.gov.in",
start_date: "01-01-2015",
end_date: "Ongoing",
phone: "022-49150800",

  // Detailed Information
  description: "Maharashtra State Crop Insurance Scheme provides financial protection to farmers against crop loss due to natural calamities such as drought, flood, cyclone, unseasonal rainfall, pest attacks, and diseases. The scheme ensures risk coverage and stabilizes farmers' income by compensating them for yield losses. It aims to encourage farmers to adopt modern agricultural practices without fear of financial loss.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents (7/12 extract)",
    "Bank Passbook",
    "Sowing Certificate (from local authority)",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the nearest bank branch or agriculture office.",
    "Fill out the crop insurance application form.",
    "Submit required documents and crop details.",
    "Pay the applicable premium amount (if required).",
    "Receive acknowledgment receipt and policy details.",
    "In case of crop damage, report loss to local agriculture officer within the stipulated time."
  ],

 
  faqs: [
    "Both loanee and non-loanee farmers can apply.",
    "Premium amount varies depending on crop type and season.",
    "Compensation is credited directly to the farmer's bank account."
  ]
},
{
  id: 107,
  name: "Gopinath Munde Shetkari Apghat Suraksha Yojana",
  type: "Maharashtra",
  benefit: "Accidental insurance coverage",
  eligible: "Registered Farmers",
  min_score: 30,
  official_website: "https://maharashtra.gov.in",
  start_date: "01-01-2018",
end_date: "Ongoing",
phone: "1800-233-0222",


  // Detailed Information
  description: "Gopinath Munde Shetkari Apghat Suraksha Yojana is an accident insurance scheme launched by the Government of Maharashtra to provide financial assistance to farmers and their families in case of accidental death or disability. The scheme offers compensation to reduce financial hardship caused by unforeseen accidents during agricultural activities or otherwise.",

  documents_required: [
    "Aadhar Card",
    "Farmer Registration Proof",
    "Land Ownership Documents (7/12 extract)",
    "Bank Passbook",
    "Accident Report (FIR or Medical Certificate in case of claim)",
    "Death Certificate (if applicable)"
  ],

  application_process: [
    "Ensure farmer registration with the concerned authority.",
    "In case of accident, report to local police station and obtain FIR (if required).",
    "Collect medical certificate or hospital documents.",
    "Submit claim application at District Agriculture Office or designated authority.",
    "Attach required documents for verification.",
    "After approval, compensation amount is credited to beneficiary's bank account."
  ],


  faqs: [
    "Compensation amount depends on nature of accident (death or disability).",
    "Only registered farmers are eligible under this scheme.",
    "Family members can claim benefits in case of farmer's accidental death."
  ]
},
  {
  id: 108,
  name: "Mukhyamantri Saur Krushi Pump Yojana",
  type: "Maharashtra",
  benefit: "Solar pump subsidy",
  eligible: "Farmers without electricity connection",
  min_score: 55,
  official_website: "https://mahadiscom.in",
  start_date: "01-01-2019",
end_date: "Ongoing",
phone: "1912",


  // Detailed Information
  description: "Mukhyamantri Saur Krushi Pump Yojana is a Maharashtra Government initiative that provides subsidy for installation of solar-powered agricultural pumps. The scheme is specially designed for farmers who do not have access to regular electricity connections. By promoting renewable energy, the scheme reduces dependence on conventional power sources, lowers irrigation costs, and supports sustainable farming practices.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents (7/12 extract)",
    "Bank Passbook",
    "Passport Size Photograph",
    "Declaration of no electricity connection",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the official MahaDiscom portal.",
    "Register/Login using valid credentials.",
    "Select Mukhyamantri Saur Krushi Pump Yojana.",
    "Fill in personal and land details.",
    "Upload required documents.",
    "Submit application and wait for technical verification.",
    "Upon approval, subsidy is provided for solar pump installation."
  ],

 
  faqs: [
    "Subsidy percentage varies based on farmer category.",
    "Only farmers without existing electricity pump connections are eligible.",
    "Solar pump capacity is allocated as per land size and irrigation requirement."
  ]
},
  {
  id: 109,
  name: "Rajiv Gandhi Krishi Vikas Yojana",
  type: "Maharashtra",
  benefit: "Support for agricultural development",
  eligible: "All Farmers",
  min_score: 45,
  official_website: "https://maharashtra.gov.in",
  start_date: "01-01-2007",
end_date: "Ongoing",
phone: "1800-233-0222",


  // Detailed Information
  description: "Rajiv Gandhi Krishi Vikas Yojana is an agricultural development initiative aimed at improving farm productivity, infrastructure, and farmers' income in Maharashtra. The scheme focuses on modern farming techniques, irrigation support, farm mechanization, soil health improvement, and crop diversification. It encourages adoption of scientific agricultural practices to ensure sustainable growth in the agriculture sector.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents (7/12 extract)",
    "Bank Passbook",
    "Farmer Registration Certificate (if available)",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the nearest Agriculture Office or official government portal.",
    "Register for the scheme with required personal and land details.",
    "Select the agricultural development component you wish to apply for.",
    "Submit necessary documents for verification.",
    "Await approval from district agriculture authorities.",
    "Financial assistance or benefits are provided as per guidelines."
  ],

  
  faqs: [
    "The scheme supports multiple agricultural development activities.",
    "Financial assistance varies depending on selected component.",
    "Farmers must comply with guidelines issued by the Agriculture Department."
  ]
},
  {
  id: 110,
  name: "Pandit Deendayal Upadhyay Krishi Vikas Yojana",
  type: "Maharashtra",
  benefit: "Financial assistance for farming projects",
  eligible: "Small and Marginal Farmers",
  min_score: 50,
  official_website: "https://maharashtra.gov.in",
  start_date: "01-01-2014",
end_date: "Ongoing",
phone: "1800-233-0222",


  // Detailed Information
  description: "Pandit Deendayal Upadhyay Krishi Vikas Yojana is a Maharashtra Government scheme aimed at providing financial assistance to small and marginal farmers for implementing innovative and sustainable farming projects. The scheme supports activities such as farm mechanization, irrigation development, horticulture expansion, livestock integration, and value addition. It focuses on improving farm income and promoting self-reliant agriculture.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents (7/12 extract)",
    "Bank Passbook",
    "Income Certificate",
    "Project Proposal or Farming Plan",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the nearest Agriculture Office or official government portal.",
    "Register under the scheme with required personal details.",
    "Submit a project proposal for financial assistance.",
    "Attach necessary documents for verification.",
    "Application is reviewed by district-level committee.",
    "Upon approval, financial assistance is credited to bank account."
  ],

  
  faqs: [
    "Only small and marginal farmers are eligible under this scheme.",
    "Project proposal must align with agricultural development guidelines.",
    "Subsidy amount depends on the type and scale of the farming project."
  ]
},
  {
  id: 111,
  name: "Integrated Watershed Development Programme (Maharashtra)",
  type: "Maharashtra",
  benefit: "Watershed and land development",
  eligible: "Farmers in selected areas",
  min_score: 60,
  official_website: "https://maharashtra.gov.in",
  start_date: "01-01-2009",
end_date: "Ongoing",
phone: "1800-233-0222",


  // Detailed Information
  description: "Integrated Watershed Development Programme (IWDP) is a Maharashtra Government initiative aimed at conserving soil and water resources in drought-prone and rain-fed areas. The scheme focuses on watershed management, land treatment, water harvesting structures, afforestation, and sustainable agricultural practices. It improves groundwater recharge, increases crop productivity, and enhances rural livelihoods through community participation.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents (7/12 extract)",
    "Bank Passbook",
    "Village Residency Proof",
    "Consent for participation in watershed activities"
  ],

  application_process: [
    "Check if your village is included under the watershed project area.",
    "Register through Gram Panchayat or local Watershed Committee.",
    "Submit required land and identity documents.",
    "Participate in community meetings and project planning activities.",
    "Land development or water conservation work is carried out as per project guidelines."
  ],

 
  faqs: [
    "Only farmers in notified watershed areas are eligible.",
    "The scheme focuses on community-based land and water conservation.",
    "Financial and technical support is provided under government supervision."
  ]
},
  {
  id: 112,
  name: "Horticulture Mission Maharashtra",
  type: "Maharashtra",
  benefit: "Support for horticulture crops",
  eligible: "Farmers growing fruits and vegetables",
  min_score: 50,
  official_website: "https://krishi.maharashtra.gov.in",
start_date: "01-01-2005",
end_date: "Ongoing",
phone: "022-49150800",

  // Detailed Information
  description: "Horticulture Mission Maharashtra is a state initiative aimed at promoting the cultivation of fruits, vegetables, flowers, spices, and medicinal plants. The scheme provides financial assistance, technical guidance, and infrastructure support for horticulture development. It focuses on increasing productivity, improving quality, encouraging drip irrigation, and boosting farmers' income through diversification into high-value crops.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents (7/12 extract)",
    "Bank Passbook",
    "Crop Plantation Details",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the Agriculture Department portal or nearest Agriculture Office.",
    "Register under the Horticulture Mission scheme.",
    "Select the crop or horticulture activity you wish to undertake.",
    "Submit required land and crop details along with documents.",
    "Application is verified by agriculture officials.",
    "Upon approval, subsidy or assistance is provided as per guidelines."
  ],

 
  faqs: [
    "Subsidy varies depending on type of horticulture crop.",
    "Drip irrigation and protected cultivation may receive additional benefits.",
    "Technical guidance is provided by agriculture officers."
  ]
},
  {
  id: 113,
  name: "Maharashtra Seed Subsidy Scheme",
  type: "Maharashtra",
  benefit: "Subsidy on quality seeds",
  eligible: "Registered Farmers",
  min_score: 35,
  official_website: "https://mahadbt.maharashtra.gov.in",
  start_date: "01-01-2010",
end_date: "Ongoing",
phone: "022-49150800",


  // Detailed Information
  description: "Maharashtra Seed Subsidy Scheme provides financial assistance to farmers for purchasing certified and high-quality seeds. The objective of the scheme is to improve crop productivity, ensure better germination rates, and promote the use of scientifically approved seed varieties. By encouraging farmers to use quality seeds, the government aims to enhance agricultural output and farmers' income.",

  documents_required: [
    "Aadhar Card",
    "Farmer Registration Certificate",
    "Land Ownership Documents (7/12 extract)",
    "Bank Passbook",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the MahaDBT official portal.",
    "Register/Login using Aadhar-linked mobile number.",
    "Select Maharashtra Seed Subsidy Scheme.",
    "Enter crop and land details.",
    "Upload required documents.",
    "Submit application and wait for approval.",
    "Subsidy amount is credited to bank account after verification."
  ],

  faqs: [
    "Only certified seeds purchased from approved suppliers are eligible.",
    "Subsidy percentage depends on crop type and farmer category.",
    "Application must be submitted before sowing season."
  ]
},
  {
  id: 114,
  name: "Dairy Entrepreneurship Development Scheme (Maharashtra)",
  type: "Maharashtra",
  benefit: "Financial assistance for dairy units",
  eligible: "Farmers and dairy entrepreneurs",
  min_score: 55,
  official_website: "https://maharashtra.gov.in",
  start_date: "01-01-2010",
end_date: "Ongoing",
phone: "1800-233-0222",


  // Detailed Information
  description: "Dairy Entrepreneurship Development Scheme (Maharashtra) provides financial assistance to farmers and entrepreneurs for establishing and expanding dairy units. The scheme supports activities such as purchase of milch animals, construction of dairy sheds, milk storage facilities, and fodder development. It aims to promote self-employment, increase milk production, and strengthen the rural dairy sector.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership or Shed Construction Proof",
    "Bank Passbook",
    "Project Report for Dairy Unit",
    "Income Certificate",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Prepare a dairy unit project report with estimated investment details.",
    "Visit the nearest District Animal Husbandry Office or bank.",
    "Apply for financial assistance under the scheme.",
    "Submit required documents and project proposal.",
    "Application is reviewed by concerned authorities.",
    "Upon approval, subsidy or loan assistance is provided."
  ],

  
  faqs: [
    "Subsidy amount depends on size and type of dairy unit.",
    "Both individual farmers and self-help groups can apply.",
    "Proper maintenance of dairy unit is required to continue benefits."
  ]
},
 {
  id: 115,
  name: "Maharashtra Farm Mechanization Scheme",
  type: "Maharashtra",
  benefit: "Subsidy on farm equipment",
  eligible: "Small and Marginal Farmers",
  min_score: 45,
  official_website: "https://mahadbt.maharashtra.gov.in",
  start_date: "01-01-2015",
end_date: "Ongoing",
phone: "022-49150800",


  // Detailed Information
  description: "Maharashtra Farm Mechanization Scheme provides financial assistance to small and marginal farmers for purchasing modern agricultural equipment and machinery. The scheme promotes the use of tractors, power tillers, harvesters, seed drills, sprayers, and other advanced tools to increase efficiency, reduce labor dependency, and improve crop productivity. It supports modernization of agriculture and helps farmers adopt scientific farming methods.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents (7/12 extract)",
    "Bank Passbook",
    "Farmer Registration Certificate",
    "Quotation of Agricultural Equipment",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the MahaDBT official portal.",
    "Register/Login using Aadhar-linked mobile number.",
    "Select Maharashtra Farm Mechanization Scheme.",
    "Choose the required agricultural equipment.",
    "Upload necessary documents and equipment quotation.",
    "Submit application for verification.",
    "After approval, subsidy amount is transferred to the bank account."
  ],

 
  faqs: [
    "Subsidy percentage varies based on farmer category and equipment type.",
    "Only approved agricultural equipment suppliers are eligible.",
    "Application must be submitted before purchasing the equipment."
  ]
}

];

// Central Government Schemes
const centralSchemes = [
  {
  id: 1,
  name: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN)",
  type: "Central",
  benefit: "₹6000 per year income support",
  eligible: "Small and Marginal Farmers",
  min_score: 40,
  official_website: "https://pmkisan.gov.in",
start_date: "01-12-2018",
end_date: "Ongoing",
phone: "155261 / 1800-115-526",

  // Detailed Information
  description: "Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Government scheme that provides financial income support of ₹6000 per year to eligible farmer families. The amount is transferred directly to farmers' bank accounts in three equal installments of ₹2000 each. The scheme aims to supplement financial needs for agricultural inputs and support farmers in managing household expenses.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents",
    "Bank Account Details",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the official PM-KISAN portal.",
    "Click on 'New Farmer Registration'.",
    "Enter Aadhar number and verify using OTP.",
    "Fill in personal and land details.",
    "Submit application for verification.",
    "After approval, installments are credited directly to bank account."
  ],

 
  faqs: [
    "Farmers must have cultivable land in their name.",
    "Amount is transferred directly through Direct Benefit Transfer (DBT).",
    "eKYC is mandatory to receive installments."
  ]
},
  {
  id: 2,
  name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
  type: "Central",
  benefit: "Crop insurance against natural disasters",
  eligible: "All Farmers",
  min_score: 30,
  official_website: "https://pmfby.gov.in",
start_date: "18-02-2016",
end_date: "Ongoing",
phone: "14447",

  // Detailed Information
  description: "Pradhan Mantri Fasal Bima Yojana (PMFBY) is a Central Government crop insurance scheme that provides financial protection to farmers against crop loss due to natural calamities such as drought, flood, cyclone, unseasonal rainfall, pest attacks, and diseases. The scheme aims to stabilize farmers' income, encourage adoption of innovative agricultural practices, and ensure continuity in farming activities despite risks.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership or Cultivation Proof",
    "Bank Passbook",
    "Sowing Certificate (if required)",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the nearest bank branch, Common Service Center (CSC), or PMFBY portal.",
    "Fill out the crop insurance application form.",
    "Submit required documents along with crop details.",
    "Pay the applicable premium amount (as per crop type).",
    "Receive acknowledgment receipt and insurance coverage details.",
    "In case of crop loss, inform local agriculture officer within the stipulated time."
  ],

 
  faqs: [
    "Farmers pay a minimal premium while the remaining amount is subsidized by the government.",
    "Both loanee and non-loanee farmers can enroll.",
    "Compensation is credited directly to the farmer’s bank account through DBT."
  ]
},
  {
  id: 3,
  name: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY)",
  type: "Central",
  benefit: "Irrigation support and water efficiency",
  eligible: "Farmers with irrigation needs",
  min_score: 50,
  official_website: "https://pmksy.gov.in",
start_date: "01-07-2015",
end_date: "Ongoing",
phone: "011-23382012",

  // Detailed Information
  description: "Pradhan Mantri Krishi Sinchai Yojana (PMKSY) is a Central Government initiative aimed at improving irrigation facilities and promoting efficient water use in agriculture. The scheme focuses on expanding irrigated areas, promoting micro-irrigation systems such as drip and sprinkler irrigation, and ensuring 'Har Khet Ko Pani' (water to every field). It enhances water conservation, increases crop productivity, and supports sustainable agricultural growth.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents",
    "Bank Passbook",
    "Irrigation Requirement Details",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the official PMKSY portal or nearest Agriculture Office.",
    "Register under the relevant PMKSY component (e.g., Micro Irrigation).",
    "Submit land and irrigation requirement details.",
    "Upload necessary documents for verification.",
    "Application is reviewed by district authorities.",
    "Upon approval, subsidy or technical assistance is provided."
  ],

 
  faqs: [
    "Subsidy percentage varies depending on irrigation system type.",
    "Micro-irrigation systems receive higher subsidy benefits.",
    "The scheme promotes water conservation and efficient irrigation practices."
  ]
},
  {
  id: 4,
  name: "Soil Health Card Scheme",
  type: "Central",
  benefit: "Soil testing and fertilizer recommendation",
  eligible: "All Farmers",
  min_score: 20,
  official_website: "https://soilhealth.dac.gov.in",
start_date: "19-02-2015",
end_date: "Ongoing",
phone: "011-23382012",

  // Detailed Information
  description: "Soil Health Card Scheme is a Central Government initiative that provides farmers with soil testing reports and customized fertilizer recommendations. The scheme helps farmers understand the nutrient status of their soil and promotes balanced use of fertilizers. By improving soil health, the scheme aims to increase crop productivity, reduce input costs, and ensure sustainable agricultural practices.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership or Cultivation Proof",
    "Farmer Registration Details",
    "Mobile Number"
  ],

  application_process: [
    "Visit the nearest Agriculture Office or Soil Testing Laboratory.",
    "Submit soil sample from your field as per guidelines.",
    "Provide personal and land details for registration.",
    "Soil sample is tested in laboratory.",
    "Soil Health Card is generated with nutrient status and fertilizer recommendations.",
    "Farmer receives the card physically or digitally."
  ],

  
  faqs: [
    "Soil testing is generally conducted once every two years.",
    "The Soil Health Card includes details of NPK and micronutrient status.",
    "Recommendations help reduce excessive fertilizer usage."
  ]
},
  {
  id: 5,
  name: "Kisan Credit Card (KCC)",
  type: "Central",
  benefit: "Low-interest credit for farming",
  eligible: "Farmers and Allied Activities",
  min_score: 45,
  official_website: "https://www.myscheme.gov.in",
start_date: "01-08-1998",
end_date: "Ongoing",
phone: "1800-180-1551",

  // Detailed Information
  description: "Kisan Credit Card (KCC) is a Central Government scheme that provides farmers with timely and affordable credit for agricultural and allied activities such as crop cultivation, dairy, fisheries, and animal husbandry. The scheme offers short-term loans at subsidized interest rates, ensuring easy access to working capital for farming operations. It helps farmers avoid high-interest informal loans and promotes financial inclusion.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership or Lease Documents",
    "Bank Account Details",
    "Passport Size Photograph",
    "Mobile Number linked with Aadhar"
  ],

  application_process: [
    "Visit the nearest bank branch offering KCC facility.",
    "Fill out the KCC application form.",
    "Submit required documents and land details.",
    "Bank verifies eligibility and credit limit.",
    "Kisan Credit Card is issued upon approval.",
    "Loan amount can be withdrawn as per approved credit limit."
  ],

 
  faqs: [
    "Interest subvention is available for timely repayment.",
    "Credit limit depends on landholding and cropping pattern.",
    "KCC also covers allied activities like dairy and fisheries."
  ]
},
  {
  id: 6,
  name: "National Agriculture Market (e-NAM)",
  type: "Central",
  benefit: "Online trading platform for farmers",
  eligible: "Registered Farmers",
  min_score: 35,
  official_website: "https://www.enam.gov.in",
start_date: "14-04-2016",
end_date: "Ongoing",
phone: "1800-270-0224",

  // Detailed Information
  description: "National Agriculture Market (e-NAM) is a Central Government initiative that provides an online trading platform for agricultural commodities. It integrates various Agricultural Produce Market Committees (APMCs) across India into a unified digital market. The scheme enables transparent price discovery, better market access, and fair trading opportunities for farmers. By eliminating intermediaries, e-NAM helps farmers obtain competitive prices for their produce.",

  documents_required: [
    "Aadhar Card",
    "Farmer Registration Details",
    "Bank Account Details",
    "Mobile Number linked with Aadhar",
    "Commodity Details for trading"
  ],

  application_process: [
    "Visit the official e-NAM portal.",
    "Register as a farmer with required personal and bank details.",
    "Verify registration through OTP authentication.",
    "List agricultural produce for sale on the platform.",
    "Participate in online bidding process.",
    "Receive payment directly in bank account after successful trade."
  ],

 
  faqs: [
    "Farmers must be registered with their local APMC.",
    "Online bidding ensures transparent price discovery.",
    "Payment is directly transferred to farmer’s bank account."
  ]
},
  {
  id: 7,
  name: "Paramparagat Krishi Vikas Yojana (PKVY)",
  type: "Central",
  benefit: "Support for organic farming",
  eligible: "Farmers practicing organic farming",
  min_score: 55,
  official_website: "https://pgsindia-ncof.gov.in",
start_date: "01-01-2015",
end_date: "Ongoing",
phone: "011-23382012",

  // Detailed Information
  description: "Paramparagat Krishi Vikas Yojana (PKVY) is a Central Government scheme aimed at promoting organic farming in India through a cluster-based approach. The scheme encourages farmers to adopt eco-friendly agricultural practices by reducing the use of chemical fertilizers and pesticides. It supports certification under Participatory Guarantee System (PGS-India) and provides financial assistance for organic inputs, training, and marketing of organic produce.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents / Land Records",
    "Bank Account Details",
    "Passport Size Photographs",
    "Cluster Registration Details (if applicable)"
  ],

  application_process: [
    "Form or join an organic farming cluster (minimum required area as per guidelines).",
    "Register under PKVY through local agriculture department or online portal.",
    "Submit required documents and land details.",
    "Participate in training and awareness programs.",
    "Follow PGS-India certification process.",
    "Receive financial assistance and marketing support after approval."
  ],

  
  faqs: [
    "PKVY promotes organic farming through cluster-based approach.",
    "Farmers receive financial assistance for organic inputs.",
    "Certification is done under PGS-India system.",
    "The scheme helps in marketing and branding of organic produce."
  ]
},
  {
  id: 8,
  name: "National Mission on Sustainable Agriculture (NMSA)",
  type: "Central",
  benefit: "Climate-resilient farming support",
  eligible: "Farmers in vulnerable regions",
  min_score: 60,
  official_website: "https://nmsa.dac.gov.in",
start_date: "01-01-2014",
end_date: "Ongoing",
phone: "011-23382012",

  // Detailed Information
  description: "National Mission on Sustainable Agriculture (NMSA) is a Central Government initiative aimed at promoting climate-resilient and sustainable agricultural practices. The scheme focuses on improving soil health, water use efficiency, crop diversification, and adoption of modern farming technologies. It supports farmers in regions vulnerable to climate change by encouraging integrated farming systems and sustainable resource management.",

  documents_required: [
    "Aadhar Card",
    "Land Ownership Documents / Land Records",
    "Bank Account Details",
    "Residence Proof",
    "Recent Passport Size Photographs"
  ],

  application_process: [
    "Visit the nearest Agriculture Department office or official portal.",
    "Register under NMSA with required personal and land details.",
    "Submit necessary documents for verification.",
    "Select suitable components (water management, soil health, etc.).",
    "Field inspection and approval by concerned authority.",
    "Receive financial assistance/subsidy directly in bank account."
  ],

 
  faqs: [
    "NMSA promotes climate-resilient farming practices.",
    "It supports soil health and water conservation activities.",
    "Subsidies are provided for sustainable agricultural technologies.",
    "Farmers in climate-vulnerable regions are given priority."
  ]
},
  {
  id: 9,
  name: "Agriculture Infrastructure Fund (AIF)",
  type: "Central",
  benefit: "Financial support for storage and infrastructure",
  eligible: "Farmers and FPOs",
  min_score: 65,
  official_website: "https://agriinfra.dac.gov.in",
start_date: "09-08-2020",
end_date: "31-03-2032",
phone: "011-23382366",

  // Detailed Information
  description: "Agriculture Infrastructure Fund (AIF) is a Central Government scheme launched to provide medium to long-term debt financing for post-harvest management infrastructure and community farming assets. The scheme supports the creation of warehouses, cold storage units, grading and sorting units, primary processing centers, and other infrastructure to reduce post-harvest losses and improve farmers' income.",

  documents_required: [
    "Aadhar Card",
    "PAN Card",
    "Land Ownership / Lease Documents",
    "Bank Account Details",
    "Project Proposal Report",
    "FPO Registration Certificate (if applicable)"
  ],

  application_process: [
    "Prepare a detailed project proposal for infrastructure development.",
    "Apply online through the official AIF portal.",
    "Submit required personal, financial, and project documents.",
    "Application review and verification by concerned authorities.",
    "Loan approval through partner banks or financial institutions.",
    "Receive financial assistance with interest subvention benefits."
  ],

 
  faqs: [
    "AIF provides financial support for post-harvest infrastructure.",
    "Farmers, FPOs, and agri-entrepreneurs are eligible.",
    "Interest subvention and credit guarantee benefits are available.",
    "The scheme helps reduce post-harvest losses and improve market access."
  ]
}
,
  {
  id: 10,
  name: "PM Formalisation of Micro Food Processing Enterprises (PMFME)",
  type: "Central",
  benefit: "Support for food processing units",
  eligible: "Individual entrepreneurs and SHGs",
  min_score: 50,
  official_website: "https://pmfme.mofpi.gov.in",
start_date: "29-06-2020",
end_date: "31-03-2025",
phone: "1800-180-6767",

  // Detailed Information
  description: "PM Formalisation of Micro Food Processing Enterprises (PMFME) is a Central Government scheme aimed at supporting micro food processing units across India. The scheme promotes formalization of small food businesses, provides financial assistance for upgrading infrastructure, branding, marketing, and capacity building. It follows the 'One District One Product (ODOP)' approach to encourage local food processing industries.",

  documents_required: [
    "Aadhar Card",
    "PAN Card",
    "Bank Account Details",
    "Business Registration / Udyam Registration",
    "Project Proposal",
    "SHG/FPO Registration Certificate (if applicable)"
  ],

  application_process: [
    "Prepare a detailed project proposal for food processing unit.",
    "Register on the PMFME official portal.",
    "Submit personal, business, and financial details.",
    "Upload required documents for verification.",
    "Application review and approval by state authorities.",
    "Receive financial assistance (credit-linked subsidy) after approval."
  ],

  
  faqs: [
    "PMFME provides 35% credit-linked capital subsidy.",
    "Scheme supports branding, marketing, and training.",
    "It follows the One District One Product (ODOP) approach.",
    "Individual entrepreneurs, SHGs, and FPOs can apply."
  ]
},
  {
  id: 11,
  name: "Rashtriya Krishi Vikas Yojana (RKVY)",
  type: "Central",
  benefit: "State agriculture development funding",
  eligible: "Farmers and Agri Startups",
  min_score: 55,
  official_website: "https://rkvy.nic.in",
start_date: "01-01-2007",
end_date: "Ongoing",
phone: "011-23382012",

  // Detailed Information
  description: "Rashtriya Krishi Vikas Yojana (RKVY) is a Central Government scheme aimed at strengthening agriculture and allied sectors by providing financial support to states for implementing agriculture development projects. The scheme encourages innovation, infrastructure development, value addition, and agri-startups to enhance farmers' income and overall agricultural productivity.",

  documents_required: [
    "Aadhar Card",
    "PAN Card",
    "Land Ownership Documents (if applicable)",
    "Bank Account Details",
    "Project Proposal / Startup Plan",
    "Business Registration Certificate (for Agri Startups)"
  ],

  application_process: [
    "Prepare a detailed agriculture or agri-startup project proposal.",
    "Apply through the State Agriculture Department or RKVY portal.",
    "Submit required personal and project-related documents.",
    "Project evaluation and approval by concerned authorities.",
    "Sanction of funds for approved projects.",
    "Implementation monitoring and reporting as per guidelines."
  ],

 
  faqs: [
    "RKVY supports agriculture infrastructure and innovation projects.",
    "Agri-startups can receive funding assistance.",
    "Funds are allocated through state governments.",
    "The scheme aims to increase farmers' income and productivity."
  ]
},
  {
  id: 12,
  name: "Sub-Mission on Agricultural Mechanization (SMAM)",
  type: "Central",
  benefit: "Subsidy on agricultural machinery",
  eligible: "Small and Marginal Farmers",
  min_score: 45,
  official_website: "https://agrimachinery.nic.in",
start_date: "01-04-2014",
end_date: "Ongoing",
phone: "011-23382012",

  // Detailed Information
  description: "Sub-Mission on Agricultural Mechanization (SMAM) is a Central Government scheme aimed at promoting the use of modern agricultural machinery among farmers, especially small and marginal farmers. The scheme provides financial assistance and subsidies for purchasing farm equipment such as tractors, harvesters, seed drills, and other mechanized tools to improve productivity and reduce labor dependency.",

  documents_required: [
    "Aadhar Card",
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

  
  faqs: [
    "SMAM provides subsidy on purchase of agricultural machinery.",
    "Small and marginal farmers get higher subsidy benefits.",
    "Subsidy amount varies based on category and equipment.",
    "The scheme helps improve productivity and reduce labor costs."
  ]
}

];

// Combined database
const allSchemes = [...maharashtraSchemes, ...centralSchemes];

// Function to get schemes by state
function getSchemesByState(state) {
  if (!state || state === "") return [];
  
  // If state is Maharashtra, return Maharashtra schemes
  if (state === "Maharashtra") {
    return maharashtraSchemes;
  }
  
  // For other states, return central schemes (you can add more state-specific later)
  // This is where you'd add other state schemes in the future
  return centralSchemes;
}

// Function to get all central schemes
function getCentralSchemes() {
  return centralSchemes;
}

// Function to get schemes by type
function getSchemesByType(type) {
  return allSchemes.filter(scheme => scheme.type === type);
}