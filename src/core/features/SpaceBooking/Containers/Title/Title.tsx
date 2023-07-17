import { FC } from 'react';
import classnames from 'classnames';
import styles from './title.module.scss';

interface TitleProps {
  title: string;
  classNames?: string;
}

const Title: FC<TitleProps> = ({ title, classNames }) => {
  const titleStyles = classnames(
    styles.title,
    classNames && [styles[classNames]],
  );

  return <h2 className={titleStyles}>{title}</h2>;
};

export default Title;
