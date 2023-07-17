import { FC } from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import Pagination from '../../Pagination/Pagination';
import useIsMobile from '../../../../utils/useIsMobile';
import useIsTablet from '../../../../utils/useIsTablet';
import styles from './aboutProject.module.scss';

const AboutProject: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.containerAboutProjectBlock}>
      <div className={styles.wrapperBlock}>
        <div className={styles.wrapperTechStack}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.wrapperCards}>
              <div className={styles.containerCard}>
                <div className={styles.wrapperTopCard}>
                  <p className={styles.numberWrapper}>24.5K</p>
                  <span className={styles.wrapperCardDescription}>
                    Project Hours
                  </span>
                </div>
              </div>
              <div className={styles.containerCard}>
                <div className={styles.wrapperTopCard}>
                  <p className={styles.numberWrapper}>7</p>
                  <span className={styles.wrapperCardDescription}>
                    Months of work
                  </span>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.containerMainCard}>
              <p className={styles.wrapperMainCardTitle}>Tech stack</p>
              <span className={styles.wrapperMainCardDescription}>
                HTML5, SCSS, Angular 10, Express, MongoDB, Mongoose, Typescript,
                Node JS, Google maps, AWS (S3)
              </span>
            </div>
          </AnimationOnScroll>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.wrapperCards}>
              <div className={styles.containerCard}>
                <div className={styles.wrapperBottomCard}>
                  <p className={styles.numberWrapper}>2</p>
                  <span className={styles.wrapperCardDescriptionDesign}>
                    Design Team
                  </span>
                </div>
              </div>
              <div className={styles.containerCard}>
                <div className={styles.wrapperBottomCard}>
                  <p className={styles.numberWrapper}>3</p>
                  <span className={styles.wrapperCardDescription}>
                    Backend/Frontend Development Team + Team Lead
                  </span>
                </div>
              </div>
            </div>
          </AnimationOnScroll>
        </div>
        <div className={styles.wrapperLine}>
          <div className={styles.line} />
        </div>
        <div className={styles.wrapperAboutProject}>
          <div className={styles.wrapperPagination}>
            <Pagination currentPage={1} />
          </div>
          <div>
            <h2 className={styles.titleAboutProject}>About the project</h2>
          </div>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={1}
            delay={0.7}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <p className={styles.question}>What is Gästehaus?</p>
            <span className={styles.descriptionAboutProject}>
              We have developed a B2B\B2C platform that enables end-users to
              easily rent multiple items, like a room or a flat, transportation,
              tools, etc. It is a property renting web service for German
              speakers that resembles Airbnb app, but with extended
              functionalities. The platform has a flexible pricing scheme that
              consists of several membership plans. Renting and service fees
              vary depending on the user type (either business or individual).
              The platform has flexible interfaces where a user can see only the
              resources that they or their company have access to. Availability
              of resources is displayed automatically to the pre-defined rules.
            </span>
            <div className={styles.locationProject}>
              <span>Project geography - Germany</span>
            </div>
          </AnimationOnScroll>
        </div>
        <div className={styles.backgroundAboutProject} />
      </div>
    </section>
  );
};

export default AboutProject;
