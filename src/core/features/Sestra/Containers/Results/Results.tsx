import { resultsCardList, resultsList } from '../../../../lists/listsSestra';
import React, { FC } from 'react';
import Heading, { TextAlign } from '../../Heading/Heading';
import InfoList from '../../InfoList/InfoList';
import styles from './results.module.scss';
import InfoText from '../../InfoText/InfoText';
import CardResults from '../../CardResults/CardResults';

const Results: FC = () => {
  return (
    <div className={styles.results}>
      <div className={styles.container}>
        <div className={styles.resultsInfo}>
          <Heading
            topText="Project"
            bottomText="results"
            textAlign={TextAlign.LEFT}
            topAboveUpperBorder={true}
          />
          <InfoText text="We have developed a <span>feature-rich beverage dispensing platform</span> that seamlessly integrates into any cloud." />
          <InfoList infoArray={resultsList} />
        </div>
        <CardResults
          title="This IoT solution with compact configurations can be easily integrated into"
          emphasizedTitleEnd="any type of venue:"
          list={resultsCardList}
        />
      </div>
    </div>
  );
};

export default Results;
