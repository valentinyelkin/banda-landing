import React from 'react';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './structure.module.scss';
import useIsMobile from '../../../../utils/useIsMobile';
import checkMobilePicture from '../../../../utils/checkMobilePicture';

const Structure: React.FunctionComponent = () => {
  const isMobile = useIsMobile();
  return (
    <section className={styles.keepersStructure}>
      <div className={styles.keepersStructureWrapper}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInUp}
          duration={1}
          as="span"
        >
          <h2>
            <span>Website Structure</span>
          </h2>
        </AnimationOnScroll>
        <img
          src={`/images/projects/caseKeepers/web-solution-for-attorneys${checkMobilePicture(
            isMobile,
          )}.png`}
          alt="Web solution for attorneys"
        />
        {!isMobile && (
          <img
            src="/images/projects/caseKeepers/web-solution-for-attorneys-decor.png"
            alt="Web solution for attorneys decor"
            className={styles.keepersStructureDecor}
          />
        )}
      </div>
    </section>
  );
};

export default Structure;
