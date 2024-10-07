export const typeDefs = `#graphql
  type User{
    id:ID
    name:String!
    email:String!
    description: String
  }

  type Query{
    Users:[User]!
    user(id: Int):User
  }
    input UserInput{
      name:String
      email:String
      description:String
    }
   type Mutation{
    criarUsuario(data:UserInput):User
   }



`;



