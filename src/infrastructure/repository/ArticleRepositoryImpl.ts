import { ArticleRepository } from '@domain/article/ArticleRepository';
import { inject, injectable } from 'inversify';
import { PrismaClientProvider } from '@infrastructure/database/prisma/PrismaClientProvider';
import { PrismaClient } from '@prisma/client';
import { Article, UnmarshalledArticle } from '@domain/article';

@injectable()
export class ArticleRepositoryImpl implements ArticleRepository {
  private prisma: PrismaClient;

  constructor(@inject(PrismaClientProvider) private readonly prismaProvider: PrismaClientProvider) {
    this.prisma = prismaProvider.getPrismaClient();
  }

  deleteById(id: number): Promise<UnmarshalledArticle | undefined> {
    return Promise.resolve(undefined);
  }

  findById(id: number): Promise<UnmarshalledArticle | undefined> {
    console.log(id);
    return Promise.resolve(undefined);
  }

  updateById(id: number, props: UnmarshalledArticle): Promise<UnmarshalledArticle | undefined> {
    return Promise.resolve(undefined);
  }

  async create(article: UnmarshalledArticle): Promise<UnmarshalledArticle | undefined> {
    try {
      return await this.prisma.article.create({
        data: Article.unmarshal(article),
      });
    } catch (e) {
      return Promise.reject(e);
    }
  }

  all(): Promise<UnmarshalledArticle[] | undefined> {
    return this.prisma.article.findMany();
  }
}
