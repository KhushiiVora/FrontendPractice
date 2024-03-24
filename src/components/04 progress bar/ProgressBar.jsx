import { useEffect, useState } from "react";
import { MIN, MAX } from "./constants";
import { StyledBar } from "./index.styles";

function ProgressBar({ value = 0, onComplete = () => {} }) {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(value);
    if (value >= MAX) {
      onComplete();
    }
  }, [value]);

  return (
    <StyledBar>
      <span
        className="progress--value"
        style={{ color: percent > 49 ? "white" : "black" }}
      >
        {Math.min(MAX, Math.max(MIN, percent))}%
      </span>
      <div
        role="progressbar"
        aria-valuemin={MIN}
        aria-valuemax={MAX}
        aria-valuenow={value}
        className="progress--bar"
        style={{
          transform: `scaleX(${percent / MAX})`,
          transformOrigin: "left",
        }}
      ></div>
    </StyledBar>
  );
}
export { ProgressBar };
