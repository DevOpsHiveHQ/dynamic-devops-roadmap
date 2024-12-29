import React from 'react';

function TagsFilter({ tags }) {
  const filterSections = (tag) => {
    const sections = document.querySelectorAll('.tag-section');
    sections.forEach((section) => {
      section.style.display = 'block';
    });

    if (tag === 'all') {
      return;
    }
    
    sections.forEach((section) => {
      if (section.classList.contains(tag)) {
        section.style.display = 'block';
      } else {
        section.style.display = 'none';
      }
    });
  }
  return (
    <div>
      {tags.map((tag) => (
        <button key={tag} onClick={() => filterSections(tag)}>
          {tag}
        </button>
      ))}
    </div>
  );
}

export default TagsFilter;
