import  express  from "express";
import { helloSchema } from "./graphql/schemas/helloSchema";
import { graphqlHTTP } from "express-graphql";



const app = express()
app.use(
    "/graphql",
    graphqlHTTP({
      schema:helloSchema,
      graphiql:true,
    })
)

app.listen(7777,() : void => {
    console.log("Server is running at port 7777!")
})