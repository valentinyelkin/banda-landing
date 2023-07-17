import { all, fork, call, put, take } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import {
  GetCareersSuccess,
  GetCareersFailed,
  CareersActions,
} from './careersPage.actions';
import CareersReq from '../../api/careers-request';

function* watchGetVacancies(): SagaIterator {
  yield take(CareersActions.GET_CAREERS);

  try {
    const { data } = yield call(CareersReq.GetCareers);
    yield put(
      new GetCareersSuccess({
        vacancies: data,
      }),
    );
  } catch (e) {
    yield put(new GetCareersFailed());
  }
}

export default function* root(): SagaIterator {
  yield all([fork(watchGetVacancies)]);
}
