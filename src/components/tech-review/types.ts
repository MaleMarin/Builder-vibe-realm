export interface Author {
  name: string;
  avatar?: string;
}

export interface Article {
  id: string;
  title: string;
  description: string;
  image: string;
  category: string;
  date: string;
  author: Author;
  url: string;
}

export interface TopicSectionData {
  title: string;
  articles: Article[];
}
