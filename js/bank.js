document.getElementById('login-submit').addEventListener
('click', function () {
  const emailField = document.getElementById('user-email');
  const userEmail = emailField.value;
  // get user password
  const passwordField = document.getElementById('user-password');
  const userPassword = passwordField.value;
  if (userEmail == 'abc@gmail.com' && userPassword == 'admin123') {
    window.location.href = 'banking.html';
  }
})