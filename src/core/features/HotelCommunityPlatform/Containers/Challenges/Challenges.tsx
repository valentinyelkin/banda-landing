import { FC } from 'react';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import Title from '../Title/Title';
import {
  cardsChallengesFirst,
  cardsChallengesMobile,
  cardsChallengesSecond,
  strings,
} from '../../../../lists/hotelCommunityPlatform';
import CardList from './CardList/CardList';
import OrangeBackground from '../OrangeBackground/OrangeBackground';
import styles from './challenges.module.scss';
import Line from '../Line/Line';

const Challenges: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <OrangeBackground classesOrangeBg="bgChallenges" />
      <Title
        title={strings.titleChallenges}
        classesWrapper="wrapperChallenges"
      />
      <div className={styles.wrapper}>
        <Line classesLine="lineChallenges" />
        <div className={styles.wrapperText}>
          <p className={styles.subTitle}>{strings.subTitleChallenges}</p>
          {!isMobile && !isTablet && (
            <div className={styles.wrapperLists}>
              <div>
                <CardList list={cardsChallengesFirst} />
              </div>
              <div>
                <CardList list={cardsChallengesSecond} />
              </div>
            </div>
          )}
          {(isTablet || isMobile) && (
            <>
              <CardList list={cardsChallengesMobile} />
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Challenges;
