import { FC } from 'react';
import { ArrowProps } from 'react-multi-carousel';
import { Arrow } from '../../../../shared/coreUi/Arrow/Arrow';

export interface CustomArrowProps extends ArrowProps {
  classes?: string;
  setScroll?: (state: boolean) => void;
}

const CustomRightArrow: FC<CustomArrowProps> = ({
  onClick,
  classes,
  carouselState,
}) => {
  return (
    <Arrow
      arrowClass={classes}
      onClick={onClick}
      totalItems={carouselState && carouselState.totalItems}
      currentSlide={carouselState && carouselState.currentSlide}
    />
  );
};

export default CustomRightArrow;
