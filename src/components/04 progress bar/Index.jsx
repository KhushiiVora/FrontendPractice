import { useEffect, useState } from "react";
import { ProgressBar } from "./ProgressBar";
import { StyledDiv } from "./index.styles";
function Index() {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((prev) => prev + 1);
      console.log(value);
    }, 100);
  }, []);

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
