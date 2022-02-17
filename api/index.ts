import { ApolloServer } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import http, { Server } from "http";
import express, { Express } from "express";
import cors from "cors";
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

const app: Express = express();
app.use(cors());
app.use(express.json());
const httpServer: Server = http.createServer(app);

const startApolloServer = async (app: Express, httpServer: Server) => {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [
      ApolloServerPluginLandingPageGraphQLPlayground(),
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
    introspection: true,
  });

  await server.start();
  server.applyMiddleware({ app });
};

startApolloServer(app, httpServer);

export default httpServer;
