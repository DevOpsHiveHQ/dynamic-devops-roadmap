import React from 'react';

function TagsFilter() {
  const filterSections = (e) => {
    if (e.target.checked) {
      document.querySelectorAll('.tag-section').forEach(section => {
        if (section.classList.contains('devops')) {
          section.style.opacity = 0.4;
        } else {
          section.style.opacity = 1;
        }
      })
    } else {
      document.querySelectorAll('.tag-section').forEach(section => {
        section.style.opacity = 1;
      })
    }
  }

  return (
    <label for="filter">
      <input type="checkbox" id="filter" onChange={filterSections} />
      <span>Hide Detailed Devops topics</span>
    </label>
  );
}

export default TagsFilter;
