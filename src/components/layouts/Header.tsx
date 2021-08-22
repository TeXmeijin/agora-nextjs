import AuthMenu from '@/components/uiGroup/AuthMenu';
import { useUser } from '@/components/context/AuthContext';
import { serviceInfo } from '@/packages/service/serviceInfo';
import { Flex, Heading } from '@chakra-ui/react';
import { LoginModal } from '@/components/uiGroup/LoginModal';

export const Header = () => {
  const { session } = useUser();
  return (
    <Flex
      background={'brandBackground'}
      justifyContent={'space-between'}
      alignItems={'center'}
      height={'60px'}
      padding={'8px'}
    >
      <Heading as={'h1'} size={'lg'}>
        {serviceInfo.name}
      </Heading>
      {!!session && <AuthMenu session={session}></AuthMenu>}
      {!session && <LoginModal></LoginModal>}
    </Flex>
  );
};
