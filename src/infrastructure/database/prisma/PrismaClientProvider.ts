import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';

@injectable()
export class PrismaClientProvider {
  private static readonly client: PrismaClient = new PrismaClient({ errorFormat: 'minimal' });

  public getPrismaClient(): PrismaClient {
    return PrismaClientProvider.client;
  }
}
