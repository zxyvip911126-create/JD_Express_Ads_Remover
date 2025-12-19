// Wait for the page to fully load
window.onload = function() {
  // Find the ad element and hide it (you will need to replace the selector with the actual ad element)
  let adElement = document.querySelector('.ad-element');  // Replace with the correct class or id of the ad
  if (adElement) {
    adElement.style.display = 'none';  // Hides the ad
  }
}