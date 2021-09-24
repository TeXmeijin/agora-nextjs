import LibHead from 'next/head';
import { serviceInfo } from '@/packages/service/serviceInfo';
import { ReactNode } from 'react';

type Props = {
  title?: string;
  description?: string;
  children?: ReactNode;
};

export const Head = ({ title, description, children }: Props) => {
  return (
    <LibHead>
      <title>{`${title} | ${serviceInfo.name}`}</title>
      <meta
        name="description"
        content={description ?? serviceInfo.description}
      />
      <meta property="og:title" content={`${title} | ${serviceInfo.name}`} />
      <meta property="og:description" content={description} />
      {children}
    </LibHead>
  );
};
