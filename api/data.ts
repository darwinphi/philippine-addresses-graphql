import fs from "fs";
import path from "path";
import provinces from "./data/provinces";
import regions from "./data/regions";

interface City {
  cityCode: string;
  cityName: string;
  provinceCode: string;
  psgcCode: string;
  regionCode: string;
}

interface Barangay {
  brgyCode: string;
  brgyName: string;
  cityCode: string;
  provinceCode: string;
  regionCode: string;
}

const getData = (filename: string) => {
  const jsonPath = path.join(__dirname, "data", filename);
  const result = fs.readFileSync(jsonPath, "utf-8");
  return JSON.parse(result);
};

const barangays: Barangay[] = getData("barangays.json");
const cities: City[] = getData("cities.json");

export { provinces, regions, cities, barangays };
