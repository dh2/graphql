const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
type Image {
    url: String
    description: String
    thumbnailUrl(width: Int, height: Int): String
}

enum ProductDescriptionFormat {
    TEXT
    HTML
}

enum Locales {
    EN
    FR
    DE
}

type RecommendedProductEdge {
    node: Product!
    boughtTogetherPercentage: Float
}

type RecommendedProductConnection {
    edges: [RecommendedProductEdge]
    pageInfo: PageInfo!
}

type PaginationEntry {
    cursor: ID!
}

type PageInfo {
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: ID!
    endCursor: ID!
}

type ReccommendedProductConnectionPageInfo {
    hasNextPages(amount: Int!): [PaginationEntry]!
    hasPreviousPages(amount: Int!): [PaginationEntry]!
    hasNextPage: Boolean!
    hasPreviousPage: Boolean!
    startCursor: ID!
    endCursor: ID!
}

type Product {
    name: String
    description(format: ProductDescriptionFormat = TEXT, locale: Locales = EN): String
    recommendedProducts(first: Int, after: ID, last: Int, before: ID): RecommendedProductConnection
    imageUrl: String @deprecated(reason: "Use \`image{ url}\` instead")
    image: Image
}

type Query {
    hello: String
    helloTwo: String
    productById(id: ID!): Product
    productBySlug(slug: String!): Product
}`;

const mocks = {
    String: () => "Hello",
    Product: () =>( {
        imageUrl: () => null
    })
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