import { FC } from 'react';
import Image from 'next/image';
import { Arrow } from '../../../../shared/coreUi/Arrow/Arrow';
import Button from '../../../../shared/coreUi/Button/Button';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './main.module.scss';
import useIsTablet from '../../../../utils/useIsTablet';

interface MainProps {
  scrollToBlock: () => void;
}

const Main: FC<MainProps> = ({ scrollToBlock }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.gastehausMain}>
      <div className={styles.gastehausMainContainer}>
        <div className={styles.containerScroll}>
          <div className={styles.line} />
          <span className={styles.lineText}>Scroll</span>
          <div className={styles.scrollBtn}>
            <Button
              classes="roundBtn"
              type="button"
              handlerClick={scrollToBlock}
            >
              <Arrow arrowClass="arrowScrollBtn" />
            </Button>
          </div>
        </div>
        <div className={styles.gastehausMainWrapper}>
          <div className={styles.logoWrapper}>
            <div className={styles.bandaLogo}>
              <Image
                src="/images/projects/Gastehaus/banda-logo.png"
                alt="banda logo"
                width="140"
                height="40"
                objectFit="contain"
                quality={100}
              />
            </div>
            <div className={styles.gastLogo}>
              <Image
                src="/images/projects/Gastehaus/logo-gast.png"
                alt="gastehaus logo"
                width="177"
                height="40"
                quality={100}
              />
            </div>
          </div>
          <h1 className={styles.gastehausTitle}>
            Gästehaus
            <span className={styles.gastehausSmallTitle}>nda</span>
          </h1>
          <p className={styles.bottomTitle}>Real Estate Web Service</p>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInUp}
            duration={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <span className={styles.descriptionMain}>
              We have developed a B2B\B2C platform that <br /> enables end-users
              to easily rent multiple items, <br />
              like a room or a flat, transportation, tools, etc.
            </span>
          </AnimationOnScroll>
          <span className={styles.descriptionMainTablet}>
            We have developed a B2B\B2C platform that enables end-users to
            easily rent multiple items, like a room or a flat, transportation,
            tools, etc.
          </span>
        </div>
        <div className={styles.wrapperBtnYellowMain}>
          <Button
            classes="btnYellowMainGastehause"
            handlerClick={scrollToBlock}
          >
            About <br /> this project in detals
            <Arrow arrowClass="arrow" />
          </Button>
          <div className={styles.mainImage}>
            <Image
              src="/images/projects/Gastehaus/real-estate-web-service.png"
              alt="Real estate web service"
              width="908"
              height="1060"
              objectFit="cover"
            />
          </div>
          <div className={styles.mainImageTablet}>
            <Image
              src="/images/projects/Gastehaus/real-estate-web-service-t.png"
              alt="Real estate web service"
              layout="fill"
              quality={100}
            />
          </div>
          <div className={styles.mainMobileImage}>
            <Image
              src="/images/projects/Gastehaus/real-estate-web-service-mobile.png"
              quality={100}
              alt="Real estate web service"
              layout="fill"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
