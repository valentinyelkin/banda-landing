import { FC } from 'react';
import { cardGastehaus } from '../../../lists/cardGastehaus';
import CardFeedback from '../CardFeedback/CardFeedback';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1800 },
    items: 2.5,
  },
  laptop: {
    breakpoint: { max: 1800, min: 1600 },
    items: 2.2,
  },
  laptopSmall: {
    breakpoint: { max: 1600, min: 1024 },
    items: 1.8,
  },
  tablet: {
    breakpoint: { max: 1024, min: 668 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 667, min: 0 },
    items: 1,
  },
};

const CardFeedbackList: FC = () => {
  return (
    <Carousel responsive={responsive} ssr deviceType="desktop" swipeable>
      {cardGastehaus.map(({ name, img, feedback, id, social }) => (
        <CardFeedback
          key={id}
          name={name}
          img={img}
          social={social}
          feedback={feedback}
        />
      ))}
    </Carousel>
  );
};

export default CardFeedbackList;
