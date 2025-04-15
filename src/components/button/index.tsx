import { ReactNode } from 'react';

interface Props {
  children?: ReactNode;
  disabled?: boolean;
  className?: string;
  outline?: boolean;
  buttonType: 'primary' | 'secondary';
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

export const PrimaryButton: React.FC<Props> = ({
  children,
  disabled = false,
  className = '',
  type = 'button',
  buttonType = 'primary',
  outline = false,
  onClick = () => {},
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`transition-all duration-300 cursor-pointer p-2.5 disabled:opacity-50 disabled:cursor-not-allowed ${
        buttonType === 'primary' && !outline
          ? 'text-white border border-black bg-black hover:bg-black/80'
          : buttonType === 'primary' && outline
            ? 'text-black border border-black bg-transparent hover:bg-black hover:text-white'
            : buttonType === 'secondary' && !outline
              ? 'text-black border border-primary bg-primary hover:bg-slate-300'
              : buttonType === 'secondary' && outline
                ? 'text-black border border-primary bg-transparent hover:bg-primary'
                : ''
      } ${className}`}
    >
      {children}
    </button>
  );
};
