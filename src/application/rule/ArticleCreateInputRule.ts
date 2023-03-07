import { check, ValidationChain } from 'express-validator';

export const ArticleCreateInputRule: ValidationChain[] = [
  check('title')
    .notEmpty()
    .withMessage('Article title is required')
    .isString()
    .withMessage('Article title must be a String')
    .isLength({ max: 255 })
    .withMessage('Article title is not be greater than 255 chars'),
  check('content')
    .notEmpty()
    .withMessage('Article content is required')
    .isString()
    .withMessage('Article content must be a String'),
];
