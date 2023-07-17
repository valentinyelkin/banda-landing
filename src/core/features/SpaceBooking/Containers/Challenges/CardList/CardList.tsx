import { FC } from 'react';
import { challengesCardsTablet } from '../../../../../lists/spaceBooking';
import Card from './Card/Card';
import CustomDot from '../../../../Bree/CardsList/CustomDot/CustomDot';
import CustomRightArrow from '../../../../Bree/CardsList/CustomRightArrow/CustomRightArrow';
import CustomLeftArrow from '../../../../Bree/CardsList/CustomLeftArrow/CustomLeftArrow';
import CustomButtonGroup from '../../../../Bree/CardsList/CustomButtonGroup/CustomButtonGroup';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../challenges.module.scss';

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 668 },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 668, min: 0 },
    items: 1,
  },
};

const CardList: FC = () => {
  return (
    <>
      <Carousel
        customDot={
          <CustomDot
            classes="realEstateDots"
            classesActive="realEstateActiveDots"
          />
        }
        dotListClass={styles.customDotList}
        containerClass={styles.customContainer}
        customRightArrow={<CustomRightArrow classes="arrowRightSpaceBooking" />}
        customLeftArrow={<CustomLeftArrow classes="arrowLeftSpaceBooking" />}
        customButtonGroup={<CustomButtonGroup />}
        showDots={true}
        renderArrowsWhenDisabled={true}
        responsive={responsive}
        ssr
        deviceType="tablet"
        swipeable
      >
        {challengesCardsTablet.map((cards) => (
          <>
            {cards.map((card) => (
              <Card
                key={card.id}
                title={card.title}
                description={card.description}
                descriptionMiddleOne={card.descriptionMiddleOne}
                descriptionMiddleTwo={card.descriptionMiddleTwo}
                descriptionOne={card.descriptionOne}
                descriptionTwo={card.descriptionTwo}
                descriptionFour={card.descriptionFour}
                descriptionThree={card.descriptionThree}
                boldTextMiddleTwo={card.boldTextMiddleTwo}
                boldTextMiddleOne={card.boldTextMiddleOne}
                boldTextTwo={card.boldTextTwo}
                boldTextOne={card.boldTextOne}
                boldTextThree={card.boldTextThree}
                boldTextFour={card.boldTextFour}
                containerClasses={card.containerClasses}
                titleClasses={card.titleClasses}
              />
            ))}
          </>
        ))}
      </Carousel>
    </>
  );
};

export default CardList;
