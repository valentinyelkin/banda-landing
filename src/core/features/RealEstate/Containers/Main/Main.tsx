import React, { FC, useRef } from 'react';
import useGrid from '../../../../utils/useGrid';
import useRedrawGrid from '../../../../utils/useRedrawGrid';
import { strings } from '../../../../lists/realEstate';
import Image from 'next/image';
import AnimatedLine from '../../../../shared/AnimatedLine/AnimatedLine';
import Organizations from './Organizations/Organizations';
import styles from './main.module.scss';

const Main: FC = () => {
  const refGridWrapper =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLDivElement | null>;
  useGrid(refGridWrapper, 'rgba(167,167,167,0.1)', 'rgba(23, 23, 24, 0.4)');
  useRedrawGrid(refGridWrapper);

  return (
    <section
      className={styles.container}
      ref={refGridWrapper}
      data-header="blog-header"
    >
      <div className={styles.wrapperText}>
        <h1 className={styles.title}>{strings.title}</h1>
        <p className={styles.descriptionTitle}>{strings.descriptionTitle}</p>
        <span className={styles.description}>{strings.descriptionTop}</span>
        <p className={styles.descriptionBottom}>{strings.descriptionMedium}</p>
        <span className={styles.description}>{strings.descriptionBottom}</span>
        <Organizations />
      </div>
      <div className={styles.img}>
        <Image
          src="/images/realEstate/real_estate_industry.png"
          alt="real estate industry"
          width="820"
          height="520"
        />
      </div>
      <AnimatedLine backgroundColor="#333" filledColor="#fff" />
    </section>
  );
};

export default Main;
