export const typeDefs = `#graphql
    type Game {
        id: ID, 
        title: String!,
        platform: [String!]!,
        reviews: [Review!]
    }
    type Review {
        id: ID,
        rating: Int!,
        content: String!,
        game: Game!,
        author: Author!
    }

    type Author {
        id: ID!,
        name: String!,
        verified: Boolean!,
        reviews: [Review!],
        games: [Game!]
    }
    type Query {
        reviews: [Review]
        review(id: ID!): Review
        games: [Game]
        game(id: ID!): Game
        authors: [Author]
        author(id: ID!): Author
    }
    type Mutation {
        deleteGame(id: ID!): [Game]
        addGame(game: GameInput!): Game
        updateGame(id: ID!, game: EditGame!): Game
    }

    input GameInput{
        title: String!,
        platform: [String!]!
    }

    input EditGame{
        title: String,
        platform: [String!]
    }
`;
// Add "!" at the end of the type if it is required field
// supported types in GraphQL - int, float, string, boolean, ID
