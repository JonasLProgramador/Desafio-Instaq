import { GraphQLSchema, GraphQLObjectType,  } from "graphql";
import { hello } from "../resolvers/hello";



 const queryType =new GraphQLObjectType({
    name:"Query",
    fields:{
        hello,
    }
 });

 export const helloSchema = new GraphQLSchema({
    query:queryType,
 });