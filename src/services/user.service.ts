import type { PrismaClient } from '@prisma/client';
import type { CreateUserInputType } from '../graphql/schemas/index.js';
import type { UserPasswordService } from './userPassword.service.js';

export class UserService {
  private readonly prisma: PrismaClient;
  private readonly userPasswordService: UserPasswordService;

  constructor(prisma: PrismaClient, userPasswordService: UserPasswordService) {
    this.prisma = prisma;
    this.userPasswordService = userPasswordService;
  }

  async createUser(params: CreateUserInputType) {
    const { name, email, password, birthDate } = params;

    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      throw new Error('Já existe um usuário com este email! ');
    }

    const hashedPassword =
      await this.userPasswordService.hashPassword(password);
    const newUser = await this.prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        birthDate: birthDate ? new Date(birthDate) : null,
      },
    });
    return newUser;
  }
}
