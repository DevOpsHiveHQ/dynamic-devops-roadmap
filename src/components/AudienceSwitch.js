import React from 'react';

function AudienceSwitch() {
  const filterSections = (e) => {
    if (e.target.checked) {
      document.querySelectorAll('.devops').forEach(section => {
          section.style.opacity = 0.4;
      })
    } else {
      document.querySelectorAll('.devops').forEach(section => {
        section.style.opacity = 1;
      })
    }
  }

  return (
    <label htmlFor="filter">
      <input type="checkbox" id="filter" onChange={filterSections} />
      <span>Hide Detailed Devops topics</span>
    </label>
  );
}

export default AudienceSwitch;
