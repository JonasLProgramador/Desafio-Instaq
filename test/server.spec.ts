import { ApolloServer } from '@apollo/server';
import { typeDefs } from '../src/graphql/index.js';
import { resolvers } from '../src/graphql/index.js';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

import { startStandaloneServer } from '@apollo/server/standalone';
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

before(async () => {
  await prisma.$connect();
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log('Server with the tests is running now!', url);
});

after(async () => {
  await prisma.$disconnect();
  server.stop();
  console.log('Server stops after the tests');
});