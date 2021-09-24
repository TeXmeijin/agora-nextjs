import { supabase } from '@/lib/supabaseClient';
import { Session } from '@supabase/supabase-js';
import { useEffect } from 'react';
import { upsertProfile } from '@/packages/auth/usecase/upsertProfile';
import { Button, Flex, Link } from '@chakra-ui/react';
import NextLink from 'next/link';

export default function AuthMenu({ session }: { session: Session }) {
  useEffect(() => {
    const f = async () => {
      if (session.user) {
        await upsertProfile({
          id: session.user.id,
          updated_at: new Date(),
          user_name: session.user.user_metadata.user_name,
          full_name: session.user.user_metadata.full_name,
          avatar_url: session.user.user_metadata.avatar_url,
        });
      }
    };

    f();
  }, []);

  return (
    <Flex>
      <Link as={NextLink} href={'/rooms/start'}>
        <Button color={'white'} background={'brand'} size={'sm'}>
          部屋を作る
        </Button>
      </Link>
      <Button
        ml={2}
        onClick={() => supabase.auth.signOut()}
        colorScheme={'gray'}
        size={'sm'}
      >
        Sign Out
      </Button>
    </Flex>
  );
}
