import { AppState } from '../../store/store';
import { Element } from './animationOnScroll.state';

export const getElements = ({
  animationOnScrollReducer: { elementsRefs },
}: AppState): Element[] => elementsRefs;
