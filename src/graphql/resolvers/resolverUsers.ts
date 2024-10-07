import { PrismaClient } from '@prisma/client';
import { UserController } from '../../controller/user.Controller.js';
import { UserService } from '../../services/user.Service.js';

const prisma = new PrismaClient();
const userService = new UserService(prisma);
const userController = new UserController(userService);

export const userResolver = {
  Query: {
    Users: (): string => {
      return 'nada';
    },
  },

  Mutation: {
    criarUsuario: async (
      _: unknown,
      {
        data,
      }: {
        data: {
          name: string,
          email: string,
          description: string | "",
        };
      },
    ): Promise<typeof data> => {
      const { name, email, description } = data;
      const newUser = await userController.createUser(name, email, description );
      console.log(newUser);
      return newUser;
    },
  },
};
