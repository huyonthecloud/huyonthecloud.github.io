// Login functionality

document.addEventListener('DOMContentLoaded', function () {
    // Handle password visibility toggle
    const togglePassword = document.getElementById('togglePassword');
    const passwordInput = document.getElementById('password');
    
    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', function () {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Toggle eye icon
            const icon = this.querySelector('i');
            icon.classList.toggle('fa-eye');
            icon.classList.toggle('fa-eye-slash');
        });
    }
    
    // Login form handling
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            
            // Simple authentication (username: huy, password: huy)
            if (username === 'huy' && password === 'huy') {
                // Successful login - redirect to index.html
                window.location.href = 'index.html';
            } else {
                // Failed login - show simple alert
                alert('Invalid username or password. Please try again.');
            }
        });
    }
});
