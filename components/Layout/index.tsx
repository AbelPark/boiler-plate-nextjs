import { HTMLAttributes, PropsWithChildren } from 'react';
import { Wrapper } from './styles';

const Layout = ({ children, ...props }: PropsWithChildren<HTMLAttributes<HTMLDivElement>>) => {
  return <Wrapper {...props}>{children}</Wrapper>;
};

export { Layout };
