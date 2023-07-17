import { BlogPageState, BlogPostState } from './blogPage.state';
import { PostsActions } from './blogPage.actions';
import { BlogPostsCategories } from '../../lists/postsTabsTitles';
import { Action } from '../../store/store';

export const getInitialPostsByCategories = () => {
  const postsByCategories = {} as Record<BlogPostsCategories, BlogPostState[]>;
  Object.values(BlogPostsCategories).forEach((item) => {
    postsByCategories[item] = [];
  });
  return postsByCategories;
};

const initialState: BlogPageState = {
  posts: [],
  loadedPostsCount: 0,
  totalPostsCountByCategories: {} as Record<BlogPostsCategories, number>,
  postsByCategories: getInitialPostsByCategories(),
};

const reducer = (state = initialState, action: Action): BlogPageState => {
  switch (action.type) {
    case PostsActions.GET_LAST_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...action.payload],
      };
    case PostsActions.GET_LAST_POSTS_FAILED:
      return {
        ...state,
        posts: state.posts,
      };
    case PostsActions.GET_MORE_POSTS_SUCCESS:
      return {
        ...state,
        posts: [...state.posts, ...action.payload],
      };
    case PostsActions.GET_MORE_POSTS_FAILED:
      return {
        ...state,
      };
    case PostsActions.GET_LAST_POSTS_BY_CATEGORY:
      return {
        ...state,
        postsByCategories: { ...action.payload },
      };
    case PostsActions.GET_MORE_POSTS_BY_CATEGORY_SUCCESS:
      return {
        ...state,
        postsByCategories: {
          ...state.postsByCategories,
          [action.payload.category]: [
            ...state.postsByCategories[action.payload.category],
            ...action.payload.posts,
          ],
        },
      };
    case PostsActions.GET_MORE_POSTS_BY_CATEGORY_FAILED:
      return {
        ...state,
      };
    case PostsActions.GET_LOADED_POSTS_COUNT:
      return {
        ...state,
        loadedPostsCount: action.payload,
      };
    case PostsActions.GET_TOTAL_POSTS_COUNT_BY_CATEGORIES_SUCCESS:
      return {
        ...state,
        totalPostsCountByCategories: action.payload,
      };
    case PostsActions.GET_TOTAL_POSTS_COUNT_BY_CATEGORIES_FAILED:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
