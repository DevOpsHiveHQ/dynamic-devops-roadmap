import React, { useState } from 'react';
import { default as RQC } from 'react-quiz-component';

const contentStyle = {
  width: '90%',
  height: '90%',
  background: 'var(--ifm-background-color)',
  border: '2px solid var(--ifm-color-light)',
  borderRadius: 'var(--ifm-global-radius)',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  zIndex: 1000,
  padding: '1rem',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  overflowX: 'auto',
};

const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, 0.5)',
  zIndex: 999,
};

function Quiz({ data }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      <div className="quiz-button-container">
        <button
          type="button"
          className="quiz-button-center button button--secondary"
          onClick={openModal}
        >
          💡 Test Your Knowledge with the Module Quiz 💡
        </button>
      </div>

      {isOpen && (
        <>
          <div style={overlayStyle} onClick={closeModal}></div>
          <div style={contentStyle}>
            <button
              className="close close-quiz"
              onClick={closeModal}
              style={{
                position: 'sticky',
                top: '0',
                right: '0',
                background: 'transparent',
                border: 'none',
                fontSize: '1.5rem',
                cursor: 'pointer',
                zIndex: 1000,
              }}
            >
              &times;
            </button>
            <h3 style={{ paddingTop: '1rem', textAlign: 'center' }}>Module Quiz</h3>
            <RQC
              quiz={data}
              shuffle={true}
              enableProgressBar={true}
              continueTillCorrect={true}
              showInstantFeedback={true}
              allowNavigation={false}
            />
          </div>
        </>
      )}
    </div>
  );
}

export default Quiz;
