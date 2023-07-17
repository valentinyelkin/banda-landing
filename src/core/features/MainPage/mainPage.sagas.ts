import { all, takeEvery, fork, call, put } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import {
  SendFormDataFailed,
  SendFormDataSuccess,
  FormActions,
} from './mainPage.actions';
import EmailReq from '../../api/email-request';
import { Action } from '../../store/store';

function* watchSendFormRequest(): SagaIterator {
  yield takeEvery(FormActions.SEND_FORM_DATA, function* (action: Action) {
    try {
      yield call(EmailReq.SendData, action.payload);
      yield put(new SendFormDataSuccess('success'));
    } catch (e) {
      yield put(new SendFormDataFailed('failed'));
    }
  });
}

export default function* root(): SagaIterator {
  yield all([fork(watchSendFormRequest)]);
}
