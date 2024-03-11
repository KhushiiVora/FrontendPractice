import { useState } from "react";
import { usePasswordGenerator } from "./hooks/usePasswordGenerator";
import { getPasswordStrength } from "./utils/getPasswordStrength";
import { StyledDiv } from "./index.styles";
import Button from "./atoms/Button";
import Checkboxes from "./atoms/Checkboxes";

function Index() {
  // const [password, setPassword] = useState("");
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);
  const [checkboxData, setCheckboxData] = useState([
    { title: "Include Uppercase", state: false },
    { title: "Include Lowecase", state: false },
    { title: "Include Numbers", state: false },
    { title: "Include Symbols", state: false },
  ]);
  const { password, errorMessage, generatePassword } = usePasswordGenerator();
  const strength = getPasswordStrength(password.length);

  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);

    setTimeout(() => setCopied(false), 1000);
  };
  return (
    <StyledDiv>
      <h1>Password Generator</h1>
      {/* {pasword} */}
      <div className="password-container">
        {password && (
          <div className="password--header">
            <span>{password}</span>
            <Button
              type="button"
              onClick={handleCopy}
              text={copied ? "Copied" : "Copy"}
            />
          </div>
        )}
        <div className="password--slider">
          <div>
            <label>Length</label>
            <label>{length}</label>
          </div>
          <input
            type="range"
            min="4"
            max="20"
            value={length}
            onChange={(e) => setLength(e.target.value)}
          />
        </div>
        <div className="password__checkbox_container">
          <Checkboxes
            checkboxData={checkboxData}
            setCheckboxData={setCheckboxData}
          />
        </div>
        {password && (
          <div className="password--strength">
            <label>Strength</label>
            <span>
              <b>{strength}</b>
            </span>
          </div>
        )}
        {errorMessage && (
          <div className="password--error">
            <span>{errorMessage}</span>
          </div>
        )}
        <Button
          customClass="password--button"
          type="button"
          text="Generate Password"
          onClick={() => generatePassword(length, checkboxData)}
        />
      </div>
    </StyledDiv>
  );
}

export default Index;
