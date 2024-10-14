import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers, typeDefs } from './graphql/index.js';

export const createServer = () => {
  return new ApolloServer({
    typeDefs,
    resolvers,
  });
};

export const startServer = async () => {
  const server = createServer();
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
  return server;
};

startServer();
