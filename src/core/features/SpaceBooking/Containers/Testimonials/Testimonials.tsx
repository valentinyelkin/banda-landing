import { FC } from 'react';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import Title from '../Title/Title';
import {
  strings,
  testimonialsCards,
  testimonialsCardsMobile,
  testimonialsCardsTablet,
} from '../../../../lists/spaceBooking';
import Card from './CardList/Card/Card';
import CardList from './CardList/CardList';
import styles from './testimonials.module.scss';

const Testimonials: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={1}
        delay={1}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <Title
          title={strings.titleTestimonials}
          classNames="titleTestimonials"
        />
      </AnimationOnScroll>
      <div className={styles.wrapperCards}>
        {!isTablet && !isMobile && (
          <>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.5}
              as="span"
            >
              <Card
                name={testimonialsCards[0].name}
                feedback={testimonialsCards[0].feedback}
                job={testimonialsCards[0].job}
                photo={testimonialsCards[0].photo}
                classes="cardJohn"
              />
            </AnimationOnScroll>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={1.2}
              as="span"
            >
              <Card
                name={testimonialsCards[1].name}
                feedback={testimonialsCards[1].feedback}
                job={testimonialsCards[1].job}
                photo={testimonialsCards[1].photo}
                classes="cardAlexandra"
                photoClasses="photoAlexandra"
              />
            </AnimationOnScroll>
          </>
        )}
        {isTablet && !isMobile && (
          <CardList cardList={testimonialsCardsTablet} />
        )}
        {!isTablet && isMobile && (
          <CardList cardList={testimonialsCardsMobile} />
        )}
      </div>
    </section>
  );
};

export default Testimonials;
