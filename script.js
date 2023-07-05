window.onload = function() {
  var form = document.querySelector('form');

  form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    var fontSize = document.getElementById('fontsize').value;
    var fontColor = document.getElementById('fontcolor').value;

    // Store user preferences using localStorage
    localStorage.setItem('fontSize', fontSize);
    localStorage.setItem('fontColor', fontColor);

    applyUserPreferences();
  });

  // Function to apply user preferences
  function applyUserPreferences() {
    var fontSize = localStorage.getItem('fontSize');
    var fontColor = localStorage.getItem('fontColor');

    if (fontSize) {
      document.body.style.fontSize = fontSize + 'px';
    }

    if (fontColor) {
      document.body.style.color = fontColor;
    }
  }

  // Apply user preferences on page load
  applyUserPreferences();
};