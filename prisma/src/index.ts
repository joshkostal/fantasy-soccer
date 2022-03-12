import { PrismaClient } from '../lib/client/index';

export interface Context {
  prisma: PrismaClient;
}
