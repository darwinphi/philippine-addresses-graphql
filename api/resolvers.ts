import { regions, provinces, cities } from "./data";

interface RegionCode {
  regionCode: string;
}

const provincesByRegion = (regionCode: string) => {
  const result = provinces.filter((province) => {
    return province.regionCode === regionCode;
  });
  return result;
};

export const resolvers = {
  Query: {
    regions: () => regions,
    provinces: () => provinces,
    cities: () => cities,
    provincesByRegion: (_: string, { regionCode }: RegionCode) =>
      provincesByRegion(regionCode),
  },
};
