import React, { FC } from 'react';
import { ButtonGroupProps } from 'react-multi-carousel';
import stylesBtn from '../../../../shared/coreUi/Button/button.module.scss';
import styles from './custom-button-group.module.scss';
import CustomArrow, { ArrowVariant } from '../CustomArrow/CustomArrow';
import classNames from 'classnames';

type CustomButtonGroupProps = {
  loadMorePosts: () => void;
  nextIsActive: boolean;
};

const CustomButtonGroup: FC<ButtonGroupProps & CustomButtonGroupProps> = ({
  previous,
  loadMorePosts,
  carouselState,
  goToSlide,
  nextIsActive,
  next,
}) => {
  const customButtonGroupClasses = classNames(
    stylesBtn.sliderBtnWrapper,
    styles.sliderBtnWrapper,
  );

  const nextClickHandler = () => {
    if (nextIsActive) {
      loadMorePosts();
      if (goToSlide) goToSlide(Number(carouselState?.currentSlide) + 1);
    } else {
      if (next) next();
    }
  };

  return (
    <div className={customButtonGroupClasses}>
      <CustomArrow variant={ArrowVariant.LEFT} onClick={previous} />
      <CustomArrow variant={ArrowVariant.RIGHT} onClick={nextClickHandler} />
    </div>
  );
};

export default CustomButtonGroup;
