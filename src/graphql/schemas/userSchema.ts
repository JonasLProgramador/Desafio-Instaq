export const typeDefs = `#graphql
  type Users {
    name:String
    id:ID
    email:String
  }

  type User{
    name:String,
    id:ID,
    email:String
  }

  type Query{
    Users:[Users]!
    user:User
  }
 
`;