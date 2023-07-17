import React, { FC } from 'react';
import Image from 'next/image';
import AnimatedLine from '../../../../shared/AnimatedLine/AnimatedLine';
import { RealEstateItemProps } from '../../../../shared/interfaces/realEstate';
import styles from './realEstateItem.module.scss';
import quillStyles from '../../../../../../pages/real-estate/real-estate.module.scss';
import api from '../../../../shared/constants';
import { useScroll } from '../../../../utils/useScroll';

const RealEstateItem: FC<RealEstateItemProps> = ({ realEstate }) => {
  const imageSrc = `${api.schema}${api.backendHost}${api.helpers.image}${realEstate.image.fileName}`;

  const isBottom = useScroll();

  return (
    <section className={styles.section} data-header="blog-header">
      <h1 className={styles.title}>{realEstate.head}</h1>
      <div className={styles.container}>
        <div className={styles.wrapperText}>
          <div
            className={`${quillStyles['blog-content']}`}
            dangerouslySetInnerHTML={{ __html: realEstate.body }}
          ></div>
        </div>
        <div className={styles.img}>
          <Image
            src={imageSrc}
            alt={realEstate.image.fileName}
            width="820"
            height="520"
          />
        </div>
      </div>
      {!isBottom && (
        <div className={styles.animatedLineWrapper}>
          <AnimatedLine backgroundColor="#333" filledColor="#fff" />
        </div>
      )}
    </section>
  );
};

export default RealEstateItem;
