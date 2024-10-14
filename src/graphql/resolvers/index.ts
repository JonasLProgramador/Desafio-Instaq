import { userResolver } from './resolver.user.js';
import { helloResolver } from './resolver.hello.js';

//centralização e modularição dos resolvers// 

export const resolvers = {
  Query: {
    ...helloResolver.Query,
  },

  Mutation: {
    ...userResolver.Mutation,
  },
};
