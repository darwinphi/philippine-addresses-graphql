import fs from "fs";
import path from "path";

const getData = (filename: string) => {
  const jsonPath = path.join(__dirname, "data", filename);
  const result = fs.readFileSync(jsonPath, "utf-8");
  return JSON.parse(result);
};

const barangays: Barangay[] = getData("barangays.json");
const cities: City[] = getData("cities.json");
const provinces: Province[] = getData("provinces.json");
const regions: Region[] = getData("regions.json");

export { provinces, regions, cities, barangays };
