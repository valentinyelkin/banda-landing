import Image from 'next/image';
import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './footer.module.scss';

const Footer: React.FunctionComponent = () => {
  const isMobile = useIsMobile();

  return (
    <footer className={styles.keepersFooter}>
      <div className={styles.keepersFooterContent}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <h2>Results</h2>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          delay={0.5}
          as="span"
        >
          <p>
            Eventually, clear and easy-to-use designs grew into a secure and
            solid software. The enterprise app is still serving the professional
            needs of attorneys and therapiests. You can check it out by the link{' '}
            <a
              href="https://app.casekeepers.com"
              rel="noopener noreferrer"
              target="_blank"
            >
              app.casekeepers.com
            </a>
          </p>
        </AnimationOnScroll>
      </div>
      {!isMobile && (
        <Image
          src="/images/projects/caseKeepers/custom-application-development.webp"
          alt="Custom application development"
          width={1920}
          height={1905}
        />
      )}
      {isMobile && (
        <img
          src={`/images/projects/caseKeepers/custom-application-development-mobile.png`}
          alt="Custom application development"
        />
      )}
    </footer>
  );
};

export default Footer;
