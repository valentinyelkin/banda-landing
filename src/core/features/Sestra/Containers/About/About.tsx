import { techStackItems } from '../../../../lists/listsSestra';
import React, { FC } from 'react';
import AboutInfo from './AboutInfo/AboutInfo';
import CardAbout, { CardAboutVariant } from '../../CardAbout/CardAbout';
import styles from './about.module.scss';

const About: FC = () => {
  return (
    <section className={styles.sestraAbout}>
      <div className={styles.container}>
        <div className={styles.cardsWrapper}>
          <CardAbout
            title="/images/projects/Sestra/Tech-stack.svg"
            cardListItems={techStackItems}
            variant={CardAboutVariant.TECH_STACK}
            animationDuration={1}
          />

          <div className={styles.cardsSubWrapper}>
            <CardAbout
              title="/images/projects/Sestra/geography.svg"
              cardListItems={[{ title: 'US' }]}
              variant={CardAboutVariant.GEOGRAPHY}
              animationDuration={0.5}
              animationDelay={0.5}
            />
            <CardAbout
              title="/images/projects/Sestra/duration.svg"
              cardListItems={[{ title: '8' }]}
              variant={CardAboutVariant.DURATION}
              animationDuration={0.5}
              animationDelay={1}
            />
          </div>
        </div>

        <AboutInfo />
      </div>
    </section>
  );
};

export default About;
