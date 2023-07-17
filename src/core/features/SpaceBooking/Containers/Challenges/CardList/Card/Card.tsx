import { FC } from 'react';
import styles from './card.module.scss';
import classnames from 'classnames';

interface CardProps {
  title: string;
  boldTextOne?: string;
  boldTextTwo?: string;
  boldTextThree?: string;
  boldTextFour?: string;
  description?: string;
  descriptionOne?: string;
  boldTextMiddleOne?: string;
  boldTextMiddleTwo?: string;
  descriptionFour?: string;
  descriptionThree?: string;
  descriptionTwo?: string;
  descriptionMiddleOne?: string;
  descriptionMiddleTwo?: string;
  containerClasses?: string;
  titleClasses?: string;
}

const Card: FC<CardProps> = ({
  title,
  boldTextFour,
  boldTextOne,
  boldTextThree,
  boldTextTwo,
  boldTextMiddleOne,
  boldTextMiddleTwo,
  descriptionMiddleOne,
  descriptionMiddleTwo,
  descriptionOne,
  descriptionFour,
  descriptionThree,
  descriptionTwo,
  description,
  containerClasses,
  titleClasses,
}) => {
  const containerStyles = classnames(
    styles.container,
    containerClasses && [styles[containerClasses]],
  );

  const titleStyles = classnames(
    styles.title,
    titleClasses && [styles[titleClasses]],
  );

  return (
    <div className={containerStyles}>
      <p className={titleStyles}>{title}</p>
      <div className={styles.wrapperDescription}>
        <span className={styles.description}>{description}</span>
        <span className={styles.boltText}>{boldTextMiddleOne}</span>
        <span className={styles.description}>{descriptionMiddleOne}</span>
        <span className={styles.boltText}>{boldTextMiddleTwo}</span>
        <span className={styles.description}>{descriptionMiddleTwo}</span>
        <span className={styles.boltText}>{boldTextOne}</span>
        <span className={styles.description}>{descriptionOne}</span>
        <p className={styles.wrapperParagraph}>
          <span className={styles.boltText}>{boldTextTwo}</span>
          <span className={styles.description}>{descriptionTwo}</span>
        </p>
        <p className={styles.wrapperParagraph}>
          <span className={styles.boltText}>{boldTextThree}</span>
          <span className={styles.description}>{descriptionThree}</span>
        </p>
        <p className={styles.wrapperParagraph}>
          <span className={styles.boltText}>{boldTextFour}</span>
          <span className={styles.description}>{descriptionFour}</span>
        </p>
      </div>
    </div>
  );
};

export default Card;
