import { ArticleRepository } from '@domain/article/ArticleRepository';
import { IArticle } from '@domain/article/Article';
import { inject, injectable } from 'inversify';
import { TYPES } from '@project/types';
import { PrismaClientProvider } from '@infrastructure/database/prisma/PrismaClientProvider';
import { PrismaClient } from '@prisma/client';

@injectable()
export class ArticleRepositoryImpl implements ArticleRepository {
  private _prisma: PrismaClient;

  constructor(@inject(PrismaClientProvider) private readonly prismaProvider: PrismaClientProvider) {
    this._prisma = prismaProvider.getPrismaClient();
  }

  deleteById(id: number): Promise<IArticle | undefined> {
    return Promise.resolve(undefined);
  }

  findById(id: number): Promise<IArticle | undefined> {
    console.log(id);
    return Promise.resolve(undefined);
  }

  updateById(id: number, props: IArticle): Promise<IArticle | undefined> {
    return Promise.resolve(undefined);
  }

  async create(props: IArticle): Promise<IArticle | undefined> {
    const article = await this._prisma.article.create({
      data: props,
    });
    return Promise.resolve(undefined);
  }
}
