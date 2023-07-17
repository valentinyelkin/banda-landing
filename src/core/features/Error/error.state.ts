export type Article = {
  created_at: string;
  excerpt: string;
  head: string;
  image: string;
  preview_image: string;
  slug: string;
  tags: string[];
  url: string;
};

export interface ArticlesState {
  articles: Article[];
  error: string;
}
