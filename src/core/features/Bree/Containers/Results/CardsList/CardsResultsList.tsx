import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { resultsCards } from '../../../../../lists/cardBree';
import CardFeedback from './CardFeedback/CardFeedback';
import CustomDot from '../../../CardsList/CustomDot/CustomDot';
import CustomButtonGroup from '../../../CardsList/CustomButtonGroup/CustomButtonGroup';
import CustomRightArrow from '../../../CardsList/CustomRightArrow/CustomRightArrow';
import CustomLeftArrow from '../../../CardsList/CustomLeftArrow/CustomLeftArrow';
import styles from '../results.module.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1800 },
    items: 1,
  },
  laptop: {
    breakpoint: { max: 1800, min: 1440 },
    items: 1,
  },
  laptopSmall: {
    breakpoint: { max: 1440, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 668 },
    items: 1,
    partialVisibilityGutter: 115,
  },
  mobileL: {
    breakpoint: { max: 668, min: 425 },
    items: 1,
    partialVisibilityGutter: 100,
  },
  mobile: {
    breakpoint: { max: 425, min: 0 },
    items: 1,
    partialVisibilityGutter: 40,
  },
};

const CardsResultsList: React.FC = () => {
  return (
    <>
      <Carousel
        customButtonGroup={<CustomButtonGroup />}
        customRightArrow={
          <CustomRightArrow classes="arrowScrollRightBreeResults" />
        }
        customLeftArrow={
          <CustomLeftArrow classes="arrowScrollLeftBreeResults" />
        }
        dotListClass={styles.customDotListClass}
        sliderClass={styles.customSliderClass}
        customDot={<CustomDot classes="resultsDots" />}
        partialVisible={true}
        containerClass={styles.customContainerList}
        renderArrowsWhenDisabled={true}
        showDots={true}
        responsive={responsive}
        ssr
        deviceType="desktop"
        swipeable
      >
        {resultsCards.map(({ name, career, feedback, id, img }) => (
          <CardFeedback
            img={img}
            name={name}
            career={career}
            feedback={feedback}
            key={id}
          />
        ))}
      </Carousel>
    </>
  );
};

export default CardsResultsList;
