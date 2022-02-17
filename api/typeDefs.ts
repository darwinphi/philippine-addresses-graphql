import { gql } from "apollo-server-express";

export const typeDefs = gql`
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
    provincesByRegion(regionCode: String!): [Province]
  }
`;
