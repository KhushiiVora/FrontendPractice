import { useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { StyledDiv } from "./index.styles";
function Index() {
  const [value, setValue] = useState(0);
  const [intervalID, setIntervalID] = useState(null);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((prev) => prev + 1);
      console.log(value);
    }, 100);
    setIntervalID(id);
  }, []);

  if (value === 100) {
    clearInterval(intervalID);
    setIntervalID(null);
  }

  const onComplete = () => {
    setSuccess(true);
  };

  return (
    <StyledDiv>
      <h1>Progress Bar</h1>
      <ProgressBar value={value} onComplete={onComplete} />
      <span>{success ? "Completed!!!" : "Loading..."}</span>
    </StyledDiv>
  );
}

export default Index;
