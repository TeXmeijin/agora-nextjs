import { Modal, ModalContent, ModalOverlay } from '@chakra-ui/modal';
import LoginButton from '@/components/uiGroup/LoginButton';
import {
  Box,
  Button,
  Heading,
  Text,
  useBoolean,
  useDisclosure,
} from '@chakra-ui/react';
import { serviceInfo } from '@/packages/service/serviceInfo';

export const LoginModal = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Log In</Button>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <Box p={'24px'}>
            <Heading size={'md'}>{serviceInfo.name}にログイン</Heading>
            <Text mt={2}>
              ログインすることで利用規約に同意したことになります
            </Text>
            <Box mt={6}>
              <LoginButton></LoginButton>
            </Box>
          </Box>
        </ModalContent>
      </Modal>
    </>
  );
};
