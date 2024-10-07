import type { PrismaClient } from '@prisma/client';

export class UserService {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createUser(
    name: string,
    email: string,
    description: string | null,
  ) {
    if (!name || !email) { 
      throw new Error('Name and email are obligatory!');
    }

    const newUser = await this.prisma.user.create({
      data: {
        name,
        email,
        description: description || ""
      }
    });
    return newUser;
  }
}
