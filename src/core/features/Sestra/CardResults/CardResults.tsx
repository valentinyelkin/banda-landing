import React, { FC } from 'react';
import styles from './card-results.module.scss';
import CardResultsItem, {
  CardResultsItemProps,
} from './CardResultsItem/CardResultsItem';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../utils/useIsMobile';
import useIsTablet from '../../../utils/useIsTablet';

type CardResultsProps = {
  title: string;
  emphasizedTitleEnd: string;
  list: CardResultsItemProps[];
};

const CardResults: FC<CardResultsProps> = ({
  title,
  list,
  emphasizedTitleEnd,
}) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <AnimationOnScroll
      animationName={AnimationNames.fadeInUp}
      duration={1}
      as="div"
      disabledAnimation={isTablet || isMobile}
    >
      <div className={styles.cardResults}>
        <h3 className={styles.cardTitle}>
          {title} <span>{emphasizedTitleEnd}</span>
        </h3>
        <ul className={styles.cardList}>
          {list.map((item) => {
            return (
              <CardResultsItem
                icon={item.icon}
                text={item.text}
                key={item.text}
              />
            );
          })}
        </ul>
      </div>
    </AnimationOnScroll>
  );
};

export default CardResults;
