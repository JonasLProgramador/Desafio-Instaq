import type { UserService } from '../services/user.service.js';
import  type { CreateUserInput } from '../types/types.js';

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async createUser(params: CreateUserInput) {
    try {
      const { name, email} = params;
      if (!name || !email) {
        throw new Error('Name and email are obligatory!');
      }
      return await this.userService.createUser(params);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error('Erro ao criar usuário');
    }
  }
}
