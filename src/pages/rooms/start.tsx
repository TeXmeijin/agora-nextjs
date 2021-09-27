import Layout from '@/components/layouts/Layout';
import { Box, FormControl, FormLabel, Heading, Input } from '@chakra-ui/react';
import { DensePageContent } from '@/components/layouts/DensePageContent';
import { Head } from '@/components/meta/Head';

export default function Start() {
  return (
    <Layout>
      <Head title={'部屋を作成する'}></Head>
      <DensePageContent>
        <Heading as={'h1'} size={'lg'}>
          部屋を作成する
        </Heading>
        <FormControl mt={8}>
          <FormLabel fontWeight={'bold'}>部屋の名前</FormLabel>
          <Input placeholder={'部屋の名前'} bg={'white'}></Input>
        </FormControl>
      </DensePageContent>
    </Layout>
  );
}
