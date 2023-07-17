import { FC } from 'react';
import ScrollButton from '../../../ScrollButton/ScrollButton';
import TextFiled from '../../../TextFiled/TextFiled';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../../utils/useIsMobile';
import Image from 'next/image';
import useIsTablet from '../../../../../utils/useIsTablet';
import styles from './searchingMaps.module.scss';

interface SearchingMapsProps {
  scrollToBlock: (sectionName: string) => void;
}

const SearchingMaps: FC<SearchingMapsProps> = ({ scrollToBlock }) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.containerSearchingMaps}>
      <div className={styles.wrapperSearchingMaps}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInLeft}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperScrollBtn}>
            <ScrollButton
              numberScroll={2}
              scrollToBlock={scrollToBlock}
              sectionName="communicationsPlace"
            />
          </div>
          <div className={styles.containerTitle}>
            <TextFiled
              lowerTitle="Searching through maps. How to give users an opportunity to search on the map in the area they need"
              descriptionTop="... and the Solution"
              descriptionBottom='We have created "an interactive map" search function that allows the clients to narrow down the search result by defining an area of interest with a specific geometric shape (triangle, rectangle, etc.) on a map.'
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInRight}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperImg}>
            <Image
              src="/images/projects/Gastehaus/searching-throught-maps.png"
              alt="Searching throught maps"
              width="872"
              height="699"
              objectFit="contain"
            />
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

export default SearchingMaps;
