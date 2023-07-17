import { FC } from 'react';
import Title from '../Title/Title';
import { strings } from '../../../../lists/spaceBooking';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import Image from 'next/image';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './results.module.scss';

const Results: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <div className={styles.wrapperText}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeIn}
          duration={1}
          delay={0.5}
          as="span"
          disabledAnimation={isTablet || isMobile}
        >
          <Title title={strings.titleResults} classNames="titleResults" />
          <p className={styles.description}>
            <span className={styles.str}>{strings.desRes1}</span>
            <span className={styles.boldStr}>{strings.desBoldRes1}</span>
            <span className={styles.str}>{strings.desRes2}</span>
            <span className={styles.boldStr}>{strings.desBoldRes2}</span>
            <span className={styles.str}>{strings.desRes3}</span>
          </p>
        </AnimationOnScroll>
      </div>
      <div className={styles.img}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={2}
          delay={1.5}
          as="span"
        >
          <Image
            src="/images/projects/SpaceBooking/results/workspace_managing.png"
            alt="Workspace managing"
            width="1920"
            height="900"
          />
        </AnimationOnScroll>
      </div>
      <div className={styles.imgTablet}>
        <Image
          src="/images/projects/SpaceBooking/results/workspace_managing_t.png"
          alt="Workspace managing"
          width="768"
          height="662"
        />
      </div>
      <div className={styles.imgMobile}>
        <Image
          src="/images/projects/SpaceBooking/results/workspace_managing_m.png"
          alt="Workspace managing"
          width="375"
          height="360"
        />
      </div>
    </section>
  );
};

export default Results;
