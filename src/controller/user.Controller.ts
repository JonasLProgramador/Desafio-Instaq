import type { UserService } from "../services/user.Service.js";

export class UserController {
  private userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async createUser(name: string, email: string, description: string) {
    try {
      return await this.userService.createUser(name, email, description);
    } catch (error) {
      console.error('Erro ao criar usuário:', error);
      throw new Error('Erro ao criar usuário');
    }
  }
}
