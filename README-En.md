<!DOCTYPE html>
<html lang="en">
<body #readme>
    <h1>🚀 User Management API</h1>
    <p>This project is a user management API built with Node.js, GraphQL, and Prisma. The API will perform CRUD operations with users but currently only allows creating users with information such as name, email, and description.</p>
    <h2>🛠 Technologies Used</h2>
    <ul>
        <li><strong>Node.js</strong>: JavaScript runtime environment</li>
        <li><strong>GraphQL</strong>: Query language for APIs</li>
        <li><strong>Prisma</strong>: ORM (Object-Relational Mapping) for databases</li>
        <li><strong>PostgreSQL</strong>: Relational database management system</li>
        <li><strong>dotenv</strong>: Used to define environment variables</li>
        <li><strong>eslint and prettier</strong>: Code formatter and linter used to maintain consistent code style</li>
        <li><strong>TypeScript</strong>: A superset of JavaScript, a typed language creating predictable and robust code</li>
    </ul>
    <h2>📦 Installation</h2>
    <ol>
        <li>Clone the repository:
            <pre>git clone https://github.com/JonasLProgramador/Desafio-Instaq.git
cd Desafio-Instaq</pre>
        </li>
        <li>Install the dependencies:
            <pre>npm install</pre>
        </li>
        <li>Create a <code>.env</code> file in the project root with the following configuration:
            <pre>DATABASE_URL="postgresql://jonas:jonas1234@localhost:5432/localUserDb?schema=public"</pre>
        </li>
    </ol>
    <h2>🏗 Project Structure</h2>
    <pre>
project-folder/
│__ src/
    ├── graphql/
    │   ├── resolvers/
    │   └── schemas/
    ├── services/
    ├── controller/
├── .env
└── server.ts
    </pre>
    <h3>🗃 Folder Description</h3>
    <ul>
        <li><strong>graphql/</strong>: Contains GraphQL schemas and resolvers.</li>
        <li><strong>services/</strong>: Contains business logic and database interactions.</li>
        <li><strong>controller/</strong>: Controllers that manage logic between the service and the resolver.</li>
    </ul>
    <h2>📜 GraphQL Schema</h2>
    <pre>
type User {
  id: ID
  name: String!
  email: String!
  description: String
}

type Query {
  Users: [User]!
  user(id: Int): User
}

input UserInput {
  name: String
  email: String
  description: String
}

type Mutation {
  criarUsuario(data: UserInput): User
}
    </pre>
    <h2>🔧 Starting the Server</h2>
    <p>To start the server, run the following command:</p>
    <pre>npm run dev</pre>
    <p>The server will be running at <strong>http://localhost:4000</strong>.</p>
    <h2>🎉 How to Use</h2>
    <h3>Create User</h3>
    <p>Send a mutation to create a new user:</p>
    <pre>
mutation {
  criarUsuario(data: {
    name: "Jonas",
    email: "jonas@example.com",
    description: "Developer"
  }) {
    id
    name
    email
    description
  }
}
    </pre>
    <h2>📄 License</h2>
    <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
</body>
</html>
