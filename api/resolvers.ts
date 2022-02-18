import { regions, provinces, cities, barangays } from "./data";

interface IRegionCode {
  regionCode: string;
}

interface IProvinceCode {
  provinceCode: string;
}

interface IAddress {
  regionCode: string;
  provinceCode: string;
}

enum AddressCode {
  regionCode = "regionCode",
  provinceCode = "provinceCode",
}

const filterAddress = (
  addresses: IAddress[],
  code: string,
  key: AddressCode
) => {
  return addresses.filter(
    (addr: IAddress) => addr[key as keyof IAddress] === code
  );
};

export const resolvers = {
  Query: {
    regions: () => regions,
    provinces: () => provinces,
    barangays: () => barangays,
    cities: () => cities,
    provincesByRegion: (_: string, { regionCode }: IRegionCode) =>
      filterAddress(provinces, regionCode, AddressCode.regionCode),
    citiesByProvince: (_: string, { provinceCode }: IProvinceCode) =>
      filterAddress(cities, provinceCode, AddressCode.provinceCode),
  },
};
