import { UnmarshalledArticle } from '@domain/article/Article';

export interface ArticleService {
  create(props: UnmarshalledArticle): Promise<UnmarshalledArticle | undefined>;
  all(): Promise<UnmarshalledArticle[] | undefined>;
}
