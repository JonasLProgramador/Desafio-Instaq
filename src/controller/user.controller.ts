import type { UserService } from '../services/user.service.js';
import {
  type CreateUserInputType,
  createUserInputSchema,
} from '../graphql/schemas/index.js';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }
  createUser(params: CreateUserInputType) {
    try {
      const validateData = createUserInputSchema.parse(params);
      return this.userService.createUser(validateData);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw error;
    }
  }
}
