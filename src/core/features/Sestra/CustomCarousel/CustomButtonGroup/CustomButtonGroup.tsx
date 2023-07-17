import { checkIfSlideTheLast } from '../../../../utils/checkIfSlideTheLast';
import React, { FC } from 'react';
import { ButtonGroupProps } from 'react-multi-carousel';
import CustomArrow, { ArrowVariant } from '../CustomArrow/CustomArrow';

const CustomButtonGroup: FC<ButtonGroupProps> = ({
  previous,
  next,
  carouselState,
}) => {
  return (
    <>
      <CustomArrow
        variant={ArrowVariant.LEFT}
        onClick={previous}
        disabled={carouselState?.currentSlide === 0}
      />
      <CustomArrow
        variant={ArrowVariant.RIGHT}
        onClick={next}
        disabled={
          carouselState?.currentSlide
            ? checkIfSlideTheLast(carouselState.currentSlide, carouselState)
            : false
        }
      />
    </>
  );
};

export default CustomButtonGroup;
