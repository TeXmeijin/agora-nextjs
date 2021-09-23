import { DateText } from '@/components/uiParts/DateText';
import { CalendarIcon } from '@chakra-ui/icons';
import { Flex } from '@chakra-ui/react';

type Props = {
  startDate: Date;
};

export const RoomStartDate = (props: Props) => {
  return (
    <Flex alignItems={'center'}>
      <CalendarIcon color={'brand'} />
      <DateText
        ml={2}
        fontWeight={'bold'}
        color={'brand'}
        fontSize={'sm'}
        date={props.startDate}
      />
    </Flex>
  );
};
