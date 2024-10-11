import type { PrismaClient } from '@prisma/client';
import type { CreateUserInputType} from '../graphql/schemas/index.js'; 

export class UserService {
  private prisma: PrismaClient;

  constructor(prisma: PrismaClient) {
    this.prisma = prisma;
  }

  async createUser(params: CreateUserInputType) {
    const { name, email, password, birthDate} = params;

    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if(existingUser){
      throw new Error("Já existe um usuário com este email! ")
    }

    const newUser = await this.prisma.user.create({
      data: {
        name,
        email,
        password,
        birthDate:birthDate ? new Date(birthDate) : null
      },
    });
    return newUser;
  }
}
