import { FC } from 'react';
import Title from '../Title/Title';
import { challengesCards, strings } from '../../../../lists/spaceBooking';
import Card from './CardList/Card/Card';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import CardList from './CardList/CardList';
import styles from './challenges.module.scss';

const Challenges: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <AnimationOnScroll
        animationName={AnimationNames.fadeIn}
        duration={1}
        delay={0.5}
        as="span"
        disabledAnimation={isTablet || isMobile}
      >
        <Title title={strings.titleChallenges} classNames="titleChallenges" />
        <p className={styles.subTitle}>{strings.subTitleChallenges}</p>
      </AnimationOnScroll>
      {!isTablet && !isMobile && (
        <div className={styles.containerCards}>
          <div className={styles.firstCard}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.5}
              as="span"
            >
              <Card
                title={challengesCards[0].title}
                boldTextOne={challengesCards[0].boldTextOne}
                boldTextTwo={challengesCards[0].boldTextTwo}
                boldTextThree={challengesCards[0].boldTextThree}
                boldTextFour={challengesCards[0].boldTextFour}
                descriptionOne={challengesCards[0].descriptionOne}
                descriptionTwo={challengesCards[0].descriptionTwo}
                descriptionThree={challengesCards[0].descriptionThree}
                descriptionFour={challengesCards[0].descriptionFour}
              />
            </AnimationOnScroll>
          </div>
          <div className={styles.secondCard}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={0.8}
              as="span"
            >
              <Card
                title={challengesCards[1].title}
                description={challengesCards[1].description}
                boldTextMiddleOne={challengesCards[1].boldTextMiddleOne}
                descriptionOne={challengesCards[1].descriptionOne}
              />
            </AnimationOnScroll>
            <div className={styles.wrapperCard}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={1.1}
                as="span"
              >
                <Card
                  title={challengesCards[2].title}
                  boldTextOne={challengesCards[2].boldTextOne}
                  boldTextTwo={challengesCards[2].boldTextTwo}
                  descriptionOne={challengesCards[2].descriptionOne}
                  descriptionTwo={challengesCards[2].descriptionTwo}
                />
              </AnimationOnScroll>
            </div>
          </div>
          <div className={styles.thirdCard}>
            <AnimationOnScroll
              animationName={AnimationNames.fadeInUp}
              duration={1}
              delay={1.4}
              as="span"
            >
              <Card
                title={challengesCards[3].title}
                description={challengesCards[3].description}
                boldTextMiddleOne={challengesCards[3].boldTextMiddleOne}
                descriptionMiddleTwo={challengesCards[3].descriptionMiddleTwo}
                boldTextMiddleTwo={challengesCards[3].boldTextMiddleTwo}
                descriptionMiddleOne={challengesCards[3].descriptionMiddleOne}
              />
            </AnimationOnScroll>
            <div className={styles.wrapperCard}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={1.7}
                as="span"
              >
                <Card
                  title={challengesCards[4].title}
                  description={challengesCards[4].description}
                  boldTextMiddleOne={challengesCards[4].boldTextMiddleOne}
                />
              </AnimationOnScroll>
            </div>
            <div className={styles.wrapperCard}>
              <AnimationOnScroll
                animationName={AnimationNames.fadeInUp}
                duration={1}
                delay={2}
                as="span"
              >
                <Card
                  title={challengesCards[5].title}
                  description={challengesCards[5].description}
                  boldTextMiddleOne={challengesCards[5].boldTextMiddleOne}
                />
              </AnimationOnScroll>
            </div>
          </div>
        </div>
      )}
      {(isTablet || isMobile) && <CardList />}
    </section>
  );
};

export default Challenges;
