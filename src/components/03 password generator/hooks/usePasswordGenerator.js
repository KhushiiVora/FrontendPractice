import { useState } from "react";

function usePasswordGenerator() {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const generatePassword = (length, checkboxData) => {
    let charSet = "",
      generatedPassword = "";
    const options = checkboxData.filter((checkbox) => checkbox.state);

    if (!options.length) {
      setErrorMessage("Please select atleast one option");
      setPassword("");
      return;
    }
    options.forEach((option) => {
      switch (option.title) {
        case "Include Uppercase":
          charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "Include Lowecase":
          charSet += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "Include Numbers":
          charSet += "0123456789";
          break;
        case "Include Symbols":
          charSet += "!@#$%^&*()_";
          break;
        default:
          break;
      }
    });

    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      generatedPassword += charSet[randomIndex];
    }
    setPassword(generatedPassword);
    setErrorMessage("");
  };

  return { password, errorMessage, generatePassword };
}

export { usePasswordGenerator };
