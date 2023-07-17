import { CareersPageState } from './careersPage.state';
import { CareersActions } from './careersPage.actions';

const initialState: CareersPageState = {
  vacancies: [],
};

const reducer = (state = initialState, action): CareersPageState => {
  switch (action.type) {
    case CareersActions.GET_CAREERS_SUCCESS:
      return {
        ...state,
        vacancies: action.payload.vacancies,
      };
    case CareersActions.GET_CAREERS_FAILED:
      return {
        ...state,
        vacancies: [],
      };
    default:
      return state;
  }
};

export default reducer;
