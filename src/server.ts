
import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { typeDefs } from './graphql/schemas/helloSchema.js';
import { helloResolver } from './graphql/resolvers/resolverHello.js';


const server = new ApolloServer({
  typeDefs,
  resolvers: helloResolver,
});

const startServer = async ( ) =>{
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`)
}

startServer();