import { Text, TextProps } from '@chakra-ui/react';
import dayjs from 'dayjs';
import 'dayjs/locale/ja';

type Props = {
  date: Date;
} & TextProps;

export const DateText = ({ date, ...props }: Props) => {
  return <Text {...props}>{dayjs(date).format('YYYY年M月D日 hh:mm')}</Text>;
};
