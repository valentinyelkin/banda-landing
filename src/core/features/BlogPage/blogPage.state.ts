import { BlogPostsCategories } from '../../lists/postsTabsTitles';

export interface BlogPageState {
  posts: BlogPostState[];
  postsByCategories: Record<BlogPostsCategories, BlogPostState[]>;
  loadedPostsCount: number;
  totalPostsCountByCategories: Record<BlogPostsCategories, number>;
}

export interface BlogPostState {
  id: string;
  head: string;
  excerpt: string;
  image: string;
  preview_image: string;
  created_at: string;
  slug: string;
  url: string;
  tags: {
    name: string;
  }[];
  category?: BlogPostsCategories;
  publishedAt: string;
}
