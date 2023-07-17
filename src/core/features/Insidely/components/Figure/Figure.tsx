import React, { FC } from 'react';
import styles from './Figure.module.scss';

const Figure: FC<{
  colorFigure?: string;
  classNameFigure?: any;
  styleFigure?: any;
  borderRadiusFigure?: string;
}> = ({
  classNameFigure,
  styleFigure,
  colorFigure,
  borderRadiusFigure = '120px 120px 120px 0',
}): JSX.Element => {
  return (
    <div
      className={`${styles.figure} ${classNameFigure}`}
      style={{
        ...styleFigure,
        background: styleFigure?.background || colorFigure,
        borderRadius: styleFigure?.borderRadius || borderRadiusFigure,
      }}
    />
  );
};

export default Figure;
