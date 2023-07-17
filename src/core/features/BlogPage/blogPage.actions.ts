import { BlogPostsCategories } from '../../lists/postsTabsTitles';
import { Action } from '../../store/store';
import { BlogPostState } from './blogPage.state';

export enum PostsActions {
  GET_LAST_POSTS = '[BlogPage] get last posts',
  GET_LAST_POSTS_SUCCESS = '[BlogPage] save last posts to the store',
  GET_LAST_POSTS_FAILED = '[BlogPage] get last posts failed',
  GET_MORE_POSTS = '[BlogPage] get more posts',
  GET_MORE_POSTS_SUCCESS = '[BlogPage] save more posts to the store',
  GET_MORE_POSTS_FAILED = '[BlogPage] get more posts failed',
  GET_LAST_POSTS_BY_CATEGORY = '[BlogPage] save last posts by category to the store',
  GET_MORE_POSTS_BY_CATEGORY = '[BlogPage] get more posts by category',
  GET_MORE_POSTS_BY_CATEGORY_SUCCESS = '[BlogPage] save more posts by category to the store',
  GET_MORE_POSTS_BY_CATEGORY_FAILED = '[BlogPage] get more posts by category failed',
  GET_LOADED_POSTS_COUNT = '[BlogPage] save loaded posts count to the store',
  GET_TOTAL_POSTS_COUNT_BY_CATEGORIES = '[BlogPage] get total posts count by categories',
  GET_TOTAL_POSTS_COUNT_BY_CATEGORIES_SUCCESS = '[BlogPage] save total posts count by categories to the store',
  GET_TOTAL_POSTS_COUNT_BY_CATEGORIES_FAILED = '[BlogPage] get total posts count by categories failed',
}

export class GetLastPosts extends Action {
  readonly type = PostsActions.GET_LAST_POSTS;

  constructor(public payload: number) {
    super();
  }
}

export class GetLastPostsSuccess extends Action {
  readonly type = PostsActions.GET_LAST_POSTS_SUCCESS;

  constructor(public payload: BlogPostState[]) {
    super();
  }
}

export class GetLastPostsFailed extends Action {
  readonly type = PostsActions.GET_LAST_POSTS_FAILED;
}

export class GetMorePosts extends Action {
  readonly type = PostsActions.GET_MORE_POSTS;

  constructor(public payload: number) {
    super();
  }
}

export class GetMorePostsSuccess extends Action {
  readonly type = PostsActions.GET_MORE_POSTS_SUCCESS;

  constructor(public payload: BlogPostState[]) {
    super();
  }
}

export class GetMorePostsFailed extends Action {
  readonly type = PostsActions.GET_MORE_POSTS_FAILED;
}

export class GetLastPostsByCategory extends Action {
  readonly type = PostsActions.GET_LAST_POSTS_BY_CATEGORY;

  constructor(public payload: Record<BlogPostsCategories, BlogPostState[]>) {
    super();
  }
}

export class GetMorePostsByCategory extends Action {
  readonly type = PostsActions.GET_MORE_POSTS_BY_CATEGORY;

  constructor(
    public payload: { postsNumber: number; category: BlogPostsCategories },
  ) {
    super();
  }
}

export class GetMorePostsByCategorySuccess extends Action {
  readonly type = PostsActions.GET_MORE_POSTS_BY_CATEGORY_SUCCESS;

  constructor(
    public payload: { category: BlogPostsCategories; posts: BlogPostState[] },
  ) {
    super();
  }
}

export class GetMorePostsByCategoryFailed extends Action {
  readonly type = PostsActions.GET_MORE_POSTS_BY_CATEGORY_FAILED;
}

export class GetLoadedPostsCount extends Action {
  readonly type = PostsActions.GET_LOADED_POSTS_COUNT;

  constructor(public payload: number) {
    super();
  }
}

export class GetTotalPostsByCategoriesCount extends Action {
  readonly type = PostsActions.GET_TOTAL_POSTS_COUNT_BY_CATEGORIES;
}

export class GetTotalPostsCountByCategoriesSuccess extends Action {
  readonly type = PostsActions.GET_TOTAL_POSTS_COUNT_BY_CATEGORIES_SUCCESS;

  constructor(public payload: Record<BlogPostsCategories, number>) {
    super();
  }
}
export class GetTotalPostsCountByCategoriesFailed extends Action {
  readonly type = PostsActions.GET_TOTAL_POSTS_COUNT_BY_CATEGORIES_FAILED;
}
