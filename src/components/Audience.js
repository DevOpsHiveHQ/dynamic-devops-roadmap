import React from "react";

function Audience({ roles }) {
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
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "1rem",
      }}
    >
      {roles.map((role) => (
        <p
          title={rolesMap[role].details}
          style={{
            background: "var(--ifm-color-light)",
            color: "var(--ifm-color-primary)",
            padding: "0.5rem",
            borderRadius: "0.5rem",
          }}
        >
          {rolesMap[role].name}
        </p>
      ))}
    </div>
  );
}

export default Audience;
