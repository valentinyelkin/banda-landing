import React, { FC } from 'react';
import Logo from '../../Logo/Logo';
import TextField from './TextField/TextField';
import styles from './main.module.scss';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import Media, { MediaPosition } from '../../Media/Media';
import useIsMobile from '../../../../utils/useIsMobile';
import useIsTablet from '../../../../utils/useIsTablet';

const Main: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.sestraMain}>
      <div className={styles.container}>
        <div className={styles.sestraInfo}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeIn}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.logoWrapper}>
              <Logo />
              <h1 className={styles.mainHeading}>Sestra</h1>
              <TextField text="Cloud-based beverage dispensing platform" />
            </div>
          </AnimationOnScroll>
        </div>

        <div className={styles.mediaWrapper}>
          <Media
            alt="Cloud-based beverage dispensing platform"
            src="/images/projects/Sestra/Platform-functionality.jpg"
            position={MediaPosition.RIGHT}
            imagePosition={isMobile ? 'left -10px top 0' : 'left -15px top 0'}
            wrapperStyles={{
              filter: 'drop-shadow(2px 2px 20px rgba(25, 25, 25, 0.3))',
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default Main;
