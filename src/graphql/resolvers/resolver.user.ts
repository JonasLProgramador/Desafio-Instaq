import { PrismaClient, type User } from '@prisma/client';
import { UserController } from '../../controller/user.controller.js';
import { UserService } from '../../services/user.service.js';
import type { CreateUserInputType } from '../schemas/user.schema.js';
import { UserPasswordService } from '../../services/userAuth.service.js';

const prisma = new PrismaClient();
const userPasswordService = new UserPasswordService()
const userService = new UserService(prisma,userPasswordService);
const userController = new UserController(userService);

export const userResolver = {
  Query: {
    Users: (): string => {
      return 'nada';
    },
  },

  Mutation: {
    createUser: async (
      _: unknown,
      { data }: { data: CreateUserInputType },
    ): Promise<User> => {
        const newUser = await userController.createUser(data);
        return newUser;
      }
    },
  };
