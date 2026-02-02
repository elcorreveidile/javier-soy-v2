export interface Article {
  id?: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: string;
  ogImage: string;
  published: boolean;
  authorId: string;
  createdAt: Date;
  updatedAt: Date;
  publishedDate?: string;
}

export interface CreateArticleInput {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  tags: string[];
  category: string;
  ogImage: string;
  publishedDate: string;
}
