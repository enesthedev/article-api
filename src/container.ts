import 'reflect-metadata';

import '@application/controllers';

import { Container } from 'inversify';
import { ArticleRepository } from '@domain/article/ArticleRepository';
import { ArticleRepositoryImpl } from '@infrastructure/repository/ArticleRepositoryImpl';
import { TYPES } from '@project/types';
import { ArticleService } from './domain/article';
import { ArticleServiceImpl } from './application/services/ArticleServiceImpl';
import { PrismaClientProvider } from './infrastructure/database/prisma/PrismaClientProvider';

const container = new Container();

container.bind<ArticleRepository>(TYPES.ArticleRepository).to(ArticleRepositoryImpl);
container.bind<ArticleService>(TYPES.ArticleService).to(ArticleServiceImpl);

container.bind<PrismaClientProvider>(PrismaClientProvider).toSelf();
export default container;
