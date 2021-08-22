import { useState } from 'react';
import { signInWithTwitter } from '@/packages/auth/usecase/signInWithTwitter';
import { Button } from '@chakra-ui/react';

export default function LoginButton() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');

  const handleLogin = async () => {
    try {
      setLoading(true);
      const { error, user } = await signInWithTwitter();
      if (error) throw error;
    } catch (error) {
      alert(error.error_description || error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={(e) => {
        e.preventDefault();
        handleLogin();
      }}
      disabled={loading}
      isLoading={loading}
      bg={'blue'}
      isFullWidth
      color={'white'}
    >
      <span>Login By Twitter</span>
    </Button>
  );
}
