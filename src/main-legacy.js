// This file is a fallback for browsers that don't support ES modules
console.log('Legacy browser detected. Please use a modern browser for the best experience.');

// Create a simple message for legacy browsers
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('app')) {
    document.getElementById('app').innerHTML = `
      <div style="padding: 20px; text-align: center; font-family: sans-serif;">
        <h1>GlobalTemp</h1>
        <p>Your browser doesn't support modern JavaScript features required by this application.</p>
        <p>Please use a modern browser like Chrome, Firefox, Safari, or Edge for the best experience.</p>
      </div>
    `;
  }
});
