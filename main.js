document.getElementById('login-submit').addEventListener('click', function() {
    
    const emailField = document.getElementById('email');
    const userEmail = emailField.value;

    // password value
    const passwordField = document.getElementById('password');
    const userPassword = passwordField.value;

    if (userEmail == 'abc@bap.com' && userPassword == 'secret') {
        window.location.href = "banking.html";
    } 
});