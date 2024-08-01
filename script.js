document.addEventListener('DOMContentLoaded', () => {
  const emailInput = document.getElementById('email-input');
  const passwordInput = document.getElementById('password-input');
  const submitButton = document.getElementById('submit-button');
  const emailError = document.getElementById('email-error');
  const togglePassword = document.getElementById('toggle-password');

  let passwordVisible = false;

  // Toggle password visibility
  togglePassword.addEventListener('click', () => {
    passwordVisible = !passwordVisible;
    passwordInput.type = passwordVisible ? 'text' : 'password';
    togglePassword.src = passwordVisible ? 'assets/open_eye.png' : 'assets/close_eye.png';
  });

  // Hide email error on input change
  emailInput.addEventListener('input', () => {
    emailError.style.display = 'none';
  });

  // Focus submit button on Enter key press in password input
  passwordInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && passwordInput.value) {
      submitButton.focus();
    }
  });

  // Handle form submission
  document.getElementById('login-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    // Check if email ends with '@bitsathy.ac.in'
    if (!email.endsWith('@bitsathy.ac.in')) {
      emailError.style.display = 'block';
    } else if (password === '') {
      passwordInput.focus();
    } else {
      emailError.style.display = 'none';

      // Simulate login action (replace with real authentication logic)
      console.log('Login successful');

      // Redirect to home.html
      window.location.href = 'Home page/home.html';
    }
  });
});
