const { ApolloServer, gql } = require("apollo-server");

// schema
const typeDefs = gql`
  type Query {
    greeting: String
  }
`;

// resolvers
const resolvers = {
  Query: {
    greeting: () => "Hello World",
  },
};

// apollo server
const server = new ApolloServer({ typeDefs, resolvers });
server
  .listen({
    port: 9000,
  })
  .then((serverInfo) => console.log(`server listening at: ${serverInfo.url}`));
