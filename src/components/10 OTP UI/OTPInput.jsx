import { useEffect, useRef, useState } from "react";

const OTPInput = (props) => {
  const { length } = props;
  const [OTPInputs, setOTPInputs] = useState(new Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (event, index) => {
    const newOTPInputs = [...OTPInputs];
    let value = event.target.value;

    if (isNaN(value)) return;

    newOTPInputs[index] = value.substring(value.length - 1);
    setOTPInputs(newOTPInputs);

    if (newOTPInputs.indexOf("") < 0 && index <= length - 1) {
      const otp = newOTPInputs.join("");
      console.log("Login successfull with otp: ", otp);
    }
  };

  const handleClick = (index) => {
    inputRefs.current[index].setSelectionRange(1, 1);
  };

  useEffect(() => {
    inputRefs.current[OTPInputs.indexOf("")]?.focus();
  });

  return (
    <div>
      {OTPInputs.indexOf("") >= 0 ? (
        OTPInputs.map((input, index) => {
          return (
            <input
              ref={(input) => (inputRefs.current[index] = input)}
              value={OTPInputs[index]}
              key={index + input}
              type="text"
              onChange={(event) => handleChange(event, index)}
              onClick={() => handleClick(index)}
              className="otp-input"
            />
          );
        })
      ) : (
        <p>Logged in successfully!!</p>
      )}
    </div>
  );
};

export default OTPInput;
