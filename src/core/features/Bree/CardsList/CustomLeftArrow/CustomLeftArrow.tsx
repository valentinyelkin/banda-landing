import { FC } from 'react';
import { Arrow } from '../../../../shared/coreUi/Arrow/Arrow';
import { CustomArrowProps } from '../CustomRightArrow/CustomRightArrow';

const CustomLeftArrow: FC<CustomArrowProps> = ({
  onClick,
  classes,
  carouselState,
}) => {
  return (
    <Arrow
      arrowClass={classes}
      onClick={onClick}
      currentSlide={carouselState && carouselState.currentSlide}
    />
  );
};

export default CustomLeftArrow;
