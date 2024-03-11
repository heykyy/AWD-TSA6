window.addEventListener('DOMContentLoaded', (event) => {
  var formData = JSON.parse(sessionStorage.getItem('formData'));
  if(formData) {
      document.getElementById('firstNameDisplay').textContent += formData.firstName;
      document.getElementById('lastNameDisplay').textContent += formData.lastName;
      document.getElementById('emailDisplay').textContent += formData.email;
      document.getElementById('passwordDisplay').textContent += formData.password;
      document.getElementById('confirmPasswordDisplay').textContent += formData.confirmPassword;
  } else {
      console.error('No form data found in sessionStorage.');
  }
});

  
  