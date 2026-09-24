// Switch input methods (Type / Photo / Voice)
function switchMethod(method) {
  // Update Tabs
  document.querySelectorAll('.method-tab').forEach(tab => {
    tab.classList.remove('active');
  });
  event.currentTarget.classList.add('active');

  // Show relevant panel
  document.querySelectorAll('.method-panel').forEach(panel => {
    panel.classList.remove('active');
  });
  document.getElementById(`method-${method}`).classList.add('active');
}

// Add Product Row
function addProductRow() {
  const container = document.getElementById('product-rows');
  const row = document.createElement('div');
  row.className = 'product-row';
  row.innerHTML = `
    <input type="text" class="tamil" placeholder="பொருள் பெயர்">
    <input type="text" class="qty-input tamil" placeholder="அளவு">
    <select class="unit-select tamil">
      <option>kg</option>
      <option>litre</option>
      <option>piece</option>
      <option>packet</option>
      <option>dozen</option>
    </select>
    <button class="del-row-btn" onclick="delRow(this)"><i class="fa fa-times"></i></button>
  `;
  container.appendChild(row);
}

// Delete Product Row
function delRow(btn) {
  btn.parentElement.remove();
}

// Photo Preview
function previewPhoto(input) {
  const preview = document.getElementById('photo-preview');
  if (input.files && input.files[0]) {
    const reader = new FileReader();
    reader.onload = function(e) {
      preview.innerHTML = `<img src="${e.target.result}" alt="List Photo">`;
    }
    reader.readAsDataURL(input.files[0]);
  }
}

// Voice Record Simulation
let isRecording = false;
function toggleVoice() {
  const btn = document.getElementById('voice-btn');
  const result = document.getElementById('voice-result');
  
  if (!isRecording) {
    // Start Recording
    isRecording = true;
    btn.classList.add('recording');
    result.innerHTML = '<span class="muted">கேட்கிறது...</span>';
    
    // Simulate stopping after 3 seconds
    setTimeout(() => {
      toggleVoice();
      result.innerHTML = 'அரிசி 5 கிலோ, தக்காளி 2 கிலோ';
    }, 3000);
  } else {
    // Stop Recording
    isRecording = false;
    btn.classList.remove('recording');
  }
}

// Place Order
function placeOrder() {
  showToast('உங்கள் ஆர்டர் வெற்றிகரமாக அனுப்பப்பட்டது!', 'success');
  setTimeout(() => {
    window.location.href = 'order-history.html';
  }, 1500);
}
