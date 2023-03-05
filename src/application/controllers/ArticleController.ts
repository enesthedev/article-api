import express from 'express';

import {
  interfaces,
  controller,
  httpGet,
  request,
  response,
  BaseHttpController,
} from 'inversify-express-utils';
import { inject } from 'inversify';
import { ArticleService } from '@domain/article';
import { TYPES } from '@project/types';

@controller('/article')
export default class ArticleController extends BaseHttpController implements interfaces.Controller {
  @inject(TYPES.ArticleService) _articleService: ArticleService;

  @httpGet('/')
  public index(@request() req: express.Request, @response() res: express.Response) {
    this._articleService.add({ id: 1, title: 'Test', content: 'İçerik', active: false });
    return this.json({ message: 'test' });
  }
}
