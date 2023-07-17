import React, { FC } from 'react';
import globalStyles from '../assets/scss/insidely_global.module.scss';
import { constants } from '../assets/constants';
import styles from './Stacks.module.scss';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import Image from 'next/image';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomCarousel from '../components/CustomCarousel/CustomCarousel';
import CustomLeftArrow from '../components/CustomCarousel/components/CustomLeftArrow/CustomLeftArrow';
import CustomRightArrow from '../components/CustomCarousel/components/CustomRigthArrow/CustomRightArrow';
import CustomDotsCarousel from '../components/CustomCarousel/components/CustomDotsCarousel/CustomDotsCarousel';
import useIsDesktop from '../../../utils/useIsDesktop';

const responsive = {
  desktop: {
    breakpoint: { max: 1920, min: 1310 },
    items: 5,
  },
  laptopSmall: {
    breakpoint: { max: 1310, min: 1070 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1070, min: 768 },
    items: 2.8,
    slidesToSlide: 3,
  },
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 2,
    slidesToSlide: 2,
  },
};
const Stacks: FC = (): JSX.Element => {
  const isDesktop = useIsDesktop();

  return (
    <section className={globalStyles.section}>
      <div className={styles.wrapper}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInDownBig}
          duration={1}
        >
          <h2 className={`${globalStyles.title} ${globalStyles.title_center}`}>
            Tech stack
          </h2>
        </AnimationOnScroll>
        <div>
          <Carousel
            ssr
            responsive={responsive}
            containerClass={styles.stacks}
            itemClass={styles.item}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
            customDot={<CustomDotsCarousel />}
            showDots={!isDesktop}
          >
            {constants.stack2.map((item) => {
              const { id, first, second } = item;
              return (
                <div key={id}>
                  <div
                    className={styles.stack}
                    style={{
                      background: first.background,
                      borderRadius: first.borderRadius,
                      color: first.color || '#ffffff',
                    }}
                  >
                    <Image
                      src={first.image}
                      alt=""
                      width="104px"
                      height="120px"
                    />
                    <p>{first.text}</p>
                  </div>
                  <div
                    className={styles.stack}
                    style={{
                      background: second.background,
                      borderRadius: second.borderRadius,
                      color: second.color || '#ffffff',
                    }}
                  >
                    <Image
                      src={second.image}
                      alt=""
                      width="104px"
                      height="120px"
                    />

                    <p>{second.text}</p>
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </section>
  );
};
export default Stacks;
