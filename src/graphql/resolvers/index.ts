import { userResolver } from './resolver.user.js';

//centralização e modularição dos resolvers// 

export const resolvers = {
  Query: {
    ...userResolver.Query,
  },

  Mutation: {
    ...userResolver.Mutation,
  },
};
