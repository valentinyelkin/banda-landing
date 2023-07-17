import {
  all,
  fork,
  call,
  put,
  take,
  select,
  takeEvery,
  takeLatest,
} from '@redux-saga/core/effects';
import { SagaIterator } from '@redux-saga/types';
import {
  PostsActions,
  GetLastPostsSuccess,
  GetLastPostsFailed,
  GetMorePostsSuccess,
  GetMorePostsFailed,
  GetLoadedPostsCount,
  GetTotalPostsCountByCategoriesFailed,
  GetTotalPostsCountByCategoriesSuccess,
  GetMorePostsByCategorySuccess,
  GetMorePostsByCategoryFailed,
  GetLastPostsByCategory,
  GetMorePostsByCategory,
} from './blogPage.actions';
import PostsReq from '../../api/posts-request';
import { Action } from '../../store/store';
import { filterPostsByCategories } from '../../utils/filterPostsByCategories';
import { BlogPostState } from './blogPage.state';
import { BlogPostsCategories } from '../../lists/postsTabsTitles';

function* handleGetLastPosts(action: Action) {
  const { payload } = action;
  try {
    const { data } = yield call(PostsReq.GetLastPosts, payload);
    if (!data.length) return;
    yield put(new GetLastPostsSuccess(data));
    yield put(new GetLoadedPostsCount(data.length));
    yield put(new GetLastPostsByCategory(filterPostsByCategories(data)));
  } catch (e) {
    yield put(new GetLastPostsFailed());
  }
}

function* watchGetLastPosts(): SagaIterator {
  yield takeLatest(PostsActions.GET_LAST_POSTS, handleGetLastPosts);
}

function* handleGetMorePosts(action: Action) {
  const loadedPostsCount = yield select(
    (state) => state.blogPageReducer.loadedPostsCount,
  );
  const postsInStore = yield select((state) => state.blogPageReducer.posts);
  const postsInStoreIds = new Set(
    postsInStore.map((item: BlogPostState) => item.id),
  );

  try {
    const { data } = yield call(
      PostsReq.GetMorePosts,
      action.payload,
      loadedPostsCount,
    );
    if (!data.length) return;

    const uniquePosts = data.filter(
      (item: BlogPostState) => !postsInStoreIds.has(item.id),
    );

    yield put(new GetLoadedPostsCount(loadedPostsCount + data.length));

    if (!uniquePosts.length) return;
    yield put(new GetMorePostsSuccess(uniquePosts));

    const filteredData = filterPostsByCategories(uniquePosts);

    for (const category in filteredData) {
      if (!filteredData[category].length) continue;
      yield put(
        new GetMorePostsByCategorySuccess({
          category: category as BlogPostsCategories,
          posts: filteredData[category],
        }),
      );
    }
  } catch (e) {
    yield put(new GetMorePostsFailed());
  }
}

function* watchGetMorePosts(): SagaIterator {
  yield takeEvery(PostsActions.GET_MORE_POSTS, handleGetMorePosts);
}

function* handleGetMorePostsByCategory(action: GetMorePostsByCategory) {
  const postsInStoreForCategory = yield select(
    (state) => state.blogPageReducer.postsByCategories[action.payload.category],
  );
  const { category, postsNumber } = action.payload;

  try {
    const { data } = yield call(
      PostsReq.GetMorePostsByCategory,
      postsNumber,
      postsInStoreForCategory.length,
      category,
    );

    if (!data.length) return;

    yield put(
      new GetMorePostsByCategorySuccess({
        category,
        posts: data,
      }),
    );
    yield put(new GetMorePostsSuccess(data));
  } catch (e) {
    yield put(new GetMorePostsByCategoryFailed());
  }
}

function* watchGetMorePostsByCategory(): SagaIterator {
  yield takeEvery(
    PostsActions.GET_MORE_POSTS_BY_CATEGORY,
    handleGetMorePostsByCategory,
  );
}

function* watchGetTotalPostsCountByCategories(): SagaIterator {
  yield take(PostsActions.GET_TOTAL_POSTS_COUNT_BY_CATEGORIES);

  try {
    const { data } = yield call(PostsReq.GetTotalPostsCountByCategories);
    yield put(new GetTotalPostsCountByCategoriesSuccess(data));
  } catch (e) {
    yield put(new GetTotalPostsCountByCategoriesFailed());
  }
}

export default function* root(): SagaIterator {
  yield all([
    fork(watchGetLastPosts),
    fork(watchGetMorePosts),
    fork(watchGetTotalPostsCountByCategories),
    fork(watchGetMorePostsByCategory),
  ]);
}
