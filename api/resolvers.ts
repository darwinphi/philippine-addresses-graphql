import { regions, provinces, cities, barangays } from "./data";

interface IRegionCode {
  regionCode: string;
}

interface IProvinceCode {
  provinceCode: string;
}

interface ICityCode {
  cityCode: string;
}

interface IAddress {
  regionCode: string;
  provinceCode?: string;
  cityCode?: string;
}

enum AddressCode {
  regionCode = "regionCode",
  provinceCode = "provinceCode",
  cityCode = "cityCode",
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
    cities: () => cities,
    barangays: () => barangays,
    provincesByRegion: (_: string, { regionCode }: IRegionCode) =>
      filterAddress(provinces, regionCode, AddressCode.regionCode),
    citiesByProvince: (_: string, { provinceCode }: IProvinceCode) =>
      filterAddress(cities, provinceCode, AddressCode.provinceCode),
    barangaysByCity: (_: string, { cityCode }: ICityCode) =>
      filterAddress(barangays, cityCode, AddressCode.cityCode),
  },
};
