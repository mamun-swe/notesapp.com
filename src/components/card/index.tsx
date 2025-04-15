import { FC, JSX, ReactNode } from 'react';

interface Props {
  className?: string;
  children: ReactNode;
}

const Card: FC<Props> & { Header: FC<Props>; Body: FC<Props> } = ({
  className = '',
  children,
}): JSX.Element => {
  return (
    <div
      className={`w-full max-w-xl rounded-2xl shadow-sm bg-white ${className}`}
    >
      {children}
    </div>
  );
};

// Card.Header Component
const Header: FC<Props> = ({ className = '', children }): JSX.Element => {
  return (
    <div className={`p-4 border-b border-primary ${className}`}>{children}</div>
  );
};

// Card.Body Component
const Body: FC<Props> = ({ className = '', children }): JSX.Element => {
  return <div className={`p-4 ${className}`}>{children}</div>;
};

// Attach Body as a static property
Card.Header = Header;
Card.Body = Body;

export { Card };
