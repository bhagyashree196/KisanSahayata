// ===== FARMER INSURANCE SCHEMES =====

const farmerInsuranceSchemes = [
  {
    id: 201,
    name: "Pradhan Mantri Fasal Bima Yojana (PMFBY)",
    type: "Central",
    benefit: "Crop insurance against natural calamities, pests, and diseases",
    eligible: "All farmers with registered land holdings",
    min_score: 40,
    official_website: "https://pmfby.gov.in",
    description: "PMFBY provides financial support to farmers in case of crop loss due to natural disasters, pests, and diseases, ensuring financial stability.",
    documents_required: [
      "Aadhar Card",
      "Land Ownership / Land Records",
      "Bank Account Details",
      "Crop Loan Details (if applicable)",
      "Passport Size Photographs"
    ],
    application_process: [
      "Visit the official PMFBY portal or nearest Agriculture Department office.",
      "Register with personal and land details.",
      "Select the crops for which insurance is required.",
      "Pay the premium amount.",
      "Verification by concerned authority.",
      "Receive compensation in case of crop loss."
    ],
    last_date: "As per the crop season and state notifications.",
    contact_info: "Contact District Agriculture Office | Official Website: https://pmfby.gov.in",
    faqs: [
      "What crops are covered under PMFBY?",
      "How is the insurance premium calculated?",
      "How to claim compensation for crop loss?"
    ]
  },
  {
    id: 202,
    name: "Restructured Weather Based Crop Insurance Scheme (RWBCIS)",
    type: "Central",
    benefit: "Financial support in case of adverse weather affecting crops",
    eligible: "Farmers growing notified crops",
    min_score: 40,
    official_website: "https://pmfby.gov.in",
    description: "RWBCIS provides insurance cover based on weather parameters. Payouts occur when adverse weather affects crop yield, even without visible damage.",
    documents_required: [
      "Aadhar Card",
      "Land Ownership / Land Records",
      "Bank Account Details",
      "Crop Details",
      "Passport Size Photographs"
    ],
    application_process: [
      "Visit the official RWBCIS portal or nearest Agriculture Department office.",
      "Register with personal and crop details.",
      "Select insured crops.",
      "Premium payment and verification.",
      "Compensation payout based on weather data."
    ],
    last_date: "As per the crop season and state notifications.",
    contact_info: "Contact District Agriculture Office | Official Website: https://pmfby.gov.in",
    faqs: [
      "What weather events are covered?",
      "How is payout calculated?",
      "Do farmers need to report crop damage?"
    ]
  },
  {
    id: 203,
    name: "National Agriculture Insurance Scheme (NAIS)",
    type: "Central",
    benefit: "Crop insurance for food crops, oilseeds, and commercial crops",
    eligible: "All farmers cultivating insured crops",
    min_score: 40,
    official_website: "https://pmfby.gov.in",
    description: "NAIS provides insurance for various crops against natural disasters or disease, ensuring farmers receive compensation for crop loss.",
    documents_required: [
      "Aadhar Card",
      "Land Records",
      "Bank Account Details",
      "Crop Details"
    ],
    application_process: [
      "Register with nearest Agriculture Department office.",
      "Submit documents and select insured crops.",
      "Pay premium.",
      "Receive compensation in case of crop loss."
    ],
    last_date: "As per crop season notifications",
    contact_info: "Contact District Agriculture Office | Official Website: https://pmfby.gov.in",
    faqs: [
      "What crops are covered?",
      "How to apply?",
      "How is compensation calculated?"
    ]
  },
  {
    id: 204,
    name: "Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY)",
    type: "Central",
    benefit: "Life insurance of ₹2 lakh in case of death",
    eligible: "People aged 18–50 with a savings bank account",
    min_score: 40,
    official_website: "https://www.jansuraksha.gov.in",
    description: "PMJJBY provides life insurance coverage for death due to any reason, securing the farmer's family with minimal annual premium.",
    documents_required: ["Aadhar Card", "Bank Account Details", "Passport Size Photographs"],
    application_process: [
      "Visit your bank branch or official PMJJBY portal.",
      "Enroll using your savings bank account.",
      "Pay the annual premium of ₹330.",
      "Coverage starts immediately after enrollment."
    ],
    last_date: "31st May every year (renewable annually)",
    contact_info: "Contact your bank branch | Official Website: https://www.jansuraksha.gov.in",
    faqs: [
      "Who is eligible for PMJJBY?",
      "What is the premium amount?",
      "What is the coverage amount?"
    ]
  },
  {
    id: 205,
    name: "Pradhan Mantri Suraksha Bima Yojana (PMSBY)",
    type: "Central",
    benefit: "Accidental death or disability cover of ₹2 lakh",
    eligible: "People aged 18–70 with a savings bank account",
    min_score: 40,
    official_website: "https://www.jansuraksha.gov.in",
    description: "PMSBY is an accidental insurance scheme offering coverage for accidental death or permanent disability, providing financial security at a low premium.",
    documents_required: ["Aadhar Card", "Bank Account Details", "Passport Size Photographs"],
    application_process: [
      "Visit your bank branch or official PMSBY portal.",
      "Enroll using your savings bank account.",
      "Pay the annual premium of ₹12.",
      "Coverage starts immediately after enrollment."
    ],
    last_date: "31st May every year (renewable annually)",
    contact_info: "Contact your bank branch | Official Website: https://www.jansuraksha.gov.in",
    faqs: [
      "Who can enroll in PMSBY?",
      "What is covered under accidental insurance?",
      "How to claim the insurance amount?"
    ]
  },
  {
    id: 206,
    name: "Maha Fasal Bima Yojana",
    type: "Maharashtra",
    benefit: "Crop insurance against natural disasters",
    eligible: "Farmers in Maharashtra with registered land",
    min_score: 40,
    official_website: "https://krushi.maharashtra.gov.in",
    description: "Maha Fasal Bima provides compensation for crop losses due to droughts, floods, hailstorms, pests, and diseases in Maharashtra.",
    documents_required: [
      "Aadhar Card",
      "Land Ownership / Land Records",
      "Bank Account Details",
      "Crop Loan Details",
      "Passport Size Photographs"
    ],
    application_process: [
      "Visit the official Maha Fasal Bima portal or nearest Agriculture Department office.",
      "Register with personal and crop details.",
      "Select crops to insure.",
      "Pay premium or get subsidy applied.",
      "Verification by concerned authority.",
      "Receive compensation in case of crop loss."
    ],
    last_date: "As per crop season notifications in Maharashtra",
    contact_info: "Contact District Agriculture Office | Official Website: https://krushi.maharashtra.gov.in",
    faqs: [
      "What crops are covered under Maha Fasal Bima?",
      "How is compensation calculated?",
      "How to apply for the scheme?"
    ]
  },
  {
    id: 207,
    name: "Livestock Insurance Scheme",
    type: "Central",
    benefit: "Insurance cover for cattle, buffaloes, and small animals",
    eligible: "Livestock owners/farmers",
    min_score: 40,
    official_website: "https://dahd.nic.in",
    description: "The scheme provides financial protection to farmers in case of death of their livestock due to disease or accidents.",
    documents_required: ["Aadhar Card", "Livestock Ownership Proof", "Bank Account Details"],
    application_process: [
      "Visit nearest veterinary or Agriculture Department office.",
      "Register livestock and submit documents.",
      "Pay premium.",
      "Receive compensation in case of livestock death."
    ],
    last_date: "As per official notifications",
    contact_info: "Contact Veterinary/Animal Husbandry Office | Official Website: https://dahd.nic.in",
    faqs: [
      "What animals are covered?",
      "How is premium calculated?",
      "How to claim compensation?"
    ]
  },
  {
    id: 208,
    name: "Weather Based Crop Insurance Scheme (WBCIS) Maharashtra",
    type: "Maharashtra",
    benefit: "Compensation based on adverse weather events",
    eligible: "Farmers growing notified crops in Maharashtra",
    min_score: 40,
    official_website: "https://krushi.maharashtra.gov.in",
    description: "WBCIS in Maharashtra provides payouts based on rainfall or temperature deviations affecting crops, ensuring timely compensation.",
    documents_required: [
      "Aadhar Card",
      "Land Records",
      "Bank Account Details",
      "Crop Details"
    ],
    application_process: [
      "Register at local Agriculture Department office.",
      "Provide crop and personal details.",
      "Premium payment or subsidy applied.",
      "Verification by authority.",
      "Receive compensation based on weather index."
    ],
    last_date: "As per crop season notifications",
    contact_info: "Contact District Agriculture Office | Official Website: https://krushi.maharashtra.gov.in",
    faqs: [
      "How is weather data monitored?",
      "How is payout calculated?",
      "What crops are eligible?"
    ]
  },
  {
    id: 209,
    name: "Group Insurance for Farmers (State & Cooperative)",
    type: "Maharashtra",
    benefit: "Life and accident insurance for farmer groups",
    eligible: "Registered farmer cooperatives and groups",
    min_score: 40,
    official_website: "https://krushi.maharashtra.gov.in",
    description: "Group insurance schemes cover farmer groups for life and accidental death, providing low-cost insurance with collective benefits.",
    documents_required: ["Group Registration Certificate", "Member Aadhar Cards", "Bank Account Details"],
    application_process: [
      "Register group at cooperative or Agriculture Department.",
      "Submit member details and documents.",
      "Pay annual premium collectively.",
      "Coverage starts after verification."
    ],
    last_date: "Ongoing as per notifications",
    contact_info: "Contact District Agriculture Office | Official Website: https://krushi.maharashtra.gov.in",
    faqs: [
      "Who can enroll as a group?",
      "What types of coverage are available?",
      "How to claim for a member?"
    ]
  },
   {
    id: 210,
    name: "Cattle Insurance Scheme",
    type: "Central",
    benefit: "Insurance cover for milch and draught cattle",
    eligible: "Farmers owning cattle",
    min_score: 40,
    official_website: "https://dahd.nic.in",
    description: "Provides financial protection to farmers against death of cattle due to accidents or diseases. Helps maintain farmer income and livestock assets.",
    documents_required: ["Aadhar Card", "Cattle Ownership Proof", "Bank Account Details"],
    application_process: [
      "Visit nearest veterinary office or Agriculture Department.",
      "Register cattle and submit documents.",
      "Pay the premium.",
      "Receive compensation in case of cattle death."
    ],
    last_date: "As per state and central notifications",
    contact_info: "Contact District Veterinary Officer | Official Website: https://dahd.nic.in",
    faqs: [
      "Which types of cattle are covered?",
      "How is the premium calculated?",
      "How to claim compensation?"
    ]
  },
  {
    id: 211,
    name: "Horticulture Crop Insurance Scheme",
    type: "Central",
    benefit: "Insurance for fruits, vegetables, and flowers",
    eligible: "Farmers cultivating notified horticulture crops",
    min_score: 40,
    official_website: "https://pmfby.gov.in",
    description: "Provides coverage for horticulture crops against natural disasters and pest attacks, ensuring financial support for horticulture farmers.",
    documents_required: ["Aadhar Card", "Land Records", "Bank Account Details", "Crop Details"],
    application_process: [
      "Register with nearest Agriculture Department office.",
      "Submit crop and personal details.",
      "Pay premium or get subsidy applied.",
      "Receive compensation in case of crop loss."
    ],
    last_date: "As per crop season notifications",
    contact_info: "Contact District Agriculture Office | Official Website: https://pmfby.gov.in",
    faqs: [
      "What horticulture crops are covered?",
      "How is compensation calculated?",
      "Is subsidy available on premium?"
    ]
  },
  {
    id: 212,
    name: "Sheep and Goat Insurance Scheme",
    type: "Central",
    benefit: "Financial protection for small ruminants",
    eligible: "Farmers owning sheep and goats",
    min_score: 40,
    official_website: "https://dahd.nic.in",
    description: "Provides compensation to farmers for death of sheep and goats due to disease or accidents, ensuring livelihood protection for small livestock farmers.",
    documents_required: ["Aadhar Card", "Livestock Ownership Proof", "Bank Account Details"],
    application_process: [
      "Visit nearest veterinary office.",
      "Register livestock and submit documents.",
      "Pay premium.",
      "Receive compensation in case of death of animals."
    ],
    last_date: "As per state and central notifications",
    contact_info: "Contact District Veterinary Officer | Official Website: https://dahd.nic.in",
    faqs: [
      "Which animals are covered?",
      "What is the premium amount?",
      "How to claim compensation?"
    ]
  },
  {
    id: 213,
    name: "Fisheries Insurance Scheme",
    type: "Central",
    benefit: "Insurance for fish farmers against natural and accidental losses",
    eligible: "Registered fish farmers",
    min_score: 40,
    official_website: "https://dahd.nic.in",
    description: "Provides financial support to fish farmers for losses due to natural calamities, diseases, or accidents affecting aquaculture, helping stabilize their income.",
    documents_required: ["Aadhar Card", "Fish Farm Ownership Proof", "Bank Account Details"],
    application_process: [
      "Register at local Fisheries Department office.",
      "Submit farm and personal details.",
      "Pay the premium.",
      "Receive compensation for insured losses."
    ],
    last_date: "As per government notifications",
    contact_info: "Contact District Fisheries Office | Official Website: https://dahd.nic.in",
    faqs: [
      "What losses are covered?",
      "Who is eligible?",
      "How is payout calculated?"
    ]
  },
  {
    id: 214,
    name: "Group Accident Insurance for Farmers",
    type: "Maharashtra",
    benefit: "Accidental death or disability cover for farmer groups",
    eligible: "Registered farmer cooperatives and groups in Maharashtra",
    min_score: 40,
    official_website: "https://krushi.maharashtra.gov.in",
    description: "Provides financial protection to members of farmer groups in case of accidental death or permanent disability, ensuring collective security for farming communities.",
    documents_required: ["Group Registration Certificate", "Member Aadhar Cards", "Bank Account Details"],
    application_process: [
      "Register group at cooperative or Agriculture Department office.",
      "Submit member details and documents.",
      "Pay annual premium collectively.",
      "Coverage starts after verification."
    ],
    last_date: "Ongoing as per state notifications",
    contact_info: "Contact District Agriculture Office | Official Website: https://krushi.maharashtra.gov.in",
    faqs: [
      "Who can enroll as a group?",
      "What types of accidents are covered?",
      "How to claim for a member?"
    ]
  }
];