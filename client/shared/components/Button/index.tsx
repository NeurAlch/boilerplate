import { ReactNode } from 'react';
import { classNames } from '../../utils/classNames';

export interface ButtonProps {
  id?: string;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
  children: ReactNode;
  baseClasses?: string;
  styleClasses?: string;
  focusClasses?: string;
  disabledClasses?: string;
}

const Button = ({
  id,
  type,
  onClick,
  children,
  disabled,
  styleClasses,
  baseClasses,
  focusClasses,
  disabledClasses,
}: ButtonProps) => {
  return (
    <button
      id={id}
      onClick={onClick}
      disabled={disabled}
      type={type || 'button'}
      className={classNames(
        baseClasses || 'select-none flex items-center',
        focusClasses || 'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400',
        styleClasses || 'bg-gray-200 px-3 py-1 rounded text-gray-800',
        !styleClasses && !disabled && 'hover:bg-gray-300',
        disabled ? disabledClasses || 'disabled cursor-not-allowed bg-gray-400 text-gray-500' : undefined,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
