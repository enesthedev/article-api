import 'reflect-metadata';

import '@application/controller';

import { Container } from 'inversify';
import { ArticleRepository } from '@domain/article/ArticleRepository';
import { ArticleRepositoryImpl } from '@infrastructure/repository/ArticleRepositoryImpl';
import { TYPES } from '@project/types';
import { ArticleService } from './domain/article';
import { ArticleServiceImpl } from './application/service/ArticleServiceImpl';
import { PrismaClientProvider } from './infrastructure/database/prisma/PrismaClientProvider';
import { RequestValidatorMiddleware } from './transportation/http/middleware/RequestValidatorMiddleware';

const container = new Container();

container.bind<ArticleRepository>(TYPES.ArticleRepository).to(ArticleRepositoryImpl);
container.bind<ArticleService>(TYPES.ArticleService).to(ArticleServiceImpl);

container.bind<PrismaClientProvider>(PrismaClientProvider).toSelf();

container.bind<RequestValidatorMiddleware>(RequestValidatorMiddleware).toSelf().inSingletonScope();
export default container;
