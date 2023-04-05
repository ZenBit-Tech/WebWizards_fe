import React, { useState } from 'react';
import { CancelButton, SendButton, ModalButtonsWrapper, ModalContainer, ModalContent, ModalOverlay, Title } from '../Modal/styles';

interface IModal {
    confirmText: string;
    cancelTest: string;
    title: string;
}

function LogoutModal({confirmText, cancelTest, title}: IModal) {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    // TODO: implement logout logic here
    setShowModal(false);
  };

  return (
    <>
      <button onClick={() => setShowModal(true)}>Logout</button>
      {showModal && (
        <ModalOverlay>
            <ModalContainer>
                <ModalContent>
                    <Title>{title}</Title>
                    <ModalButtonsWrapper>
                        <CancelButton 
                            disabled={false}
                            type='button'
                            value={cancelTest}
                            onClick={() => setShowModal(false)}/>
                        <SendButton 
                            disabled={false}
                            type='submit'
                            value={confirmText}
                            onClick={handleSubmit}/>
                    </ModalButtonsWrapper>
                </ModalContent>
            </ModalContainer>
        </ModalOverlay>
      )}
    </>
  );
}

export default LogoutModal;
