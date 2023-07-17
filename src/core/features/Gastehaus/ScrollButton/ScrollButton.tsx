import React from 'react';
import Button from '../../../shared/coreUi/Button/Button';
import { Arrow } from '../../../shared/coreUi/Arrow/Arrow';
import styles from './scrollButton.module.scss';

interface ScrollButtonProps {
  numberScroll: number;
  scrollToBlock: (sectionName: string) => void;
  sectionName: string;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({
  numberScroll,
  scrollToBlock,
  sectionName,
}) => {
  return (
    <div className={styles.containerScrollBtn}>
      <div className={styles.line} />
      <div className={styles.containerTopBtn}>
        <Button classes="roundBtn">
          <span className={styles.number}>{numberScroll}</span>
        </Button>
      </div>
      <div className={styles.containerBottomBtn}>
        <Button
          classes="roundBtn"
          handlerClick={() => scrollToBlock(sectionName)}
        >
          <Arrow arrowClass="arrowScrollBtn" />
        </Button>
      </div>
    </div>
  );
};

export default ScrollButton;
