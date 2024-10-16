import { PrismaClient, type User } from '@prisma/client';
import { UserController } from '../../controller/user.controller.js';
import { UserService } from '../../services/user.service.js';
import type { CreateUserInputType } from '../schemas/user.schema.js';

const prisma = new PrismaClient();
const userService = new UserService(prisma);
const userController = new UserController(userService);

export const userResolver = {
  Mutation: {
    createUser: async (
      _: unknown,
      { data }: { data: CreateUserInputType },
    ): Promise<User> => {
      return  userController.createUser(data);
    },
  },
};
