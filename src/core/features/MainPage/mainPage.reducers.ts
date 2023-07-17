import { ShowFormState } from './mainPage.state';
import { FormActions } from './mainPage.actions';

const initialState: ShowFormState = {
  formStatus: '',
};

const reducer = (state = initialState, action): ShowFormState => {
  switch (action.type) {
    case FormActions.SEND_SUCCESS:
      return {
        formStatus: 'success',
      };
    case FormActions.SEND_FAILED:
      return {
        formStatus: action.payload,
      };
    case FormActions.CLEAR_STATUS:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
