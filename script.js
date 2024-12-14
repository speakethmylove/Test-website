// Handle contact form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault(); // Prevent form from reloading the page

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Simple validation
  if (name && email && message) {
    document.getElementById('form-feedback').textContent = 
      `Thank you, ${name}! We will get back to you soon.`;
    document.getElementById('form-feedback').style.color = 'green';
  } else {
    document.getElementById('form-feedback').textContent = 
      'Please fill out all fields.';
    document.getElementById('form-feedback').style.color = 'red';
  }

  // Reset the form
  this.reset();
});
