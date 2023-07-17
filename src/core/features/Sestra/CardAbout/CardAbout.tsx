import Image from 'next/image';
import React, { FC } from 'react';
import styles from './card-about.module.scss';
import CardItem, { CardAboutItem } from './CardItem/CardItem';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../utils/useIsMobile';
import useIsTablet from '../../../utils/useIsTablet';
import classNames from 'classnames';

export enum CardAboutVariant {
  TECH_STACK = 'techStack',
  GEOGRAPHY = 'geography',
  DURATION = 'duration',
}

export type CardAboutProps = {
  title: string;
  cardListItems: CardAboutItem[];
  subTitle?: string;
  variant: CardAboutVariant;
  animationDuration?: number;
  animationDelay?: number;
};

const cardTitleSizes: Record<
  CardAboutVariant,
  { width: number; height: number }
> = {
  [CardAboutVariant.TECH_STACK]: { width: 54, height: 460 },
  [CardAboutVariant.GEOGRAPHY]: { width: 36, height: 312 },
  [CardAboutVariant.DURATION]: { width: 36, height: 254 },
};

const CardAbout: FC<CardAboutProps> = ({
  title,
  variant,
  cardListItems,
  animationDuration = 0.5,
  animationDelay = 0,
}) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  const cardAboutClasses = classNames(styles.cardAbout, styles[variant]);

  return (
    <div className={cardAboutClasses}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeInUp}
        duration={animationDuration}
        delay={animationDelay}
        as="div"
        disabledAnimation={isTablet || isMobile}
      >
        <div className={styles.cardAboutMain}>
          <div className={styles.cardTitle}>
            <Image
              src={title}
              alt=""
              width={cardTitleSizes[variant].width}
              height={cardTitleSizes[variant].height}
            />
          </div>

          <ul className={styles.cardList}>
            {cardListItems.map((item, index) => {
              return (
                <li key={item.title} style={isMobile ? { order: index } : {}}>
                  <CardItem
                    icon={item.icon}
                    title={item.title}
                    variant={variant}
                  />
                </li>
              );
            })}
          </ul>
        </div>
      </AnimationOnScroll>
    </div>
  );
};

export default CardAbout;
