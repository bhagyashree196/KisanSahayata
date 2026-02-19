document.addEventListener("DOMContentLoaded", function () {

  // ✅ Safely merge Central + Maharashtra schemes
  const schemes = [
    ...(typeof centralSchemes !== "undefined" ? centralSchemes : []),
    ...(typeof maharashtraSchemes !== "undefined" ? maharashtraSchemes : [])
  ];

  console.log("All Schemes Loaded:", schemes);

  // ✅ Get ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const schemeId = urlParams.get("id");

  console.log("Requested Scheme ID:", schemeId);

  if (!schemeId) {
    document.querySelector(".card").innerHTML =
      "<h3 class='text-danger text-center'>No Scheme ID Provided</h3>";
    return;
  }

  // ✅ Find scheme
  const scheme = schemes.find(s => String(s.id) === String(schemeId));

  if (!scheme) {
    document.querySelector(".card").innerHTML =
      "<h3 class='text-danger text-center'>Scheme Not Found</h3>";
    return;
  }

  // ✅ Fill Basic Information
  document.getElementById("schemeName").innerText = scheme.name;
  document.getElementById("schemeType").innerText = scheme.type;
  document.getElementById("schemeBenefit").innerText = scheme.benefit;
  document.getElementById("schemeEligible").innerText = scheme.eligible;
  document.getElementById("schemeScore").innerText = scheme.min_score;
  document.getElementById("schemeDescription").innerText = scheme.description || "N/A";
  document.getElementById("startDate").innerText = scheme.start_date || "N/A";
  document.getElementById("endDate").innerText = scheme.end_date || "N/A";
  document.getElementById("schemePhone").innerText = scheme.phone || "N/A";
 const officialBtn = document.getElementById("officialLink");
if (scheme.official_website) {
  officialBtn.href = scheme.official_website;
  officialBtn.style.display = "inline-block";
} else {
  officialBtn.style.display = "none";
}


  // ✅ Documents Required
  const docList = document.getElementById("documentsList");
  docList.innerHTML = "";

  if (scheme.documents_required && scheme.documents_required.length > 0) {
    scheme.documents_required.forEach(doc => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.innerText = doc;
      docList.appendChild(li);
    });
  } else {
    docList.innerHTML = "<li class='list-group-item'>No documents specified</li>";
  }

  // ✅ Application Process
  const processList = document.getElementById("processList");
  processList.innerHTML = "";

  if (scheme.application_process && scheme.application_process.length > 0) {
    scheme.application_process.forEach(step => {
      let li = document.createElement("li");
      li.innerText = step;
      processList.appendChild(li);
    });
  } else {
    processList.innerHTML = "<li>No process details available</li>";
  }

  // ✅ FAQs
  const faqList = document.getElementById("faqList");
  faqList.innerHTML = "";

  if (scheme.faqs && scheme.faqs.length > 0) {
    scheme.faqs.forEach(faq => {
      let li = document.createElement("li");
      li.className = "list-group-item";
      li.innerText = faq;
      faqList.appendChild(li);
    });
  } else {
    faqList.innerHTML = "<li class='list-group-item'>No FAQs available</li>";
  }

});
