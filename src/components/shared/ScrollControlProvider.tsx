import { mergeStyles } from "@fluentui/style-utilities";
import React, { ReactElement, useMemo, useState } from "react";
import { use100vh } from "react-div-100vh";
import tw from "twin.macro";

interface ScrollControlContextValue {
  setScrollEnabled: (enableScroll: boolean) => void;
}

export const ScrollControlContext = React.createContext<ScrollControlContextValue>({
  setScrollEnabled: () => {
    return;
  },
});

export interface ScrollControlProviderProps {
  children?: React.ReactNode;
}

export default function ScrollControlProvider({ children }: ScrollControlProviderProps): ReactElement {
  const [scrollEnabled, setScrollEnabled] = useState<boolean>(true);
  const height = use100vh();
  const styles = useMemo(() => {
    if (scrollEnabled) {
      return "";
    } else {
      return mergeStyles([typeof height === "number" && { height }, tw`overflow-hidden`]);
    }
  }, [height, scrollEnabled]);
  const providerValue = useMemo<ScrollControlContextValue>(
    () => ({
      setScrollEnabled,
    }),
    []
  );
  return (
    <ScrollControlContext.Provider value={providerValue}>
      <div className={styles}>{children}</div>
    </ScrollControlContext.Provider>
  );
}
