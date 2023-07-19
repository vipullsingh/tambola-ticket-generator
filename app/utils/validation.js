// validation.js

// Validate the email format
exports.validateEmail = (email) => {
    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };
  
  // Validate the password strength
  exports.validatePasswordStrength = (password) => {
    // Password strength criteria
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
  
    // Check password length and character requirements
    const isLengthValid = password.length >= minLength;
    const hasUppercase = uppercaseRegex.test(password);
    const hasLowercase = lowercaseRegex.test(password);
    const hasDigit = digitRegex.test(password);
  
    return isLengthValid && hasUppercase && hasLowercase && hasDigit;
  };
  