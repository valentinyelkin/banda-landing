import classNames from 'classnames';
import Image from 'next/image';
import React, { FC } from 'react';
import styles from './card-testimonial.module.scss';
import QuotesIcon from './QuotesIcon/QuotesIcon';

type CardTestimonialProps = {
  photo: string;
  name: string;
  roleInCompany: string;
  text: string;
  flippedPhoto?: boolean;
};

const CardTestimonial: FC<CardTestimonialProps> = ({
  photo,
  name,
  roleInCompany,
  text,
  flippedPhoto,
}) => {
  const photoWrapperClasses = classNames(styles.photoWrapper, {
    [styles.withFlippedPhoto]: flippedPhoto,
  });

  return (
    <div className={styles.testimonial}>
      <div className={photoWrapperClasses}>
        <Image src={photo} alt={name} layout="fill" objectFit="cover" />
      </div>
      <h3 className={styles.testimonialTitle}>{name}</h3>
      <p className={styles.testimonialSubtitle}>{roleInCompany}</p>
      <p className={styles.testimonialText}>{text}</p>
      <QuotesIcon />
    </div>
  );
};

export default CardTestimonial;
