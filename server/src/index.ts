import { GraphQLServer, Options } from "graphql-yoga";
import typeDefs from "./graphql/typedefs";
import resolvers from "./graphql/resolvers";
import cors from "cors";
import { PrismaClient } from "@josh-kostal/prisma/lib/client";

const getConnectionString = (): string => {
  const config = require('../local_db.json');
  return config['connectionString'];
};

const options: Options = { port: 4000 };
const prisma = new PrismaClient({
  datasources: {
    db: {
      url: getConnectionString(),
    },
  },
});

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: (req) => ({
    ...req,
    prisma,
  }),
});

server.use(cors());

server.start(options, () =>
  console.log("Server is running on localhost:" + options.port)
);
