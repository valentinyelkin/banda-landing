import React, { FC } from 'react';
import styles from './Figures.module.scss';
import { constants } from '../../../assets/constants';
import Figure from '../../../components/Figure/Figure';
import AnimationOnScroll, {
  AnimationNames,
} from '../../../../../utils/AnimationOnScroll/AnimationOnScroll';

const Figures: FC = (): JSX.Element => {
  return (
    <div className={styles.figures}>
      {constants.figuresMain.map((item) => (
        <AnimationOnScroll
          key={item.id}
          animationName={AnimationNames.fadeInDown}
          duration={1}
          delay={item.delay}
          as="span"
        >
          <Figure
            classNameFigure={`${styles.item} ${styles[`item_${item.id}`]}`}
            colorFigure={item.style.background}
            borderRadiusFigure={item.style.borderRadius}
          />
        </AnimationOnScroll>
      ))}
    </div>
  );
};

export default Figures;
