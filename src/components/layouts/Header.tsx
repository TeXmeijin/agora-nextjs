import AuthMenu from '@/components/uiGroup/AuthMenu';
import { useUser } from '@/components/context/AuthContext';
import { serviceInfo } from '@/packages/service/serviceInfo';
import { Flex, Heading, Link } from '@chakra-ui/react';
import { LoginModal } from '@/components/uiGroup/LoginModal';
import NextLink from 'next/link';

export const Header = () => {
  const { session } = useUser();
  return (
    <Flex
      background={'brandBackground'}
      justifyContent={'space-between'}
      alignItems={'center'}
      p={4}
    >
      <Heading as={'h1'} size={'lg'}>
        <Link as={NextLink} href={'/'}>
          {serviceInfo.name}
        </Link>
      </Heading>
      {!!session && <AuthMenu session={session}></AuthMenu>}
      {!session && <LoginModal></LoginModal>}
    </Flex>
  );
};
