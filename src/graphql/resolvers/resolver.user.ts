import { PrismaClient } from '@prisma/client';
import { UserController } from '../../controller/user.controller.js';
import { UserService } from '../../services/user.service.js';
import type { CreateUserInput} from '../../types/types.js';

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
        data: CreateUserInput;
      },
    ): Promise<CreateUserInput> => {
      const newUser = await userController.createUser(data);
      console.log(newUser);
      return newUser;
    },
  },
};
