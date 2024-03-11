const getPasswordStrength = (length) => {
  if (length < 6) return "Poor";
  else if (length < 12) return "Medium";
  else if (length < 17) return "Strong";
  else return "Very Strong";
};

export { getPasswordStrength };
