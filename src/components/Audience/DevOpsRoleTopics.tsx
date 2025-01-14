import React, { ReactNode } from "react";
import styles from './Audience.module.css';

interface DevOpsRoleTopicsProps {
  children: ReactNode;
}

const DevOpsRoleTopics: React.FC<DevOpsRoleTopicsProps> = ({ children }) => (
  <section className={`devops ${styles.devops}`}>{children}</section>
);

export default DevOpsRoleTopics;
