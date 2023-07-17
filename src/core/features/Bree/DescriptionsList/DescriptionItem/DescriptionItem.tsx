import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './descriptionItem.module.scss';

interface DescriptionItemProps {
  text: string;
  boldText?: string;
  classname?: string;
}

const DescriptionItem: React.FC<DescriptionItemProps> = ({
  text,
  boldText,
  classname,
}) => {
  const containerStyles = classNames(
    styles.containerItem,
    classname && [styles[classname]],
  );
  return (
    <div className={containerStyles}>
      <div className={styles.wrapperRing}>
        <Image
          src="/images/projects/Bree/description_ring.png"
          alt="description ring"
          width="24"
          height="24"
          layout="fixed"
        />
      </div>
      <div className={styles.wrapperRingMobile}>
        {classname === 'ringGoals' ? (
          <Image
            src="/images/projects/Bree/description_ring.png"
            alt="description ring"
            width="24"
            height="24"
            layout="fixed"
          />
        ) : (
          <Image
            src="/images/projects/Bree/description_ring_mobile.png"
            alt="description ring"
            width="16"
            height="16"
            layout="fixed"
          />
        )}
      </div>
      <div>
        <span className={styles.boldTextDescription}>{boldText}</span>
        <span className={styles.textDescription}>{text}</span>
      </div>
    </div>
  );
};

export default DescriptionItem;
