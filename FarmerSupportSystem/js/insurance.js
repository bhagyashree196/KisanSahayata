document.addEventListener("DOMContentLoaded", () => {

  const container = document.getElementById("insuranceContainer");
  if (!container) return;

  container.innerHTML = farmerInsuranceSchemes.map(ins => {

    // Status Badge (based on last_date)
    let statusBadge = "badge bg-success";
    let statusText = "Ongoing";

    if (ins.last_date && ins.last_date.toLowerCase().includes("31st")) {
      statusBadge = "badge bg-warning text-dark";
      statusText = "Renewable";
    }

    return `
      <div class="scheme-card-modern">

        <span class="${statusBadge} mb-2">${statusText}</span>

        <h4>${ins.name}</h4>

        <p><b>Type:</b> ${ins.type}</p>
        <p><b>Benefit:</b> ${ins.benefit}</p>
        <p><b>Eligibility:</b> ${ins.eligible}</p>

        <div class="scheme-btns-modern">
          <a href="${ins.official_website}" target="_blank" class="btn-apply">
            Apply Now
          </a>

          <a href="scheme_detail.html?id=${ins.id}" class="btn-details">
            View Details
          </a>
        </div>

      </div>
    `;
  }).join("");

});
