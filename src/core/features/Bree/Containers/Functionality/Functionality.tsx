import React from 'react';
import Image from 'next/image';
import DescriptionsList from '../../DescriptionsList/DescriptionsList';
import {
  functionality,
  functionalityMap,
  functionalityUserProfile,
} from '../../../../lists/listBree';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './functionality.module.scss';

const Functionality: React.FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <section className={styles.container}>
      <div className={styles.firstWrapper}>
        <div className={styles.wrapperList}>
          <div className={styles.circleTop}>
            <Image
              src="/images/projects/Bree/circle_features_lower.svg"
              alt="circle"
              layout="fill"
            />
          </div>
          <h2 className={styles.title}>Functionality</h2>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <DescriptionsList
              classname="containerItemFunctionality"
              title="The solution simplifies tenant onboarding by:"
              titleClasses="titleDescriptionFunctionality"
              lists={functionality}
            />
          </AnimationOnScroll>
        </div>
        <div className={styles.containerImg}>
          <div className={styles.ringTop}>
            <Image
              src="/images/projects/Bree/circle_features_lower.svg"
              alt="circle"
              layout="fill"
            />
          </div>
          <div className={styles.circleBackground}>
            <Image
              src="/images/projects/Bree/background_functionality.svg"
              alt="circle"
              layout="fill"
            />
          </div>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <div className={styles.functionalityImg}>
              <Image
                src="/images/projects/Bree/smart_booking_systems.png"
                alt="Smart booking systems"
                layout="fill"
                objectFit="cover"
              />
              <div className={styles.circleBottom}>
                <Image
                  src="/images/projects/Bree/circle_features_lower.svg"
                  alt="circle"
                  layout="fill"
                />
              </div>
            </div>
          </AnimationOnScroll>
        </div>
      </div>
      <div className={styles.secondContainer}>
        <div className={styles.circleSecondBackground}>
          <Image
            src="/images/projects/Bree/background_functionality.svg"
            alt="circle"
            layout="fill"
          />
        </div>
        <div className={styles.containerMap}>
          <Image
            src="/images/projects/Bree/search_for_property_on_map.png"
            alt="Search for property on map"
            layout="fill"
            objectFit="cover"
          />
          <div className={styles.circleMapBottom}>
            <Image
              src="/images/projects/Bree/circle_features_lower.svg"
              alt="circle"
              layout="fill"
            />
          </div>
        </div>
        <div className={styles.wrapperSecondList}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={1}
            as="div"
            disabledAnimation={isTablet}
          >
            <DescriptionsList
              classname="containerItemFunctionality"
              lists={functionalityMap}
            />
          </AnimationOnScroll>
        </div>
      </div>
      <div className={styles.thirdWrapper}>
        <div className={styles.thirdWrapperList}>
          <div className={styles.circleThirdTop}>
            <Image
              src="/images/projects/Bree/circle_features_lower.svg"
              alt="circle"
              layout="fill"
            />
          </div>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInLeft}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <DescriptionsList
              classname="containerItemFunctionality"
              lists={functionalityUserProfile}
            />
          </AnimationOnScroll>
        </div>
        <div className={styles.circleThirdBackground}>
          <Image
            src="/images/projects/Bree/background_functionality.svg"
            alt="circle"
            layout="fill"
          />
        </div>
        <AnimationOnScroll
          animationName={AnimationNames.zoomIn}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.containerUserProfile}>
            <Image
              src="/images/projects/Bree/tenant_profile.png"
              alt="Tenant profile"
              layout="fill"
              objectFit="cover"
            />
            <div className={styles.circleUserProfileBottom}>
              <Image
                src="/images/projects/Bree/circle_features_lower.svg"
                alt="circle"
                layout="fill"
              />
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default Functionality;
