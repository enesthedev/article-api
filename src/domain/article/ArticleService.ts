import { IArticle } from '@domain/article';

export interface ArticleService {
  add(props: IArticle): void;
}
