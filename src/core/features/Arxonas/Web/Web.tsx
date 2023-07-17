import Image from 'next/image';
import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../utils/useIsMobile';
import styles from './web.module.scss';

const Web: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <section className={styles.arxonasWeb}>
      <img
        src="/images/projects/arxonas/bg-web-interface-for-tax-management-solution-mobile.png"
        alt="Web interface background"
        className={styles.webBgMobile}
      />
      <img
        src="/images/projects/arxonas/bg-web-interface-for-tax-management-solution.png"
        alt="Web interface background"
        className={styles.webBg}
      />
      <div className={styles.arxonasWebInfo}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <h2>
            <span>Web interface</span>
          </h2>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.3}
          as="span"
        >
          <p className={styles.commonText}>
            The design concept combined company’s brand identity and desire to
            make more than just a consultancy tool - a place for professional
            and private growth. So the task was to make the interface familiar
            and intuitive, which we succeeded in.
          </p>
        </AnimationOnScroll>
      </div>
      {!isMobile && (
        <Image
          src="/images/projects/arxonas/web-interface-for-tax-management-solution.webp"
          alt="Web interface for tax management solution"
          className={styles.webInterface}
          width={3153}
          height={1492}
        />
      )}

      <img
        src="/images/projects/arxonas/web-interface-for-tax-management-solution-mobile.png"
        alt="Web interface for tax management solution"
        className={styles.webInterfaceMobile}
      />
    </section>
  );
};

export default Web;
