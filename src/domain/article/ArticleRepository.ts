import { UnmarshalledArticle } from '@domain/article/Article';

export interface ArticleRepository {
  deleteById(id: number): Promise<UnmarshalledArticle | undefined>;
  findById(id: number): Promise<UnmarshalledArticle | undefined>;
  updateById(id: number, props: UnmarshalledArticle): Promise<UnmarshalledArticle | undefined>;
  all(): Promise<UnmarshalledArticle | undefined>;
  create(props: UnmarshalledArticle): Promise<UnmarshalledArticle | undefined>;
}
