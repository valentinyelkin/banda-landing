import React, { useRef } from 'react';
import Tabs from './components/Tabs/Tabs';
import styles from './weOffer.module.scss';
import useGrid from '../../../../utils/useGrid';
import AnimatedLine from '../../../../shared/AnimatedLine/AnimatedLine';
import useRedrawGrid from '../../../../utils/useRedrawGrid';

const WeOffer: React.FunctionComponent = () => {
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;

  useGrid(refGridWrapper, 'rgba(167,167,167,0.1)', 'rgba(23, 23, 24, 0.4)');
  useRedrawGrid(refGridWrapper);

  return (
    <section
      className={styles.offerWrapper}
      ref={refGridWrapper}
      data-header="big-yellow"
    >
      <div className={styles.offerContainer}>
        <h1>Services | Bandapixels</h1>
        <Tabs />
      </div>
      <AnimatedLine backgroundColor="#BDBDBD" filledColor="#333" />
    </section>
  );
};

export default WeOffer;
