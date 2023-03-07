import { PrismaClient } from '@prisma/client';
import { injectable } from 'inversify';

@injectable()
export class PrismaClientProvider {
  private readonly prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient({ errorFormat: 'minimal' });
  }

  public getPrismaClient(): PrismaClient {
    return this.prisma;
  }
}
