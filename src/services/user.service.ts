import type { PrismaClient } from '@prisma/client';
import type { CreateUserInput} from '../types/types.js'; 

export class UserService {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createUser(params: CreateUserInput) { 
    const { name, email, password, birthDate } = params; 
    const newUser = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
        birthDate:new Date(birthDate)
      },
    });
    return newUser;
  }
}
