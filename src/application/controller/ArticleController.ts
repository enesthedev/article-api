import express from 'express';

import {
  BaseHttpController,
  controller,
  httpPost,
  interfaces,
  request,
  response,
} from 'inversify-express-utils';

import { ArticleCreateInputRule } from '@application/rule/ArticleCreateInputRule';

import { inject } from 'inversify';
import { Article, ArticleService, UnmarshalledArticle } from '@domain/article';
import { TYPES } from '@project/types';
import { RequestValidatorMiddleware } from '@transportation/http/middleware/RequestValidatorMiddleware';

@controller('/article')
export default class ArticleController extends BaseHttpController implements interfaces.Controller {
  @inject(TYPES.ArticleService) articleService: ArticleService;

  @httpPost('/', ...ArticleCreateInputRule, RequestValidatorMiddleware)
  public async store(@request() req: express.Request, @response() res: express.Response) {
    this.articleService
      .create(Article.create(req.body))
      .then((article: UnmarshalledArticle) => res.json(article));

    // TODO: Prisma error catch statement
  }
}
