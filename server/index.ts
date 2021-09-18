import { GraphQLServer, Options } from "graphql-yoga";
import typeDefs from "./src/graphql/typedefs";
import resolvers from "./src/graphql/resolvers";
import cors from "cors";
import { Prisma } from "prisma";

const options: Options = { port: 4000 };
const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: req => ({
    ...req,
    prisma: new Prisma({
      debug: true,
      endpoint: ''
    })
  })
});

server.use(cors());

server.start(options, () =>
  console.log("Server is running on localhost:" + options.port)
);
