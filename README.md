<!DOCTYPE html>
<html lang="pt-BR">
<body>
    <h1>🚀 User Management API</h1>
    <a href="README.md">🇧🇷 Português README-pt-br.md |</a> 
    <a href="README-En.md">🇺🇸 English README-en.md</a>
    <p>Este projeto é uma API de gerenciamento de usuários construído com Node.js, GraphQL e Prisma. A API irá realizar 
    um CRUD com usuários mas no momento só permite a criação de usuários com informações como nome, e-mail e descrição.</p>
    <h2>🛠 Tecnologias Utilizadas</h2>
    <ul>
        <li><strong>Node.js</strong>: Ambiente de execução JavaScript</li>
        <li><strong>GraphQL</strong>: Linguagem de consulta para APIs</li>
        <li><strong>Prisma</strong>: ORM (Object-Relational Mapping) para banco de dados</li>
        <li><strong>PostgreSQL</strong>: Sistema de gerenciamento de banco de dados relacional</li>
        <li><strong>dotenv</strong>: Utilizado para definir variaveis de ambiente</li>
        <li><strong>eslint e prettier</strong>: Formatador e analisador de código utilizado para manter um padrão de código consistente </li>
        <li><strong>typescript</strong>: Um superset do javascript, uma linguagem tipada, criando um código previsivel e robusto</li>
    </ul>
    <h2>📦 Instalação</h2>
    <ol>
        <li>Clone o repositório:
            <pre>git clone  https://github.com/JonasLProgramador/Desafio-Instaq.git
cd Desafio-Instaq</pre>
        </li>
        <li>Instale as dependências:
            <pre>npm install</pre>
        </li>
        <li>Crie um arquivo <code>.env</code> na raiz do projeto com a seguinte configuração:
            <pre>DATABASE_URL="postgresql://jonas:jonas1234@localhost:5432/localUserDb?schema=public"</pre>
        </li>
    </ol>
    <h2>🏗 Estrutura do Projeto</h2>
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
    <h3>🗃 Descrição das Pastas</h3>
    <ul>
        <li><strong>graphql/</strong>: Contém os schemas e resolvers GraphQL.</li>
        <li><strong>services/</strong>: Contém a lógica de negócios e interações com o banco de dados.</li>
        <li><strong>controller/</strong>: Controladores que gerenciam a lógica entre o serviço e o resolver.</li>
    </ul>
    <h2>📜 Esquema GraphQL</h2>
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
    <h2>🔧 Iniciando o Servidor</h2>
    <p>Para iniciar o servidor, execute o seguinte comando:</p>
    <pre>npm run dev</pre>
    <p>O servidor estará rodando em <strong>http://localhost:4000</strong>.</p>
    <h2>🎉 Como Usar</h2>
    <h3>Criar Usuário</h3>
    <p>Envie uma mutação para criar um novo usuário:</p>
    <pre>
mutation {
  criarUsuario(data: {
    name: "Jonas",
    email: "jonas@example.com",
    description: "Desenvolvedor"
  }) {
    id
    name
    email
    description
  }
}
    </pre>
    <h2>📄 Licença</h2>
    <p>Este projeto está licenciado sob a <a href="LICENSE">MIT License</a>.</p>
</body>
</html>
