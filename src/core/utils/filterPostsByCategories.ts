import { BlogPostState } from '../features/BlogPage/blogPage.state';
import { BlogPostsCategories } from '../lists/postsTabsTitles';

export const filterPostsByCategories = (posts?: BlogPostState[]) => {
  const postsByCategories = {} as Record<BlogPostsCategories, BlogPostState[]>;
  Object.values(BlogPostsCategories).forEach((item) => {
    postsByCategories[item] = posts
      ? posts.filter((post) => post.category === item)
      : [];
  });
  return postsByCategories;
};
