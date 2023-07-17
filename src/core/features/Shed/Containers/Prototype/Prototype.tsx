import React from 'react';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './prototype.module.scss';

const Prototype: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.shedPrototype}>
      <div className={styles.shedPrototypeWrapper}>
        <h2>Prototype and User flow</h2>
        <img
          src={
            isMobile
              ? '/images/projects/Shed/rental-application-features-mobile.png'
              : '/images/projects/Shed/rental-application-features.png'
          }
          alt="Rental application features"
        />
      </div>
    </section>
  );
};

export default Prototype;
