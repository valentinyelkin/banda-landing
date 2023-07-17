import { AppState } from '../../store/store';

export const getAllPosts = ({ blogPageReducer: { posts } }: AppState) => posts;

export const getPostsByCategory = ({
  blogPageReducer: { postsByCategories },
}: AppState) => postsByCategories;

export const getPostsCountByCategories = ({
  blogPageReducer: { totalPostsCountByCategories },
}: AppState) => totalPostsCountByCategories;
