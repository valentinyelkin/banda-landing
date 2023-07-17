import { FC } from 'react';
import styles from './button.module.scss';

interface ButtonProps {
  type?: 'button' | 'submit' | 'reset';
  classes?: string;
  handlerClick?: (e: any) => void;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({
  handlerClick,
  classes,
  type,
  disabled,
  children,
}) => {
  return (
    <button
      disabled={false}
      className={classes ? styles[classes] : ''}
      onClick={handlerClick}
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
