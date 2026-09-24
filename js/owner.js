// Toggle Shop Open/Closed Status
function toggleShopOpen() {
  const isChecked = document.getElementById('shop-open').checked;
  const label = document.getElementById('open-label');
  
  if (isChecked) {
    label.textContent = 'திறந்திருக்கிறது';
    label.style.color = 'var(--green)';
  } else {
    label.textContent = 'மூடப்பட்டுள்ளது';
    label.style.color = 'var(--red)';
  }
}

// Filter Orders by Status Tabs
function filterOrders(status) {
  // Update Tabs
  document.querySelectorAll('.order-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.currentTarget.classList.add('active');

  // Filter Cards
  const cards = document.querySelectorAll('.order-item');
  cards.forEach(card => {
    if (card.dataset.status === status) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Update Order Status
function updateOrderStatus(id, newStatus) {
  // Find card
  const card = document.querySelector(`.order-item[data-id="${id}"]`);
  if (!card) return;
  
  // Update dataset status
  card.dataset.status = newStatus;
  
  // Hide card since we are likely on a different tab filter
  card.style.display = 'none';
  
  // Update Counts (Simulation)
  updateCounts();
  
  // Show toast notification
  if(newStatus === 'confirmed') showToast('ஆர்டர் உறுதி செய்யப்பட்டது!', 'success');
  if(newStatus === 'rejected') showToast('ஆர்டர் மறுக்கப்பட்டது.', 'error');
  if(newStatus === 'delivered') showToast('ஆர்டர் கொடுக்கப்பட்டுவிட்டது!', 'success');
}

// Update Tab Counts
function updateCounts() {
  const statuses = ['pending', 'confirmed', 'delivered', 'rejected'];
  
  statuses.forEach(s => {
    const count = document.querySelectorAll(`.order-item[data-status="${s}"]`).length;
    const countEl = document.getElementById(`tab-${s}`);
    if(countEl) countEl.textContent = count;
  });
  
  // Update sidebar notification badge
  const pendingCount = document.querySelectorAll('.order-item[data-status="pending"]').length;
  const badge = document.getElementById('pending-count');
  if (badge) {
    badge.textContent = pendingCount;
    badge.style.display = pendingCount > 0 ? 'inline-block' : 'none';
  }
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

// Initial counts update
document.addEventListener('DOMContentLoaded', updateCounts);
