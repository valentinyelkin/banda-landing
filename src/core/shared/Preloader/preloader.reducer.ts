import { PreloaderState } from './preloader.state';

const initialState: PreloaderState = {
  startPreloader: true,
};

const reducer = (state = initialState, action): PreloaderState => {
  switch (action.type) {
    case 'SET_START':
      return {
        ...state,
        startPreloader: false,
      };
    default:
      return state;
  }
};

export default reducer;
