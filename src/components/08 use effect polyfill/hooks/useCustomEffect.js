import { useRef } from "react";

const useCustomEffect = (effect, deps) => {
  const isInitialRender = useRef(true);
  const prevDeps = useRef(deps);
  /* INITIAL RENDER */
  if (isInitialRender.current) {
    isInitialRender.current = false;
    const cleanup = effect();
    if (cleanup && typeof cleanup === "function") {
      cleanup();
    }
    return;
  }
  //   if (!deps) {
  //     const cleanup = effect();
  //     if (cleanup && typeof cleanup === "function") {
  //       cleanup();
  //     }
  //     return;
  //   }

  /* RE-RENDERS */
  const isDepsChanged = deps
    ? JSON.stringify(deps) !== JSON.stringify(prevDeps.current)
    : true;

  if (isDepsChanged) {
    const cleanup = effect();
    if (cleanup && typeof cleanup === "function") {
      cleanup();
    }
    prevDeps.current = deps;
    return;
  }
};
export { useCustomEffect };
