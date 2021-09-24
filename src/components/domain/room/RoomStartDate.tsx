import { DateText } from '@/components/uiParts/DateText';
import { CalendarIcon } from '@chakra-ui/icons';
import { Flex, FlexProps } from '@chakra-ui/react';

type Props = {
  startDate: Date;
} & FlexProps;

export const RoomStartDate = ({ startDate, ...props }: Props) => {
  return (
    <Flex alignItems={'center'} {...props}>
      <CalendarIcon color={'brand'} />
      <DateText ml={2} fontWeight={'bold'} color={'brand'} date={startDate} />
    </Flex>
  );
};
