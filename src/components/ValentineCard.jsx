import React, { useState } from 'react';
import ReactModal from 'react-modal';
``

const ValentineCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [response, setResponse] = useState('');

  const handleButtonClick = (answer) => {
    setResponse(answer);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2>Will you be my Valentine?</h2>
      <button className="btn-yes" onClick={() => handleButtonClick('Yes')}>
        Yes
      </button>
      <button className="btn-no" onClick={() => handleButtonClick('No')}>
        No
      </button>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Valentine Response Modal"
        className="modal"
      >
        {response && (
          <div className="response-container">
            {response === 'Yes' ? (
              <img className="gif" src="url_to_yes_gif" alt="Yes GIF" />
            ) : (
              <img className="gif" src="url_to_no_gif" alt="No GIF" />
            )}
            <p>You said {response}!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default ValentineCard;
