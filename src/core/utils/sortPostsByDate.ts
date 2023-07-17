import { BlogPostState } from '../features/BlogPage/blogPage.state';

export const sortByDate = (posts: BlogPostState[]) => {
  return [...posts].sort((post1, post2) => {
    return (
      new Date(post2.publishedAt).getTime() -
      new Date(post1.publishedAt).getTime()
    );
  });
};
