import Button from '../../../../shared/coreUi/Button/Button';
import React, { FC } from 'react';
import ArrowForSlider from '../../../../shared/Icons/ArrowForSlider';

export enum ArrowVariant {
  LEFT = 'sliderPrev',
  RIGHT = 'sliderNext',
}

type CustomArrowProps = {
  variant: ArrowVariant;
  onClick?: () => void;
};

const CustomArrow: FC<CustomArrowProps> = ({ onClick, variant }) => {
  return (
    <Button type="button" classes={variant} handlerClick={onClick}>
      <ArrowForSlider />
    </Button>
  );
};

export default CustomArrow;
