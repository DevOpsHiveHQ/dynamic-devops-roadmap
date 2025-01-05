import React from 'react';

function Audience({roles}) {
  
  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem'
    }}>
      {roles.map(role => (
        <p title={role.details} style={{
          background: 'var(--ifm-color-light)',
          color: 'var(--ifm-color-primary)',
          padding: '0.5rem',
          borderRadius: '0.5rem'
        }}>{role.name}</p>
      ))}
    </div>
  );
}

export default Audience;
