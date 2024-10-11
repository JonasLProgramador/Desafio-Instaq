import { z } from 'zod';

 const createUserInputSchema = z.object({
  name: z.string().min(10, 'Nome tem que haver no minimo 10 letras'),
  email: z.string().email('Insira um email válido!`'),
  password: z
    .string()
    .min(6, 'A senha deve conter no mínimo 6 letras')
    .regex(
      /^(?=.*[a-zA-Z])(?=.*\d).+$/,
      'A senha deve conter no mínimo 1 letra e um numero',
    ),
  birthDate:z.string().optional()
});

 type CreateUserInputType = z.infer<typeof createUserInputSchema>;

 export {createUserInputSchema, type CreateUserInputType}