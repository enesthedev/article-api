import express from 'express';

import {
  interfaces,
  controller,
  httpGet,
  request,
  response,
  BaseHttpController,
} from 'inversify-express-utils';

@controller('/')
export default class ExampleController extends BaseHttpController implements interfaces.Controller {
  @httpGet('/')
  public index(@request() req: express.Request, @response() res: express.Response) {
    return this.json({ message: 'test' });
  }
}
