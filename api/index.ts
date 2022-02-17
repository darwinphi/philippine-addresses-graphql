import { ApolloServer } from "@saeris/apollo-server-vercel";
import { regions, provinces, cities } from "./data";

const typeDefs = `
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

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: true,
  introspection: true,
});
export default server.createHandler();
