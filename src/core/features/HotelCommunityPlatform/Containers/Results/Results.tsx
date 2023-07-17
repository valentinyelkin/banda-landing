import { FC } from 'react';
import Title from '../Title/Title';
import { listResults, strings } from '../../../../lists/hotelCommunityPlatform';
import ItemList from '../ItemList/ItemList';
import CardsList from './CardsList/CardsList';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../utils/AnimationOnScroll/AnimationOnScroll';
import useIsTablet from '../../../../utils/useIsTablet';
import useIsMobile from '../../../../utils/useIsMobile';
import styles from './results.module.scss';
import Line from '../Line/Line';
import BlueBackground from '../BlueBackground/BlueBackground';

const Results: FC = () => {
  const isTablet = useIsTablet();
  const isMobile = useIsMobile();

  return (
    <section className={styles.container}>
      <BlueBackground classesBlueBg="bgResults" />
      <Title title={strings.titleResults} classesWrapper="wrapperResults" />
      <div className={styles.wrapper}>
        <div className={styles.lineWrapper}>
          <Line classesLine="lineResults" />
        </div>
        <div className={styles.wrapperList}>
          <AnimationOnScroll
            animationName={AnimationNames.zoomIn}
            duration={1}
            delay={1}
            as="span"
            disabledAnimation={isTablet || isMobile}
          >
            <p className={styles.description}>{strings.desResults}</p>
            <ItemList list={listResults} listClasses="resultsList" />
          </AnimationOnScroll>
        </div>
        <CardsList />
      </div>
    </section>
  );
};

export default Results;
