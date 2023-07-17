import { FullPageScrollState } from './fullPageScroll.state';

const initialState: FullPageScrollState = {
  section: 0,
  scrollings: [],
  activeAnimation: false,
  canScroll: true,
  isLastSection: false,
};

const reducer = (state = initialState, action): FullPageScrollState => {
  switch (action.type) {
    case 'CHANGE_SECTION':
      return {
        ...state,
        section: action.payload,
      };
    case 'UPDATE_SCROLLINGS':
      return {
        ...state,
        scrollings: [...action.payload],
      };
    case 'UPDATE_ACTIVE_ANIMATION':
      return {
        ...state,
        activeAnimation: action.payload,
      };
    case 'UPDATE_CAN_SCROLL':
      return {
        ...state,
        canScroll: action.payload,
      };
    case 'UPDATE_LAST_SECTION':
      return {
        ...state,
        isLastSection: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
