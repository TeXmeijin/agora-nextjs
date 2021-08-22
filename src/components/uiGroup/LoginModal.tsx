import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/modal';
import LoginButton from '@/components/uiGroup/LoginButton';
import { Box, Button, useBoolean, useDisclosure } from '@chakra-ui/react';

export const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Log In</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <Box p={'24px'}>
            <LoginButton></LoginButton>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
