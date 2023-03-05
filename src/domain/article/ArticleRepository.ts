import { IArticle } from '@domain/article/Article';

export interface ArticleRepository {
  deleteById(id: number): Promise<IArticle | undefined>;
  findById(id: number): Promise<IArticle | undefined>;
  updateById(id: number, props: IArticle): Promise<IArticle | undefined>;
  create(props: IArticle): Promise<IArticle | undefined>;
}
