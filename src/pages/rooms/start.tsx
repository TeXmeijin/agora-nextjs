import Layout from '@/components/layouts/Layout';
import {
  FormControl,
  FormLabel,
  forwardRef,
  Heading,
  Input,
} from '@chakra-ui/react';
import { DensePageContent } from '@/components/layouts/DensePageContent';
import { Head } from '@/components/meta/Head';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useState } from 'react';
import ja from 'date-fns/locale/ja';

registerLocale('ja', ja);

export default function Start() {
  const [startDate, setStartDate] = useState(new Date());

  const DatePickerInput = forwardRef(({ value, onClick, ...props }, ref) => {
    return (
      <Input
        readOnly
        value={value}
        className="example-custom-input"
        onClick={onClick}
        ref={ref}
      ></Input>
    );
  });

  return (
    <Layout>
      <Head title={'部屋を作成する'} />
      <DensePageContent>
        <Heading as={'h1'} size={'lg'}>
          部屋を作成する
        </Heading>
        <FormControl mt={8}>
          <FormLabel fontWeight={'bold'}>作品名</FormLabel>
          <Input placeholder={'呪術廻戦、推しの子、BUNGO...'} bg={'white'} />
        </FormControl>
        <FormControl mt={8}>
          <FormLabel fontWeight={'bold'}>開催日時</FormLabel>
          <DatePicker
            dateFormat="yyyy年M月d日 HH:mm"
            startDate={startDate}
            customInput={<DatePickerInput></DatePickerInput>}
            locale={'ja'}
            showTimeSelect
            selected={startDate}
            onChange={(date) => setStartDate(date as Date)}
          />
        </FormControl>
      </DensePageContent>
    </Layout>
  );
}
