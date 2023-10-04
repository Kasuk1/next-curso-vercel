import { CSSProperties, FC } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

type ActiveLink = {
  text: string;
  href: string;
};

const style: CSSProperties = {
  color: '#0070f3',
  textDecoration: 'underline',
};

export const ActiveLink: FC<ActiveLink> = ({ text, href }) => {
  const { asPath } = useRouter();

  return (
    <Link style={asPath === href ? style : undefined} href={href}>
      {text}
    </Link>
  );
};
