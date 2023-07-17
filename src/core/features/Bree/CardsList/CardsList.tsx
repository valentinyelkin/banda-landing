import React, { useState } from 'react';
import CardChallenges from './CardChallenges/CardChallenges';
import useIsTablet from '../../../utils/useIsTablet';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomRightArrow from './CustomRightArrow/CustomRightArrow';
import CustomLeftArrow from './CustomLeftArrow/CustomLeftArrow';
import CustomDot from './CustomDot/CustomDot';
import CustomButtonGroup from './CustomButtonGroup/CustomButtonGroup';
import useIsMobile from '../../../utils/useIsMobile';
import styles from './cardsList.module.scss';

export interface Lists {
  id?: number;
  img: string;
  title: string;
  description: string;
}

interface CardsListProps {
  list: Lists[];
}

enum LastSlideNumbers {
  TABLET = 7.5,
  MOBILE = 7.9,
}

enum AdditionalTransition {
  TABLET = -230,
  MOBILE = -20,
}

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 668 },
    items: 1.5,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 668, min: 0 },
    items: 1.1,
  },
};

const CardsList: React.FC<CardsListProps> = ({ list }) => {
  const [additionalTransform, setAdditionalTransform] = useState(0);
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();
  return (
    <>
      {!isTablet &&
        !isMobile &&
        list.map(({ id, img, title, description }) => (
          <CardChallenges
            key={id}
            img={img}
            title={title}
            description={description}
          />
        ))}
      {(isTablet || isMobile) && (
        <Carousel
          customDot={<CustomDot />}
          customRightArrow={<CustomRightArrow classes="arrowScrollRightBree" />}
          customLeftArrow={<CustomLeftArrow classes="arrowScrollLeftBree" />}
          customButtonGroup={<CustomButtonGroup />}
          dotListClass={styles.customDotList}
          renderArrowsWhenDisabled={true}
          showDots={true}
          responsive={responsive}
          additionalTransfrom={additionalTransform}
          ssr
          deviceType="tablet"
          swipeable
          beforeChange={(nextSlide) => {
            switch (nextSlide) {
              case LastSlideNumbers.TABLET:
                return setAdditionalTransform(
                  isTablet ? AdditionalTransition.TABLET : 0,
                );
              case LastSlideNumbers.MOBILE:
                return setAdditionalTransform(
                  isMobile ? AdditionalTransition.MOBILE : 0,
                );
              default:
                setAdditionalTransform(0);
            }
          }}
        >
          {list.map(({ id, img, title, description }) => (
            <CardChallenges
              key={id}
              img={img}
              title={title}
              description={description}
            />
          ))}
        </Carousel>
      )}
    </>
  );
};

export default CardsList;
