import React from "react";
import { toggleDevopsSections } from "../utils";
import { useTopics } from "../hooks/useTopics";

const rolesMap = {
  devops: {
    name: "DevOps Engineer",
    details:
      "Devops engineers with a broad skill set who are able to work in the DevOps and Software Development Life Cycle (SDLC).",
  },
  software: {
    name: "Software Engineer",
    details:
      "Software engineers with a broad skill set who are able to work in the SDLC.",
  },
};

function Audience({ roles }) {
  const [checked, setChecked] = useTopics();
  const handleAudienceClick = (role) => {
    if (role !== "devops") {
      toggleDevopsSections(!checked);
      setChecked(!checked);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
        marginBottom: "1rem",
      }}
    >
      {roles.map((role) => (
        <button
          key={role}
          title={rolesMap[role].details}
          style={{
            background: "var(--ifm-color-light)",
            color: "var(--ifm-color-primary)",
            padding: "0.5rem",
            borderRadius: "0.5rem",
            border: "none",
            cursor: "pointer",
          }}
          className={role}
          onClick={() => handleAudienceClick(role)}
        >
          {rolesMap[role].name}
        </button>
      ))}
    </div>
  );
}

export default Audience;
