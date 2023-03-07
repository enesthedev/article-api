import { injectable } from 'inversify';
import { BaseMiddleware } from 'inversify-express-utils';
import * as express from 'express';
import { validationResult } from 'express-validator';

@injectable()
export class RequestValidatorMiddleware extends BaseMiddleware {
  public handler(req: express.Request, res: express.Response, next: express.NextFunction) {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
      return res.status(422).send({ errors: validationErrors.array() });
    }
    return next();
  }
}
