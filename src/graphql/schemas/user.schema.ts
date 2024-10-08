  export const typeDefs = `#graphql
    type User{
      id:ID
      name:String!
      email:String!
      password: String!
      birthDate: String

    }

    type Query{
      Users:[User]!
      user(id: Int):User
    }
      input UserInput{
        name:String!
        email:String!
        password:String!
        birthDate:String
      }
    type Mutation{
      createUser(data:UserInput):User
    }



  `;



