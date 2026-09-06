const validateRegister = ({ name, email, password } = {}) => {
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return "Name, email and password are required";
  }

  const trimmedName = name.trim();
  const normalizedEmail = email.trim().toLowerCase();

  if (trimmedName.length < 2) {
    return "Name must be at least 2 characters";
  }

  if (trimmedName.length > 50) {
    return "Name must not exceed 50 characters";
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(normalizedEmail)) {
    return "Please provide a valid email";
  }

  if (password.length < 6) {
    return "Password must be at least 6 characters";
  }

  return null;
};

const validateLogin = ({ email, password } = {}) => {
  if (
    typeof email !== "string" ||
    typeof password !== "string"
  ) {
    return "Email and password are required";
  }

  const normalizedEmail = email.trim().toLowerCase();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(normalizedEmail)) {
    return "Please provide a valid email";
  }

  return null;
};

module.exports = {
  validateRegister,
  validateLogin,
};
