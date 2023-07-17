import React from 'react';
import classNames from 'classnames';
import styles from './textarea.module.scss';

interface TextareaProps {
  id?: string;
  placeholder?: string;
  name: string;
  disabled?: boolean;
  handlerOnChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
  value: string;
  error: string | boolean;
}

const Textarea: React.FunctionComponent<TextareaProps> = ({
  id,
  placeholder,
  name,
  disabled,
  handlerOnChange,
  required,
  value,
  error,
}) => {
  const textareaClasses = classNames(styles.textarea, {
    [styles.filledText]: value.length > 0,
  });
  const textareaWrapperClasses = classNames(styles.textareaWrapper, {
    [styles.textareaError]: !!error,
  });

  return (
    <div className={textareaWrapperClasses}>
      <textarea
        id={id}
        name={name}
        placeholder={placeholder}
        className={textareaClasses}
        disabled={disabled}
        rows={20}
        onChange={(e): void => {
          handlerOnChange && handlerOnChange(e);
        }}
        required={required}
        value={value}
      />
      {error && (
        <p className={styles.errorMessage}>
          {error === 'length' && 'required to fill'}
        </p>
      )}
    </div>
  );
};

export default Textarea;
