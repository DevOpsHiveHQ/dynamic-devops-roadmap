import React from "react";
import { toggleDevopsSections } from "./AudienceUtils";
import { audienceTopicsHook } from "./AudienceTopicsHook";
import styles from './Audience.module.css';

type Role = "devops" | "software" | "all"

interface RolesMap {
  [key: string]: {
    name: string;
    details: string;
  };
}

const rolesMap: RolesMap = {
  devops: {
    name: "DevOps Roles",
    details:
      "A DevOps Role streamlines software delivery by automating development " +
      "and operations processes, focusing on CI/CD, infrastructure, and system reliability. " +
      "Example: DevOps Engineer, Cloud Engineer, Platform Engineer, SRE, etc.",
  },
  software: {
    name: "Software Roles",
    details:
      "A Software Role designs, builds, and maintains software solutions " +
      "applying engineering principles to meet user and business needs. " +
      "Example: Software Engineer, Developer, Backend, Frontend, etc.",
  },
  all: {
    name: "All Roles",
    details:
      "All roles who works in software production " +
      "(e.g., Software Roles, DevOps Roles, and other roles like Product Roles).",
  },
};

interface AudienceProps {
  roles: Role[];
}

const TargetAudience: React.FC<AudienceProps> = ({ roles }) => {
  const [checked, setChecked] = audienceTopicsHook();

  const handleAudienceClick = (role: Role): void => {
    if (!roles.includes("all")) {
      toggleDevopsSections(!checked);
      setChecked(!checked);
    }
  };

  return (
    <div className={styles.audienceRole}>
      {roles.map((role) => (
        <button
          key={role}
          title={rolesMap[role].details}
          className={`${styles.audienceRole} ${role}`}
          onClick={() => handleAudienceClick(role)}
        >
          {rolesMap[role].name}
        </button>
      ))}
    </div>
  );
};

export default TargetAudience;
