export const toggleDevopsSections = (checked) => {
  if (checked) {
    document.querySelectorAll(".devops").forEach((section) => {
      section.style.opacity = 0.4;
    });
    localStorage.setItem("hideDevops", true);
    window.dispatchEvent(
      new CustomEvent("new-key", {
        detail: {
          hideDevops: true,
        },
      })
    );
  } else {
    document.querySelectorAll(".devops").forEach((section) => {
      section.style.opacity = 1;
    });
    localStorage.setItem("hideDevops", false);
    window.dispatchEvent(
      new CustomEvent("new-key", {
        detail: {
          hideDevops: false,
        },
      })
    );
  }
};
