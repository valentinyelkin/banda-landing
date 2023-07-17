import React from 'react';
import styles from './animatedLine.module.scss';

interface AnimatedLineProps {
  backgroundColor: string;
  filledColor: string;
}

const AnimatedLine: React.FunctionComponent<AnimatedLineProps> = ({
  backgroundColor,
  filledColor,
}) => {
  return (
    <div
      style={{ background: backgroundColor }}
      className={styles.animatedLine}
    >
      <div style={{ background: filledColor }} />
    </div>
  );
};

export default AnimatedLine;
