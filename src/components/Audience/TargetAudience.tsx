import React from "react";
import { toggleDevopsSections } from "./AudienceUtils";
import { useTopics } from "./AudienceTopicsHook";
import styles from './Audience.module.css';

type Role = "devops" | "software";

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
};

interface AudienceProps {
  roles: Role[];
}

const TargetAudience: React.FC<AudienceProps> = ({ roles }) => {
  const [checked, setChecked] = useTopics();

  const handleAudienceClick = (role: Role): void => {
    toggleDevopsSections(!checked);
    setChecked(!checked);
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
