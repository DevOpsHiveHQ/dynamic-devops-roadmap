import React from "react";
import { toggleDevopsSections } from "../utils";

export function useTopics() {
  const [checked, setChecked] = React.useState(false);
  

  const handleCheck = React.useCallback((e) => {
    setChecked(e.detail.hideDevops);
  }, []);

  React.useEffect(() => {
    window.addEventListener("new-key", handleCheck);
    return () => {
      window.removeEventListener("new-key", handleCheck);
    };
  }, []);

  return [ checked, setChecked ];
}
