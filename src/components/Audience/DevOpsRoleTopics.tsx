import React, { ReactNode } from "react";

interface DevOpsRoleTopicsProps {
  children: ReactNode;
}

const DevOpsRoleTopics: React.FC<DevOpsRoleTopicsProps> = ({ children }) => (
  <section className="devops">{children}</section>
);

export default DevOpsRoleTopics;
