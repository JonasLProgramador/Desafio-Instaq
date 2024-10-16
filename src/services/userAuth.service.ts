import bcrypt from 'bcrypt';

export class UserPasswordService {
  
  async hashPassword(password: string): Promise<string> {
    const saltRounds = 10;
    try {
      const salt = await bcrypt.genSalt(saltRounds);
      const hash = await bcrypt.hash(password, salt);
      return hash;
    } catch (error) {
      console.error(error);
      throw new Error('Erro ao gerar hash de senha');
    }
  }
}
