import { regions, provinces, cities, barangays } from "./data";

enum AddressCode {
  regionCode = "regionCode",
  provinceCode = "provinceCode",
  cityCode = "cityCode",
}

const filterAddress = (
  addresses: Address[],
  code: string,
  key: AddressCode
) => {
  return addresses.filter(
    (addr: Address) => addr[key as keyof Address] === code
  );
};

export const resolvers = {
  Query: {
    regions: () => regions,
    provinces: () => provinces,
    cities: () => cities,
    barangays: () => barangays,
    provincesByRegion: (_: string, { regionCode }: { regionCode: string }) =>
      filterAddress(provinces, regionCode, AddressCode.regionCode),
    citiesByProvince: (_: string, { provinceCode }: { provinceCode: string }) =>
      filterAddress(cities, provinceCode, AddressCode.provinceCode),
    barangaysByCity: (_: string, { cityCode }: { cityCode: string }) =>
      filterAddress(barangays, cityCode, AddressCode.cityCode),
    addressesByRegion: (_: string, { regionCode }: { regionCode: string }) => {
      return {
        cities: filterAddress(cities, regionCode, AddressCode.regionCode),
        provinces: filterAddress(provinces, regionCode, AddressCode.regionCode),
        barangays: filterAddress(barangays, regionCode, AddressCode.regionCode),
      };
    },
  },
};
