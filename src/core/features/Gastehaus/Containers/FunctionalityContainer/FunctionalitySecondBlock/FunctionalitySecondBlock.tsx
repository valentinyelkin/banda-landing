import { FC } from 'react';
import Button from '../../../../../shared/coreUi/Button/Button';
import { Arrow } from '../../../../../shared/coreUi/Arrow/Arrow';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsMobile from '../../../../../utils/useIsMobile';
import Image from 'next/image';
import useIsTablet from '../../../../../utils/useIsTablet';
import styles from './functionalitySecondBlock.module.scss';

interface FunctionalitySecondProps {
  scrollToBlock: (sectionName: string) => void;
}

const FunctionalitySecondBlock: FC<FunctionalitySecondProps> = ({
  scrollToBlock,
}) => {
  const isMobile = useIsMobile();
  const isTablet = useIsTablet();

  return (
    <section className={styles.containerFunctionalitySecondBlock}>
      <div className={styles.wrapperFunctionalitySecondBlock}>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInLeft}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperImg}>
            <Image
              src="/images/projects/Gastehaus/filtering-tool.png"
              alt="Filtering tool"
              width="774"
              height="663"
            />
          </div>
          <div className={styles.functionalitySecondMobileImg}>
            <Image
              src="/images/projects/Gastehaus/filtering-tool-mobile.png"
              alt="Filtering tool"
              width="774"
              height="663"
            />
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animationName={AnimationNames.fadeInRight}
          duration={1}
          as="div"
          disabledAnimation={isTablet || isMobile}
        >
          <div className={styles.wrapperText}>
            <p className={styles.lowerTitle}>
              The filtering tool that enables clients to set multiple search
              criteria
            </p>
            <p className={styles.descriptionTop}>
              Real-time accurate search results
            </p>
            <p className={styles.descriptionBottom}>
              An optimized lead-to-deal sales process
            </p>
          </div>
        </AnimationOnScroll>
        <div className={styles.wrapperScrollLine}>
          <div className={styles.line} />
          <Button
            classes="roundBtn"
            handlerClick={() => scrollToBlock('functionalityMaps')}
          >
            <Arrow arrowClass="arrowScrollBtn" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FunctionalitySecondBlock;
