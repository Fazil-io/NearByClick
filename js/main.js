// Toggle Mobile Menu
function toggleMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('open');
  }
}

// Live Search Demo (Landing Page)
function liveSearch(val) {
  console.log("Searching for:", val);
}

// Search Shops Button (Landing Page)
function searchShops() {
  const district = document.getElementById('district-select').value;
  const query = document.getElementById('hero-search').value;
  
  if (!district) {
    showToast('தயவுசெய்து மாவட்டத்தை தேர்வு செய்யவும்!', 'error');
    return;
  }
  
  window.location.href = `customer/shops.html?district=${district}&q=${query}`;
}

// Simple Toast Notification
function showToast(msg, type = 'success') {
  let toast = document.getElementById('toast');
  
  // Create if it doesn't exist
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast';
    toast.className = 'toast';
    document.body.appendChild(toast);
  }
  
  toast.textContent = msg;
  toast.className = `toast show ${type}`;
  
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3000);
}

// Voice Search Stub
function startVoice() {
  showToast('Voice search feature coming soon!', 'success');
}
