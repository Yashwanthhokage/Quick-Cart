// Page Transition Utility
// Add this to handle smooth page transitions with loading

function navigateWithTransition(url, message = 'Loading...') {
  // Create loader overlay
  const loader = document.createElement('div');
  loader.className = 'page-loader';
  loader.innerHTML = `
    <div class="loader-cart" style="position: relative;">
      <div class="speed-line"></div>
      <div class="speed-line"></div>
      <div class="speed-line"></div>
      <img src="Project Logo1.png" alt="Loading" style="width: 100px; height: 100px;">
    </div>
    <div class="loader-text">${message}</div>
  `;
  
  document.body.appendChild(loader);
  
  // Navigate after short delay
  setTimeout(() => {
    window.location.href = url;
  }, 800);
}

// Replace window.location.href with smooth transitions
function smoothRedirect(url, message) {
  navigateWithTransition(url, message);
}
