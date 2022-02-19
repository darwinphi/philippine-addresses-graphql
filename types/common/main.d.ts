type Region = {
  psgcCode: string;
  regionName: string;
  regionCode: string;
  numOfProvinces: number;
  numOfCities: number;
  numOfMunicipalities: number;
  numOfBrgys: number;
};

type Province = {
  provinceCode: string;
  provinceName: string;
  psgcCode: string;
  regionCode: string;
};

type City = {
  cityCode: string;
  cityName: string;
  provinceCode: string;
  psgcCode: string;
  regionCode: string;
};

type Barangay = {
  brgyCode: string;
  brgyName: string;
  cityCode: string;
  provinceCode: string;
  regionCode: string;
};

interface Address {
  regionCode: string;
  provinceCode?: string;
  cityCode?: string;
  brgyCode?: string;
}
