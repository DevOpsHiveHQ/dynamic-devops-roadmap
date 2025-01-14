export const toggleDevopsSections = (checked: boolean): void => {
  if (checked) {
    document.querySelectorAll<HTMLElement>(".devops").forEach((section) => {
      section.style.opacity = "0.4";
    });
    localStorage.setItem("hideDevOpsRoleDetails", "true");
    window.dispatchEvent(
      new CustomEvent("devopsVisibilityChanged", {
        detail: {
          hideDevOpsRoleDetails: true,
        },
      })
    );
  } else {
    document.querySelectorAll<HTMLElement>(".devops").forEach((section) => {
      section.style.opacity = "1";
    });
    localStorage.setItem("hideDevOpsRoleDetails", "false");
    window.dispatchEvent(
      new CustomEvent("devopsVisibilityChanged", {
        detail: {
          hideDevOpsRoleDetails: false,
        },
      })
    );
  }
};
