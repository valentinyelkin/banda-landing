import { FC } from 'react';
import Pagination from '../../../Pagination/Pagination';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import ScrollButton from '../../../ScrollButton/ScrollButton';
import TextFiled from '../../../TextFiled/TextFiled';
import useIsMobile from '../../../../../utils/useIsMobile';
import Image from 'next/image';
import useIsTablet from '../../../../../utils/useIsTablet';
import styles from './challenges.module.scss';

interface ChallengesProps {
  scrollToBlock: (sectionName: string) => void;
}

const Challenges: FC<ChallengesProps> = ({ scrollToBlock }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.wrapperChallenges}>
      <div className={styles.containerChallenges}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInLeft}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperImg}>
            <Image
              src="/images/projects/Gastehaus/challenges-that-we-faced.png"
              alt="Challenges that we faced"
              width="812"
              height="693"
            />
          </div>
        </AnimationOnScroll>
        <div className={styles.containerPagination}>
          <Pagination currentPage={3} />
        </div>
        <div className={styles.wrapperScrollBtn}>
          <ScrollButton
            numberScroll={1}
            scrollToBlock={scrollToBlock}
            sectionName="searchingMaps"
          />
        </div>
        <div className={styles.wrapperTitle}>
          <h2 className={styles.title}>Challenges</h2>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={1}
            delay={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <p className={styles.lowerTitle}>that we faced</p>
            <TextFiled
              lowerTitle="Simultaneous booking at the same time"
              descriptionTop="... and the Solution"
              descriptionBottom="WebSocket, an inactive button: if several people are trying to book one unit
               at the same time, it will be allocated to the first person, while others will get an inactive button and will not be able to proceed."
              classesLowerTitle="lowerTitleChallenges"
            />
          </AnimationOnScroll>
        </div>
      </div>
    </section>
  );
};

export default Challenges;
