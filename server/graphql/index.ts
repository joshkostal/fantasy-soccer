import { GraphQLServer } from "graphql-yoga";
import { resolvers } from "./resolvers";

const options = { port: 4000 };
const server = new GraphQLServer({ typeDefs, resolvers });
server.start(options, () =>
  console.log("Server is running on localhost:" + options.port)
);
