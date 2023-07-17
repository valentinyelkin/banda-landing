import React, { FC } from 'react';
import styles from './text-field.module.scss';

type TextFieldProps = {
  text: string;
};

const TextField: FC<TextFieldProps> = ({ text }) => {
  return <p className={styles.textField}>{text}</p>;
};

export default TextField;
