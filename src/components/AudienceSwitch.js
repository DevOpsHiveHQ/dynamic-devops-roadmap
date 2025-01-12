import React from "react";
import { toggleDevopsSections } from "../utils";
import { useTopics } from "../hooks/useTopics";

function AudienceSwitch() {
  const [checked, setChecked] = useTopics();
  const filterSections = (e) => {
    setChecked(e.target.checked);
    toggleDevopsSections(e.target.checked);
  };

  return (
    <label htmlFor="filter" style={{ display: "flex", alignItems: "center", marginBottom: "1rem", marginTop: "1rem" }}>
      <input
        type="checkbox"
        id="filter"
        onChange={filterSections}
        checked={checked}
        style={{ display: "none" }}
      />
      <span
        style={{
          width: "40px",
          height: "20px",
          background: checked ? "var(--ifm-color-primary)" : "#ccc",
          borderRadius: "20px",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            content: "",
            position: "absolute",
            width: "18px",
            height: "18px",
            background: "#fff",
            borderRadius: "50%",
            top: "1px",
            left: checked ? "unset" : "1px",
            right: checked ? "1px" : "unset",
            transition: "0.2s",
          }}
        ></span>
      </span>
      <span style={{ marginLeft: "10px" }}>Hide Detailed Devops topics</span>
    </label>
  );
}

export default AudienceSwitch;
