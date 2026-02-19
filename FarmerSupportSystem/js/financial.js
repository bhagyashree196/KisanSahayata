document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("financialContainer");
  if (!container) return;

  if (typeof farmerSchemes === "undefined") {
    console.error("financial_data.js not loaded!");
    return;
  }

  container.innerHTML = farmerSchemes.map(scheme => {

    let badgeClass = "badge bg-success";
    let badgeText = "Ongoing";

    if (scheme.last_date &&
        scheme.last_date.toLowerCase().includes("31")) {
      badgeClass = "badge bg-warning text-dark";
      badgeText = "Closing Soon";
    }

    return `
      <div class="scheme-card-modern">

        <span class="${badgeClass}">${badgeText}</span>

        <h4>${scheme.name}</h4>

        <p><b>Type:</b> ${scheme.type}</p>
        <p><b>Benefit:</b> ${scheme.benefit}</p>
        <p><b>Eligibility:</b> ${scheme.eligible}</p>

        <div class="scheme-btns-modern">
          <a href="${scheme.official_website}" target="_blank" class="btn-apply">
            Apply Now
          </a>

          <a href="scheme_detail.html?id=${scheme.id}" class="btn-details">
            View Details
          </a>
        </div>

      </div>
    `;
  }).join("");
});
