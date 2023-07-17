import { FC } from 'react';
import Title from '../Title/Title';
import {
  projectBenefits,
  strings,
} from '../../../../lists/hotelCommunityPlatform';
import ItemList from '../ItemList/ItemList';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import styles from './projectBenefits.module.scss';
import Image from 'next/image';
import Line from '../Line/Line';

const ProjectBenefits: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <Title
        title={strings.titleProjectBenefits}
        classesWrapper="wrapperBenefits"
      />
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={1}
        delay={1}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <div className={styles.wrapper}>
          <Line classesLine="lineProjectBenefits" />
          <div className={styles.wrapperText}>
            <span className={styles.description}>
              {strings.descriptionBenefits1}
            </span>
            <ItemList
              list={projectBenefits}
              listClasses="listBenefits"
              containerClasses="containerBenefits"
            />
            <span className={styles.description}>
              {strings.descriptionBenefits2}
            </span>
            <span className={styles.descriptionBold}>
              {strings.boldBenefits}
            </span>
          </div>
        </div>
      </AnimationOnScroll>
      <div className={styles.img}>
        <Image
          src="/images/projects/Hotel/goal/hotel_platform_benefits.png"
          alt="Hotel platform benefits"
          width="975"
          height="1490"
        />
      </div>
    </section>
  );
};

export default ProjectBenefits;
