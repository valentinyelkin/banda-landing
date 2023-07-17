import { FC } from 'react';
import ScrollButton from '../../../ScrollButton/ScrollButton';
import TextFiled from '../../../TextFiled/TextFiled';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../../utils/useIsMobile';
import Image from 'next/image';
import useIsTablet from '../../../../../utils/useIsTablet';
import styles from './communicationsPlace.module.scss';

interface CommunicationsPlaceProps {
  scrollToBlock: (sectionName: string) => void;
}

const CommunicationsPlace: FC<CommunicationsPlaceProps> = ({
  scrollToBlock,
}) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.containerCommunicationsPlace}>
      <div className={styles.wrapperCommunicationsPlace}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInLeft}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperImg}>
            <Image
              src="/images/projects/Gastehaus/the-challenge-was-how-to-make-all-communications-in-one-place.png"
              alt="The challenge was how to make all communications in one place"
              width="848"
              height="693"
            />
          </div>
        </AnimationOnScroll>
        <div className={styles.wrapperText}>
          <AnimationOnScroll
            animationName={AnimationNames.fadeInRight}
            duration={1}
            as="div"
            disabledAnimation={isTablet || isMobile}
          >
            <TextFiled
              lowerTitle="The challenge was how to make all communications in one place"
              descriptionTop="... and the Solution"
              descriptionBottom="
              Our team has developed an easy-to-use and feature-rich property listing portal that
              allows the company to list, do marketing, discuss available listings with customers, track deals, follow up with clients and communicate in one place."
              classesLowerTitle="lowerTitlePlace"
            />
          </AnimationOnScroll>
          <div className={styles.wrapperBtnScroll}>
            <ScrollButton
              numberScroll={3}
              scrollToBlock={scrollToBlock}
              sectionName="functionality"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunicationsPlace;
