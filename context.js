import pkg from '@prisma/client';

const { PrismaClient } = pkg;

const prisma = new PrismaClient()


export const context = {
  prisma: prisma,
}