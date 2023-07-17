import { all, fork } from '@redux-saga/core/effects';

// sagas
import mainPageSaga from '../features/MainPage/mainPage.sagas';
import blogPageSaga from '../features/BlogPage/blogPage.sagas';
import articlesSaga from '../features/Error/error.sagas';
import careersSaga from '../features/Careers/careersPage.sagas';
import realEstateSaga from '../features/RealEstate/realEstate.sagas';

function* rootSaga(): Generator {
  yield all([
    fork(mainPageSaga),
    fork(blogPageSaga),
    fork(articlesSaga),
    fork(careersSaga),
    fork(realEstateSaga),
  ]);
}

export default rootSaga;
