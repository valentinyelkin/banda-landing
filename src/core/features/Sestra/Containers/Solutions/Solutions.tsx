import { solutionsList } from '../../../../lists/listsSestra';
import React, { FC, useRef, useState } from 'react';
import Heading, { TextAlign } from '../../Heading/Heading';
import styles from './solutions.module.scss';
import SolutionsColumn from './SolutionsColumn/SolutionsColumn';
import useIsMobile from '../../../../utils/useIsMobile';
import useIsTablet from '../../../../utils/useIsTablet';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomDot from '../../CustomCarousel/CustomDot/CustomDot';
import CustomButtonGroup from '../../CustomCarousel/CustomButtonGroup/CustomButtonGroup';
import { parseListForColumns } from '../../../../utils/parseListForColumns';
import CardSolution from '../../CardSolution/CardSolution';
import { checkIfSlideTheLast } from '../../../../utils/checkIfSlideTheLast';

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 668 },
    items: 2,
    slidesToSlide: 2,
    partialVisibilityGutter: 20,
  },
  mobile: {
    breakpoint: { max: 668, min: 0 },
    items: 1,
  },
};

const Solutions: FC = () => {
  const cardsWrapperRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();
  const [additionalTransform, setAdditionalTransform] = useState(0);

  return (
    <div className={styles.solutions}>
      <div className={styles.container}>
        <Heading
          topText="Challenges"
          bottomText="and solutions"
          textAlign={TextAlign.LEFT}
          topAboveUpperBorder
        />

        {!isMobile && !isTablet && (
          <div className={styles.solutionsCardsWrapper} ref={cardsWrapperRef}>
            {parseListForColumns(solutionsList, 2).map((item) => {
              return (
                <SolutionsColumn
                  cards={item.columnItems}
                  key={item.columnNumber}
                  order={item.columnNumber}
                  wrapperRef={cardsWrapperRef}
                />
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
            {[...solutionsList].reverse().map((item) => {
              return (
                <div className={styles.cardWrapper} key={item.title}>
                  <CardSolution
                    title={item.title}
                    desc={item.desc}
                    list={item.list}
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

export default Solutions;
