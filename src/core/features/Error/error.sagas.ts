import { all, take, fork, call, put } from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import PostRequest from '../../api/posts-request';
import * as acts from './error.actions';

function* getLatestArticles(): SagaIterator {
  const { numberOfArticles } = yield take(
    acts.ErrorActions.GET_LATEST_ARTICLES,
  );

  try {
    const { data } = yield call(PostRequest.GetLastPosts, numberOfArticles);
    yield put(new acts.SaveArticles(data));
  } catch (e) {
    yield put(new acts.SetArticlesError(e.message));
  }
}

export default function* root(): SagaIterator {
  yield all([fork(getLatestArticles)]);
}
