import { testimonials } from '../../../../lists/listsSestra';
import React, { FC, useState } from 'react';
import Heading, { TextAlign } from '../../Heading/Heading';
import styles from './testimonials.module.scss';
import CardTestimonial from '../../CardTestimonial/CardTestimonial';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../utils/useIsMobile';
import useIsTablet from '../../../../utils/useIsTablet';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomDot from '../../CustomCarousel/CustomDot/CustomDot';
import CustomButtonGroup from '../../CustomCarousel/CustomButtonGroup/CustomButtonGroup';
import { checkIfSlideTheLast } from '../../../../utils/checkIfSlideTheLast';

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 769 },
    items: 2,
    slidesToSlide: 1,
    partialVisibilityGutter: 30,
  },
  tablet768: {
    breakpoint: { max: 768, min: 668 },
    items: 1,
    slidesToSlide: 1,
    partialVisibilityGutter: 340,
  },
  mobile: {
    breakpoint: { max: 668, min: 0 },
    items: 1,
  },
};

const Testimonials: FC = () => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const [additionalTransform, setAdditionalTransform] = useState(0);

  return (
    <div className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.headerWrapper}>
          <Heading
            topText="The client’s"
            bottomText="testimonials"
            textAlign={
              !isMobile && !isTablet ? TextAlign.CENTER : TextAlign.LEFT
            }
          />
        </div>
        {!isMobile && !isTablet && (
          <div className={styles.testimonialsWrapper}>
            {testimonials.map((item, index) => {
              return (
                <div className={styles.testimonialWrapper} key={item.name}>
                  <AnimationOnScroll
                    animationName={AnimationNames.fadeInUp}
                    duration={0.5}
                    as="div"
                    delay={0.5 * index}
                  >
                    <CardTestimonial
                      photo={item.photo}
                      name={item.name}
                      roleInCompany={item.roleInCompany}
                      text={item.text}
                      flippedPhoto={item.flippedPhoto}
                    />
                  </AnimationOnScroll>
                </div>
              );
            })}
          </div>
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
            partialVisible
            additionalTransfrom={isTablet ? additionalTransform : 0}
            beforeChange={(nextSlide, state) => {
              if (checkIfSlideTheLast(nextSlide, state)) {
                setAdditionalTransform(-30);
              } else {
                setAdditionalTransform(0);
              }
            }}
          >
            {testimonials.map((item) => {
              return (
                <div className={styles.cardWrapper} key={item.name}>
                  <CardTestimonial
                    photo={item.photo}
                    name={item.name}
                    roleInCompany={item.roleInCompany}
                    text={item.text}
                    flippedPhoto={item.flippedPhoto}
                  />
                </div>
              );
            })}
          </Carousel>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
