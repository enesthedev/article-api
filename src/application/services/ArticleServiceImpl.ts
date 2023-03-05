import { inject, injectable } from 'inversify';
import { TYPES } from '@project/types';
import { ArticleRepository, ArticleService, IArticle } from '@domain/article';

@injectable()
export class ArticleServiceImpl implements ArticleService {
  @inject(TYPES.ArticleRepository) private _articleRepository: ArticleRepository;

  add(props: IArticle): void {
    this._articleRepository.findById(1);
  }
}
