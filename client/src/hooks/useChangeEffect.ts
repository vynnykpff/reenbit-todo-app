import { DependencyList, EffectCallback, useEffect, useRef } from "react";

export const useChangeEffect = (cb: EffectCallback, deps: DependencyList) => {
  const isEffectInitialized = useRef(false);

  useEffect(() => {
    if (!isEffectInitialized.current) {
      isEffectInitialized.current = true;
      return;
    }

    return cb();
  }, deps);
};
