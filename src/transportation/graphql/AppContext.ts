import { BaseContext } from '@apollo/server';
import { ArticleService } from '@domain/article';

export interface AppContext extends BaseContext {
  articleService: ArticleService;
}
