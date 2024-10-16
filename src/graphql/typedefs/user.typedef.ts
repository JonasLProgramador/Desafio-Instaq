export const userTypeDefs = `#graphql
    type User{
      id:ID!
      name:String!
      email:String!
      birthDate: String
    }   
      input UserInput{
        name:String!
        email:String!
        password:String!  
        birthDate:String
      }
      type Query{
        Users:[User]!
        user(id: Int!):User
      
      }
    type Mutation{
      createUser(data:UserInput):User
    }`;
