import { FC, useState } from 'react';
import { cardsResults } from '../../../../../lists/hotelCommunityPlatform';
import Card from './Card/Card';
import CustomDot from '../../../../Bree/CardsList/CustomDot/CustomDot';
import CustomRightArrow from '../../../../Bree/CardsList/CustomRightArrow/CustomRightArrow';
import CustomLeftArrow from '../../../../Bree/CardsList/CustomLeftArrow/CustomLeftArrow';
import CustomButtonGroup from '../../../../Bree/CardsList/CustomButtonGroup/CustomButtonGroup';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { checkIfSlideTheLast } from '../../../../../utils/checkIfSlideTheLast';
import useIsTablet from '../../../../../utils/useIsTablet';
import styles from './cardList.module.scss';

const responsive = {
  desktop: {
    breakpoint: { max: 1920, min: 1440 },
    partialVisibilityGutter: 200,
    items: 1,
  },
  laptop: {
    breakpoint: { max: 1440, min: 1024 },
    partialVisibilityGutter: 90,
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 668 },
    items: 1,
    partialVisibilityGutter: 160,
  },
  mobile: {
    breakpoint: { max: 668, min: 0 },
    items: 1,
  },
};

const CardsList: FC = () => {
  const [additionalTransform, setAdditionalTransform] = useState(0);
  const isTablet = useIsTablet();

  return (
    <>
      <Carousel
        customDot={
          <CustomDot
            classes="hotelCommunityDots"
            classesActive="hotelCommunityActiveDot"
          />
        }
        dotListClass={styles.customDotList}
        containerClass={styles.customContainer}
        customRightArrow={
          <CustomRightArrow classes="arrowRightHotelCommunityResults" />
        }
        customLeftArrow={
          <CustomLeftArrow classes="arrowLeftHotelCommunityResults" />
        }
        customButtonGroup={<CustomButtonGroup />}
        showDots={true}
        renderArrowsWhenDisabled={true}
        responsive={responsive}
        ssr
        deviceType="laptop"
        swipeable
        partialVisbile={true}
        additionalTransfrom={isTablet ? additionalTransform : 0}
        beforeChange={(nextSlide, state) => {
          if (checkIfSlideTheLast(nextSlide, state)) {
            setAdditionalTransform(-60);
          } else {
            setAdditionalTransform(0);
          }
        }}
      >
        {cardsResults.map(({ id, position, photo, name, feedback }) => (
          <Card
            key={id}
            photo={photo}
            feedback={feedback}
            name={name}
            position={position}
          />
        ))}
      </Carousel>
    </>
  );
};

export default CardsList;
