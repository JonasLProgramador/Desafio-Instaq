import { userTypeDefs } from './user.typedef.js';
import { helloTypeDefs } from './hello.typedef.js';

export const typeDefs = `
${userTypeDefs}
${helloTypeDefs}
#assim centralizo todos os typedefs em um único lugar
`;
