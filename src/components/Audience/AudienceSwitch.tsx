import React, { ChangeEvent } from "react";
import { toggleDevopsSections } from "./AudienceUtils";
import { audienceTopicsHook } from "./AudienceTopicsHook";
import styles from './Audience.module.css';

const labelText = (
  'If checked, there is no deep dive into DevOps-specialized topics. ' +
  'Use this switch to show only essential DevOps topics ' +
  'for everyone who works in software production (e.g., Software Engineers).'
)

const toggleText = 'Hide detailed DevOps role topics'

function AudienceSwitch(): JSX.Element {
  const [checked, setChecked] = audienceTopicsHook();

  const filterSections = (e: ChangeEvent<HTMLInputElement>): void => {
    setChecked(e.target.checked);
    toggleDevopsSections(e.target.checked);
  };

  return (
    <label htmlFor="filter" className={styles.toggleSwitch} title={labelText}>
      <input type="checkbox" id="filter" onChange={filterSections} checked={checked} />
      <span className={`${styles.toggleSlider} ${styles.round}`}></span>
      <span className={`${styles.toggleText}`}>{toggleText}</span>
    </label>
  );
}

export default AudienceSwitch;
