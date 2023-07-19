// security.js

const bcrypt = require('bcrypt');

// Hash the password using bcrypt
exports.hashPassword = async (password) => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};

// Compare the provided password with the stored hashed password
exports.comparePassword = async (password, hashedPassword) => {
  const isPasswordValid = await bcrypt.compare(password, hashedPassword);
  return isPasswordValid;
};
