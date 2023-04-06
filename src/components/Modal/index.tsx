import React, { useState } from 'react';
import { CancelButton, SendButton, ModalButtonsWrapper, ModalContainer, ModalContent, ModalOverlay, Title, ModalTrigger } from '../Modal/styles';

interface IModal {
    confirmText: string;
    cancelTest: string;
    title: string;
    handleSubmitModal: Function;
    modalTriggerText: string;
}

function LogoutModal({confirmText, cancelTest, title, handleSubmitModal, modalTriggerText}: IModal) {
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = () => {
    handleSubmitModal();
    setShowModal(false);
  };

  return (
    <>
      <ModalTrigger onClick={() => setShowModal(true)}>{modalTriggerText}</ModalTrigger>
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
