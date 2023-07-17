import { ElementsState, Element } from './animationOnScroll.state';
import { ElementsActions } from './animationOnScroll.actions';

const initialState: ElementsState = {
  elementsRefs: [],
};

const reducer = (
  state = initialState,
  action: { type: string; payload: Element },
): ElementsState => {
  switch (action.type) {
    case ElementsActions.ADD_ELEMENT:
      return {
        elementsRefs: [...state.elementsRefs, { ...action.payload }],
      };
    case ElementsActions.REMOVE_ELEMENTS:
      return {
        elementsRefs: [],
      };
    default:
      return state;
  }
};

export default reducer;
