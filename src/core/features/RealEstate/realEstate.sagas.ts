import { SagaIterator } from '@redux-saga/types';
import {
  CategoriesActions,
  GetCategoriesFailed,
  GetCategoriesSuccess,
  GetRealEstateFailed,
  GetRealEstateSuccess,
  RealEstateActions,
  GetCategoriesByPageNameSuccess,
  GetCategoriesByPageNameFailed,
} from './realEstate.actions';
import {
  all,
  call,
  fork,
  put,
  take,
  takeEvery,
} from '@redux-saga/core/effects';
import RealEstateReq from '../../api/realEstate-request';
import CategoriesReq from '../../api/categories-request';
import { Action } from '../../store/store';

function* watchGetRealEstate(): SagaIterator {
  yield take(RealEstateActions.GET_REAL_ESTATE);

  try {
    const { data } = yield call(RealEstateReq.GetRealEstates);
    yield put(new GetRealEstateSuccess(data));
  } catch (e) {
    yield put(new GetRealEstateFailed());
  }
}

function* watchGetCategories(): SagaIterator {
  yield take(CategoriesActions.GET_CATEGORIES);

  try {
    const { data } = yield call(CategoriesReq.GetCategories);
    yield put(new GetCategoriesSuccess(data));
  } catch (e) {
    yield put(new GetCategoriesFailed());
  }
}

function* categoriesHandler(action: Action) {
  try {
    const { data } = yield call(
      CategoriesReq.GetCategoriesByPageName,
      action.payload,
    );
    yield put(new GetCategoriesByPageNameSuccess({ [action.payload]: data }));
  } catch (e) {
    yield put(new GetCategoriesByPageNameFailed());
  }
}

function* watchGetCategoriesByPageName(): SagaIterator {
  yield takeEvery(
    CategoriesActions.GET_CATEGORIES_BY_PAGE_NAME,
    categoriesHandler,
  );
}

export default function* root(): SagaIterator {
  yield all([
    fork(watchGetRealEstate),
    fork(watchGetCategories),
    fork(watchGetCategoriesByPageName),
  ]);
}
