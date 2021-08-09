import { GraphQLServer, Options } from "graphql-yoga";
import typeDefs from "./graphql/typedefs";
import resolvers from "./graphql/resolvers";
import cors from "cors";

const options: Options = { port: 4000 };
const server = new GraphQLServer({ typeDefs, resolvers });

server.use(cors());

server.start(options, () =>
  console.log("Server is running on localhost:" + options.port)
);
