import { CarouselInternalState } from 'react-multi-carousel';

export const checkIfSlideTheLast = (
  slideToCheck: number,
  carouselState: CarouselInternalState | undefined,
) => {
  if (carouselState)
    return (
      slideToCheck + carouselState.slidesToShow === carouselState.totalItems
    );
  return false;
};
