import React from 'react';
import classNames from 'classnames';
import styles from './radioButton.module.scss';

interface InputProps {
  id: string;
  name: string;
  disabled?: boolean;
  value: string;
  smallInput?: boolean;
  handlerOnChange?: (
    e: React.MouseEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  error: boolean | string;
}

const RadioButton: React.FunctionComponent<InputProps> = ({
  id,
  name,
  disabled,
  value,
  smallInput,
  handlerOnChange,
  children,
  required,
  error,
}) => {
  const classes = classNames(styles.inputRadio, {
    [styles.smallInput]: smallInput,
    [styles.errorInput]: !!error,
  });

  return (
    <label htmlFor={id} className={classes}>
      <input
        type="radio"
        id={id}
        name={name}
        disabled={disabled}
        value={value}
        onClick={(e): void => {
          handlerOnChange && handlerOnChange(e);
        }}
        required={required}
      />
      <div>
        <span className={styles.radioCircle} />
        <span>{children}</span>
      </div>
    </label>
  );
};

export default RadioButton;
