// Main JavaScript for Home Page

document.addEventListener('DOMContentLoaded', function() {
    console.log('Kisan Sahayata Home Page loaded');
    
    // Initialize search functionality
    initSearch();
    
    // Initialize smooth scrolling
    initSmoothScroll();
    
    // Initialize animation on scroll
    initScrollAnimation();
    
    // Initialize chatbot button
    initChatbotButton();
});

// ===== SEARCH FUNCTIONALITY =====
function initSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.btn-warning');
    
    if (searchInput && searchBtn) {
        // Search on button click
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        // Search on Enter key
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(searchInput.value);
            }
        });
    }
}

function performSearch(query) {
    if (!query.trim()) {
        showToast('Please enter a search term', 'info');
        return;
    }
    
    // Simulate search (will connect to schemes page later)
    showToast(`Searching for: "${query}"`, 'success');
    
    // For now, just redirect to schemes page with search param
    // setTimeout(() => {
    //     window.location.href = `schemes.html?search=${encodeURIComponent(query)}`;
    // }, 1500);
}

// ===== TOAST NOTIFICATION =====
function showToast(message, type = 'info') {
    // Create toast container if not exists
    let toastContainer = document.querySelector('.toast-container');
    if (!toastContainer) {
        toastContainer = document.createElement('div');
        toastContainer.className = 'toast-container position-fixed bottom-0 end-0 p-3';
        document.body.appendChild(toastContainer);
    }
    
    // Create toast
    const toastId = 'toast-' + Date.now();
    const bgColor = type === 'success' ? 'bg-success' : type === 'warning' ? 'bg-warning' : 'bg-info';
    
    const toastHtml = `
        <div id="${toastId}" class="toast ${bgColor} text-white" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="d-flex">
                <div class="toast-body">
                    ${message}
                </div>
                <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast"></button>
            </div>
        </div>
    `;
    
    toastContainer.insertAdjacentHTML('beforeend', toastHtml);
    
    // Initialize and show toast
    const toastElement = document.getElementById(toastId);
    const toast = new bootstrap.Toast(toastElement, { delay: 3000 });
    toast.show();
    
    // Remove after hidden
    toastElement.addEventListener('hidden.bs.toast', function() {
        this.remove();
    });
}

// ===== SMOOTH SCROLLING =====
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===== SCROLL ANIMATION =====
function initScrollAnimation() {
    const animateElements = document.querySelectorAll('.stat-card, .feature-card, .link-card, .card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
}

// ===== CHATBOT BUTTON =====
function initChatbotButton() {
    const chatbotBtn = document.getElementById('chatbotButton');
    if (chatbotBtn) {
        chatbotBtn.addEventListener('click', function() {
            // This will be handled by chatbot.js
            if (window.toggleChatbot) {
                window.toggleChatbot();
            } else {
                // Fallback if chatbot.js not loaded
                alert('🤖 Chatbot: How can I help you today?\n\nAsk me about:\n• PM-KISAN scheme\n• Kisan Credit Card\n• Crop insurance\n• Subsidies');
            }
        });
    }
}

// ===== DYNAMIC YEAR IN FOOTER =====
function updateFooterYear() {
    const rightsText = document.getElementById('rightsText');
    if (rightsText) {
        const currentYear = new Date().getFullYear();
        rightsText.textContent = rightsText.textContent.replace('2026', currentYear);
    }
}

// Call updateFooterYear when page loads
updateFooterYear();

// Export functions if needed
window.showToast = showToast;

// ===== MAIN APPLICATION LOGIC =====

// Store current farmer data
let currentFarmer = {
    name: '',
    location: '',
    state: ''
};

// Open farmer modal
function openFarmerModal() {
    const modal = new bootstrap.Modal(document.getElementById('farmerModal'));
    modal.show();
}

// Submit form and show filtered schemes
function submitAndShowSchemes(event) {
    event.preventDefault();
    
    // Get form values
    const farmerName = document.getElementById('farmerName').value.trim();
    const farmerLocation = document.getElementById('farmerLocation').value.trim();
    const farmerState = document.getElementById('farmerState').value;
    
    if (!farmerName || !farmerLocation || !farmerState) {
        alert('Please fill all fields');
        return;
    }
    
    // Store farmer data
    currentFarmer = {
        name: farmerName,
        location: farmerLocation,
        state: farmerState
    };
    
    // Hide modal
    const modalEl = document.getElementById('farmerModal');
    const modal = bootstrap.Modal.getInstance(modalEl);
    if (modal) modal.hide();
    
    // Show results page
    document.querySelector('.hero-section').style.display = 'none';
    document.querySelector('.stats-section').style.display = 'none';
    document.querySelector('.feature-card').closest('.container').style.display = 'none';
    document.querySelector('.quick-links').style.display = 'none';
    document.querySelector('.container.mb-5').style.display = 'none';
    
    document.getElementById('schemesResultsPage').style.display = 'block';
    
    // Display welcome message
    document.getElementById('welcomeFarmer').innerHTML = `Welcome, ${farmerName}! <small class="text-muted fs-6">Schemes available in ${farmerState}</small>`;
    
    // Filter and display schemes
    displayFilteredSchemes(farmerState);
    
    // Reset form
    document.getElementById('farmerForm').reset();
}

// Display schemes based on state
function displayFilteredSchemes(state) {
    let stateSchemes = [];
    let centralSchemesList = getCentralSchemes();
    
    // Get schemes based on state
    if (state === "Maharashtra") {
        stateSchemes = maharashtraSchemes;
    } else {
        // For other states, show central schemes as state schemes
        // (you can customize this logic)
        stateSchemes = centralSchemesList.filter(s => s.type === "Central");
    }
    
    // All schemes = state + central
    const allSchemesList = [...stateSchemes, ...centralSchemesList];
    
    // Display in tabs
    displaySchemeCards(allSchemesList, 'allSchemesContainer');
    displaySchemeCards(stateSchemes, 'stateSchemesContainer');
    displaySchemeCards(centralSchemesList, 'centralSchemesContainer');
}

// Create scheme cards HTML
function displaySchemeCards(schemes, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;
    
    if (schemes.length === 0) {
        container.innerHTML = '<div class="col-12 text-center p-5"><h4>No schemes found</h4></div>';
        return;
    }
    
    let html = '';
    schemes.forEach(scheme => {
        html += `
            <div class="col-md-6 col-lg-4">
                <div class="card scheme-card h-100">
                    <div class="card-body">
                        <span class="badge ${scheme.type === 'Central' ? 'bg-primary' : 'bg-success'} mb-2">${scheme.type}</span>
                        <h5 class="card-title">${scheme.name}</h5>
                        <p class="card-text"><strong>Benefit:</strong> ${scheme.benefit}</p>
                        <p class="card-text"><strong>Eligible:</strong> ${scheme.eligible}</p>
                        <p class="card-text"><strong>Min Score:</strong> ${scheme.min_score}</p>
                        <a href="${scheme.official_website}" target="_blank" class="btn btn-sm btn-outline-success">Apply Now</a>
                    </div>
                </div>
            </div>
        `;
    });
    
    container.innerHTML = html;
}

document.getElementById("insuranceForm").addEventListener("submit", function (e) {
  e.preventDefault(); // stop form reload

  // (Optional) You can read values if needed later
  const name = document.getElementById("insuranceFarmerName").value;
  const location = document.getElementById("insuranceLocation").value;
  const type = document.getElementById("insuranceType").value;

  // Redirect to insurance page
  window.location.href = "insurance.html";
});

// Go back to home page
function goBack() {
    // Show home sections
    document.querySelector('.hero-section').style.display = 'block';
    document.querySelector('.stats-section').style.display = 'block';
    document.querySelector('.feature-card').closest('.container').style.display = 'block';
    document.querySelector('.quick-links').style.display = 'block';
    document.querySelector('.container.mb-5').style.display = 'block';
    
    // Hide results page
    document.getElementById('schemesResultsPage').style.display = 'none';
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Kisan Sahayata initialized');
    
    // Add any additional initialization here
});

