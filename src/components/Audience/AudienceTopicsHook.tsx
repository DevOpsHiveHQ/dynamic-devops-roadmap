import React from "react";

type UseTopicsHook = [boolean, React.Dispatch<React.SetStateAction<boolean>>];

export function audienceTopicsHook(): UseTopicsHook {
  const [checked, setChecked] = React.useState<boolean>(false);

  const handleCheck = React.useCallback((e: CustomEvent<{ hideDevOpsRoleDetails: boolean }>): void => {
    setChecked(e.detail.hideDevOpsRoleDetails);
  }, []);

  React.useEffect(() => {
    const listener = (e: Event) => handleCheck(e as CustomEvent<{ hideDevOpsRoleDetails: boolean }>);
    window.addEventListener("devopsVisibilityChanged", listener);
    return () => {
      window.removeEventListener("devopsVisibilityChanged", listener);
    };
  }, [handleCheck]);

  return [checked, setChecked];
}

export default audienceTopicsHook;
