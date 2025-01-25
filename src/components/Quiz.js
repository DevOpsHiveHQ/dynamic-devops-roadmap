import React, { useState } from 'react';
import { default as RQC } from 'react-quiz-component';

const contentStyle = {
  background: 'var(--ifm-background-color)',
  border: '2px solid var(--ifm-color-light)',
  borderRadius: 'var(--ifm-global-radius)',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  height: '90%',
  left: '50%',
  overflowX: 'auto',
  padding: '1rem',
  position: 'fixed',
  top: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  zIndex: 1000,
};

const overlayStyle = {
  background: 'rgba(0, 0, 0, 0.5)',
  height: '100%',
  left: 0,
  position: 'fixed',
  top: 0,
  width: '100%',
  zIndex: 999,
};

const closeButtonStyle = {
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  fontSize: '1.5rem',
  position: 'sticky',
  right: '0',
  top: '0',
  zIndex: 1000,
};

function Quiz({ data }) {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
    document.addEventListener('keydown', handleKeyDown);
  };

  const closeModal = () => {
    setIsOpen(false);
    document.removeEventListener('keydown', handleKeyDown);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Escape') {
      closeModal();
    }
  };

  return (
    <div>
      <div className="quiz-button-container">
        <img className="module-quiz-image" src="/img/quiz.png"/>
        <button
          type="button"
          className="quiz-button-center button button--secondary"
          onClick={openModal}
        >
          Test Your Knowledge with the Module Quiz Questions
        </button>
      </div>

      {isOpen && (
        <>
          <div style={overlayStyle} onClick={closeModal}></div>
          <div style={contentStyle}>
            <button
              className="close close-quiz"
              onClick={closeModal}
              style={closeButtonStyle}
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
