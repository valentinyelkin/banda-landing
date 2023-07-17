import { AppState } from '../../store/store';

export const getSection = ({
  fullPageScrollReducer: { section },
}: AppState): number => section;

export const getScrollings = ({
  fullPageScrollReducer: { scrollings },
}: AppState): number[] => scrollings;

export const getCanScroll = ({
  fullPageScrollReducer: { canScroll },
}: AppState): boolean => canScroll;

export const getActiveAnimation = ({
  fullPageScrollReducer: { activeAnimation },
}: AppState): boolean => activeAnimation;

export const getLastSection = ({
  fullPageScrollReducer: { isLastSection },
}: AppState): boolean => isLastSection;
