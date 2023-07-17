import { FC } from 'react';
import classNames from 'classnames';
import styles from './textField.module.scss';

interface TextFieldProps {
  lowerTitle?: string;
  descriptionTop?: string;
  descriptionBottom?: string;
  classes?: string;
  classesLowerTitle?: string;
}

const TextFiled: FC<TextFieldProps> = ({
  lowerTitle,
  descriptionBottom,
  descriptionTop,
  classes,
  classesLowerTitle,
}) => {
  const classesWrapperText = classNames(
    styles.wrapperText,
    classes && [styles[classes]],
  );
  const lowerTitleStyles = classNames(
    styles.lowerTitle,
    classesLowerTitle && [styles[classesLowerTitle]],
  );

  return (
    <div className={classesWrapperText}>
      <p className={lowerTitleStyles}>{lowerTitle}</p>
      <span className={styles.descriptionTop}>{descriptionTop}</span>
      <span className={styles.descriptionBottom}>{descriptionBottom}</span>
    </div>
  );
};

export default TextFiled;
