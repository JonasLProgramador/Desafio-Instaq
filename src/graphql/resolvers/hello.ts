import { GraphQLString, type GraphQLFieldConfig } from "graphql";



export const hello:GraphQLFieldConfig<unknown,unknown> = {
    type:GraphQLString,
    resolve:() : string =>{
        return "Hello, World!"
    }
}