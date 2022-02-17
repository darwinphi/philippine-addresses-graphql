import { regions, provinces, cities } from "./data";
import { ApolloServer, gql } from "apollo-server-express";
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageGraphQLPlayground,
} from "apollo-server-core";
import http, { Server } from "http";
import express, { Express } from "express";
import cors from "cors";

const app: Express = express();
app.use(cors());
app.use(express.json());
const httpServer: Server = http.createServer(app);

const typeDefs = gql`
  type Region {
    psgcCode: String
    regionName: String
    regionCode: String
    numOfProvinces: Int
    numOfMunicipalities: Int
    numOfBrgys: Int
  }

  type Province {
    provinceCode: String
    provinceName: String
    psgcCode: String
    regionCode: String
  }

  type City {
    cityCode: String
    cityName: String
    provinceCode: String
    psgcCode: String
    regionCode: String
  }

  type Query {
    regions: [Region]
    provinces: [Province]
    cities: [City]
  }
`;

const resolvers = {
  Query: {
    regions: () => regions,
    provinces: () => provinces,
    cities: () => cities,
  },
};

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
