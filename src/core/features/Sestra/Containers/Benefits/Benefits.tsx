import { benefitsList } from '../../../../lists/listsSestra';
import React, { FC, useRef, useState } from 'react';
import Heading, { TextAlign } from '../../Heading/Heading';
import styles from './benefits.module.scss';
import CardBenefit from '../../CardBenefit/CardBenefit';
import useIsMobile from '../../../../utils/useIsMobile';
import useIsTablet from '../../../../utils/useIsTablet';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomDot from '../../CustomCarousel/CustomDot/CustomDot';
import CustomButtonGroup from '../../CustomCarousel/CustomButtonGroup/CustomButtonGroup';
import { checkIfSlideTheLast } from '../../../../utils/checkIfSlideTheLast';

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 668 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 65,
  },
  mobile: {
    breakpoint: { max: 668, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const Benefits: FC = () => {
  const cardsWrapperRef = useRef<HTMLUListElement>(null);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const [additionalTransform, setAdditionalTransform] = useState(0);

  return (
    <section className={styles.benefits}>
      <div className={styles.container}>
        <Heading
          topText="Project"
          bottomText="benefits"
          textAlign={TextAlign.LEFT}
          topAboveUpperBorder
        />

        {!isMobile && !isTablet && (
          <ul className={styles.cardsWrapper} ref={cardsWrapperRef}>
            {benefitsList.map((item, index) => {
              return (
                <li key={item.title}>
                  <CardBenefit
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                    wrapperRef={cardsWrapperRef}
                    animationDelay={index * 0.5}
                  />
                </li>
              );
            })}
          </ul>
        )}

        {(isMobile || isTablet) && (
          <Carousel
            responsive={responsive}
            swipeable
            showDots={true}
            ssr={true}
            containerClass={styles.carouselContainer}
            dotListClass={styles.customDotList}
            customDot={<CustomDot />}
            arrows={false}
            customButtonGroup={<CustomButtonGroup />}
            partialVisible={isTablet}
            additionalTransfrom={isTablet ? additionalTransform : 0}
            beforeChange={(nextSlide, state) => {
              if (checkIfSlideTheLast(nextSlide, state)) {
                setAdditionalTransform(-30);
              } else {
                setAdditionalTransform(0);
              }
            }}
          >
            {benefitsList.map((item) => {
              return (
                <div className={styles.cardWrapper} key={item.title}>
                  <CardBenefit
                    icon={item.icon}
                    title={item.title}
                    desc={item.desc}
                  />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </section>
  );
};

export default Benefits;
