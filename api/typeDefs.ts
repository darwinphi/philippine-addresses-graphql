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

  type Barangay {
    brgyCode: String
    brgyName: String
    cityCode: String
    provinceCode: String
    regionCode: String
  }

  type Addresses {
    cities: [City]
    provinces: [Province]
    barangays: [Barangay]
  }

  type Query {
    regions: [Region]
    provinces: [Province]
    cities: [City]
    barangays: [Barangay]
    provincesByRegion(regionCode: String!): [Province]
    citiesByProvince(provinceCode: String!): [City]
    barangaysByCity(cityCode: String!): [Barangay]
    addressesByRegion(regionCode: String!): Addresses
  }
`;
