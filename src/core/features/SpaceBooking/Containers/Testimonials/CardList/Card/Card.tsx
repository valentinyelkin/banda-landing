import { FC } from 'react';
import Image from 'next/image';
import classnames from 'classnames';
import styles from './card.module.scss';
import useIsMobile from '../../../../../../utils/useIsMobile';

export interface CardProps {
  id?: number;
  photo: string;
  feedback: string;
  name: string;
  job: string;
  classes?: string;
  photoClasses?: string;
  wrapperConsumerClasses?: boolean;
  quoteClasses?: string;
}

const Card: FC<CardProps> = ({
  photo,
  job,
  feedback,
  name,
  classes,
  photoClasses,
  wrapperConsumerClasses,
  quoteClasses,
}) => {
  const containerStyles = classnames(
    styles.container,
    classes && [styles[classes]],
  );
  const photoStyles = classnames(
    styles.photo,
    photoClasses && [styles[photoClasses]],
  );
  const wrapperConsumerStyles = classnames(
    styles.wrapperConsumer,
    wrapperConsumerClasses && styles.wrapperConsumerSecond,
  );
  const quoteStyles = classnames(
    styles.quote,
    quoteClasses && styles.secondCardQuote,
  );
  const isMobile = useIsMobile();

  return (
    <div className={containerStyles}>
      <div className={photoStyles}>
        <Image
          src={photo}
          alt={name}
          layout="fill"
          objectFit={isMobile ? 'cover' : undefined}
        />
      </div>
      <div className={styles.wrapperRightBlock}>
        <span className={styles.feedback}>{feedback}</span>
        <div className={wrapperConsumerStyles}>
          <div className={styles.consumer}>
            <p className={styles.name}>{name}</p>
            <p className={styles.job}>{job}</p>
          </div>
          <div className={quoteStyles}>
            <Image
              src="/images/projects/SpaceBooking/testimonials/quote-message.svg"
              alt="quote message"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
