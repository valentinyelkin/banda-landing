import { FC } from 'react';
import ChallengesCard, {
  ChallengesCardProps,
} from './ChallengesCard/ChallengesCard';
import useIsTablet from '../../../../../utils/useIsTablet';
import useIsMobile from '../../../../../utils/useIsMobile';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import CustomButtonGroup from '../../../../Bree/CardsList/CustomButtonGroup/CustomButtonGroup';
import CustomDot from '../../../../Bree/CardsList/CustomDot/CustomDot';
import CustomRightArrow from '../../../../Bree/CardsList/CustomRightArrow/CustomRightArrow';
import CustomLeftArrow from '../../../../Bree/CardsList/CustomLeftArrow/CustomLeftArrow';
import styles from './cardList.module.scss';

const responsive = {
  tablet: {
    breakpoint: { max: 1024, min: 668 },
    items: 1,
    partialVisibilityGutter: 130,
  },
  mobile: {
    breakpoint: { max: 668, min: 0 },
    items: 1,
  },
};

interface CardListProps {
  list: ChallengesCardProps[];
}

const CardList: FC<CardListProps> = ({ list }) => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <div className={styles.container}>
      {!isTablet &&
        !isMobile &&
        list.map(({ title, description, id, containerClasses, delay }) => (
          <ChallengesCard
            key={id}
            title={title}
            description={description}
            containerClasses={containerClasses}
            delay={delay}
          />
        ))}
      {(isTablet || isMobile) && (
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
            <CustomRightArrow classes="arrowRightHotelCommunity" />
          }
          customLeftArrow={
            <CustomLeftArrow classes="arrowLeftHotelCommunity" />
          }
          customButtonGroup={<CustomButtonGroup />}
          showDots={true}
          renderArrowsWhenDisabled={true}
          partialVisbile={true}
          responsive={responsive}
          ssr
          deviceType="tablet"
          swipeable
        >
          {list.map(({ title, description, id }) => (
            <ChallengesCard key={id} title={title} description={description} />
          ))}
        </Carousel>
      )}
    </div>
  );
};

export default CardList;
