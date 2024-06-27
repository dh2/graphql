const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
type Product {
    name: String
    description: String
}

type Query {
    hello: String
    helloTwo: String
    product(id: ID!): Product
}`;

const mocks = {
    String: () => "Hello"
}

const resolvers = {
    Query: {
        helloTwo: () => "Bonjour deux"
    }
}
const server = new ApolloServer({
    typeDefs,
    mocks,
    resolvers,
    mockEntireSchema: false
});

server
    .listen()
    .then(({ url }) => {
        console.log(`Apollo Server ready at ${url}`);
    })