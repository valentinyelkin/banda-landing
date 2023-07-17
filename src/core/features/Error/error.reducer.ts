import { ArticlesState } from './error.state';
import * as acts from './error.actions';

const initialState: ArticlesState = {
  articles: [],
  error: '',
};

const reducer = (state = initialState, action): ArticlesState => {
  switch (action.type) {
    case acts.ErrorActions.SAVE_ARTICLES:
      return {
        error: '',
        articles: [...action.articles],
      };
    case acts.ErrorActions.SET_ARTICLES_ERROR:
      return {
        error: action.payload,
        articles: [],
      };
    default:
      return state;
  }
};

export default reducer;
