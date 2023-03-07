import { inject, injectable } from 'inversify';
import { TYPES } from '@project/types';
import { ArticleRepository, ArticleService, UnmarshalledArticle } from '@domain/article';

@injectable()
export class ArticleServiceImpl implements ArticleService {
  @inject(TYPES.ArticleRepository) private articleRepository: ArticleRepository;

  async create(article: UnmarshalledArticle): Promise<UnmarshalledArticle> {
    return this.articleRepository.create(article);
  }
}
