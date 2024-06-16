import { useEffect, useRef, useState } from "react";

const Stepper = (props) => {
  const { steps = [] } = props;

  const [currentStep, setCurrentStep] = useState(1);
  const [isComplete, setIsComplete] = useState(false);
  const [margins, setMargins] = useState({
    marginLeft: 0,
    marginRight: 0,
  });

  const stepRefs = useRef([]);

  useEffect(() => {
    setMargins({
      marginLeft: stepRefs.current[0].offsetWidth / 2,
      marginRight: stepRefs.current[steps.length - 1].offsetWidth / 2,
    });
  }, [stepRefs]);

  if (!steps.length) {
    return <></>;
  }

  const handleClick = () => {
    setCurrentStep((prev) => {
      if (prev != steps.length) return prev + 1;
      setIsComplete(true);
      return prev;
    });
  };

  const progressState = () => {
    return ((currentStep - 1) / (steps.length - 1)) * 100;
  };

  const ActiveComponent = steps[currentStep - 1].component;

  return (
    <>
      <div className="stepper">
        {steps?.map((step, index) => {
          return (
            <div
              key={step.name}
              ref={(element) => (stepRefs.current[index] = element)}
              className={`stepper__step ${
                currentStep > index + 1 || isComplete ? "complete" : ""
              } ${currentStep === index + 1 && !isComplete ? "active" : ""}`}
            >
              <div className="stepper__step--step">
                {currentStep > index + 1 || isComplete ? (
                  <span>&#10003;</span>
                ) : (
                  index + 1
                )}
              </div>
              <div className="stepper__step--name">{step.name}</div>
            </div>
          );
        })}
        <div
          className="stepper__progress"
          style={{
            width: `calc(100% - ${margins.marginLeft + margins.marginRight}px)`,
            marginLeft: margins.marginLeft,
            marginRight: margins.marginRight,
          }}
        >
          <div
            className="stepper__progress--state"
            style={{
              width: `${progressState()}%`,
            }}
          ></div>
        </div>
      </div>
      <ActiveComponent />
      {!isComplete && (
        <button className="stepper--button" onClick={() => handleClick()}>
          {currentStep === steps.length ? "Finish" : "Next"}
        </button>
      )}
    </>
  );
};

export { Stepper };
