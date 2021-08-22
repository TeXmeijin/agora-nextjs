import { ReactNode } from 'react';
import { Box } from '@chakra-ui/react';

type Props = {
  children: ReactNode;
};

export const DensePageContent = ({ children }: Props) => {
  return (
    <Box as={'section'} maxW={'720px'} marginX={'auto'} p={8}>
      {children}
    </Box>
  );
};
