import { FC } from 'react';
import Card, { CardProps } from './Card/Card';
import CustomDot from '../../../../Bree/CardsList/CustomDot/CustomDot';
import CustomRightArrow from '../../../../Bree/CardsList/CustomRightArrow/CustomRightArrow';
import CustomLeftArrow from '../../../../Bree/CardsList/CustomLeftArrow/CustomLeftArrow';
import CustomButtonGroup from '../../../../Bree/CardsList/CustomButtonGroup/CustomButtonGroup';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import styles from '../testimonials.module.scss';

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

interface CardListProps {
  cardList: CardProps[];
}

const CardList: FC<CardListProps> = ({ cardList }) => {
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
        containerClass={styles.customContainerClass}
        customRightArrow={
          <CustomRightArrow classes="arrowRightSpaceBookingTestimonials" />
        }
        customLeftArrow={
          <CustomLeftArrow classes="arrowLeftSpaceBookingTestimonials" />
        }
        customButtonGroup={<CustomButtonGroup />}
        showDots={true}
        renderArrowsWhenDisabled={true}
        responsive={responsive}
        ssr
        deviceType="tablet"
        swipeable
      >
        {cardList.map(
          ({
            photo,
            feedback,
            name,
            job,
            id,
            wrapperConsumerClasses,
            quoteClasses,
          }) => (
            <Card
              key={id}
              photo={photo}
              feedback={feedback}
              name={name}
              job={job}
              wrapperConsumerClasses={wrapperConsumerClasses}
              quoteClasses={quoteClasses}
            />
          ),
        )}
      </Carousel>
    </>
  );
};

export default CardList;
