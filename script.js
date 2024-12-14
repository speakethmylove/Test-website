// Handle form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  const feedback = document.getElementById('form-feedback');
  feedback.textContent = `Thanks, ${name}! We'll get back to you at ${email}.`;
  feedback.style.color = '#ff66cc';

  this.reset();
});
