import { useState } from "react";
import OTPInput from "./OTPInput";
import "./index.css";

const Index = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [showOTPLoginForm, setShowOTPLoginForm] = useState(false);

  const handleChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setShowOTPLoginForm(true);
  };

  return (
    <div>
      <h1>OTP Login</h1>
      {!showOTPLoginForm ? (
        <form onSubmit={handleSubmit}>
          <input
            value={phoneNumber}
            placeholder="Enter phone Number"
            maxLength={10}
            pattern="^[0-9]{10}$"
            onChange={handleChange}
            autoFocus
            required
          />
          <button type="submit">Send OTP</button>
        </form>
      ) : (
        <OTPInput length={5} />
      )}
    </div>
  );
};

export default Index;
