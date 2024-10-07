import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/schemas/user.schema.js';
import { userResolver } from './graphql/resolvers/resolver.user.js';

const server = new ApolloServer({
  typeDefs,
  resolvers: userResolver,
});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  });
  console.log(`🚀  Server ready at: ${url}`);
};

startServer();
