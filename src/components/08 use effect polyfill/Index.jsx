import { useEffect, useState } from "react";
import { useCustomEffect } from "./hooks/useCustomEffect";

function Index() {
  /* OBSERVATIONS:
    1. no dependency array:
        - Initial render: effect and return functions are executed
        - re-renders: first return is executed due to unmount of current component and then effect is executed due to new mounting of component with the updated state.
    2. empty dependency array:
        - Initial render: effect and return functions are executed
        - when component unmounts: return is executed
    3. dependency array:
        - Initial render: effect and return functions are executed
        - when the dependency value changes: return is first executed and then effect is executed.
  */
  return (
    <div>
      <h1>useEffect Polyfill</h1>
      <p>Check the console</p>
      <Button />
      <CustomEffectExample />
    </div>
  );
}

function Button() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  useEffect(() => {
    console.log("in efffect");
    return () => {
      console.log("in return");
    };
  }, [count]);
  return <button onClick={() => setCount1(count1 + 1)}>Count+1</button>;
}

function CustomEffectExample() {
  const [count, setCount] = useState(1);
  const [count1, setCount1] = useState(1);
  useCustomEffect(() => {
    console.log("in efffect:: custom");
    return () => {
      console.log("in return:: custom");
    };
  }, [count]);
  return (
    <button onClick={() => setCount1(count1 + 1)}>Count+1:: custom</button>
  );
}

export default Index;
