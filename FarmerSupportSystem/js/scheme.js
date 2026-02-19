document.addEventListener("DOMContentLoaded", function () {

  // Get selected scheme type from home page
  const schemeType = localStorage.getItem("schemeType") || "All";

  const selectedText = document.getElementById("selectedTypeText");
  if (selectedText) {
    selectedText.innerText = `Showing: ${schemeType} Government Schemes`;
  }

  let filteredSchemes = [];

  // Filter schemes
  if (schemeType === "Central") {
    filteredSchemes = centralSchemes;
  } else if (schemeType === "Maharashtra") {
    filteredSchemes = maharashtraSchemes;
  } else {
    filteredSchemes = allSchemes;
  }

  const schemeContainer = document.getElementById("schemeContainer");
  if (!schemeContainer) return;

  // If no schemes found
  if (filteredSchemes.length === 0) {
    schemeContainer.innerHTML = `
      <p class="text-muted text-center">
        No schemes available at the moment.
      </p>
    `;
    return;
  }

  // Render schemes
  schemeContainer.innerHTML = filteredSchemes.map((s) => `
    <div class="scheme-card-modern">

      <h4>${s.name}</h4>

      <p><b>Type:</b> ${s.type}</p>
      <p><b>Benefit:</b> ${s.benefit}</p>
      <p><b>Eligibility:</b> ${s.eligible}</p>

      <div class="scheme-btns-modern">

        <a 
          href="${s.official_website || '#'}" 
          target="_blank" 
          class="btn-apply"
        >
          Apply Now
        </a>

        <a 
          href="scheme_detail.html?id=${encodeURIComponent(s.id)}" 
          class="btn-details"
        >
          View Details
        </a>

      </div>

    </div>
  `).join("");

});
