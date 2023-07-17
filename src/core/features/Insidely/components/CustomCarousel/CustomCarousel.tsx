import React, { FC, ReactNode } from 'react';
import Carousel, { ResponsiveType } from 'react-multi-carousel';
import styles from './CustomCarousel.module.scss';
import CustomLeftArrow from './components/CustomLeftArrow/CustomLeftArrow';
import CustomRightArrow from './components/CustomRigthArrow/CustomRightArrow';
import 'react-multi-carousel/lib/styles.css';
import CustomDotsCarousel from './components/CustomDotsCarousel/CustomDotsCarousel';

const CustomCarousel: FC<{
  children: ReactNode;
  responsive: ResponsiveType;
  customSliderClass?: any;
  customItemClass?: any;
  showDots?: boolean;
}> = ({
  children,
  responsive,
  customSliderClass,
  customItemClass,
  showDots = true,
}): JSX.Element => {
  return (
    <Carousel
      className={`${styles.wrapper_carousel} ${customSliderClass}`}
      responsive={responsive}
      ssr
      dotListClass={styles.customDotListClass}
      showDots={showDots}
      itemClass={customItemClass}
      customLeftArrow={<CustomLeftArrow />}
      customRightArrow={<CustomRightArrow />}
      customDot={<CustomDotsCarousel />}
    >
      {children}
    </Carousel>
  );
};

export default CustomCarousel;
