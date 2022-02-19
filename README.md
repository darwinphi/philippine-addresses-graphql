<div align="center">
  <img src="https://cdn.countryflags.com/thumbs/philippines/flag-round-250.png" width=140>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" width=150>
</div>

<h1 align="center"/>Philippine Addresses GraphQL API</h1>
<img src="https://img.shields.io/github/deployments/darwinphi/philippine-addresses-graphql/production?label=vercel&logo=vercel&logoColor=white&style=plastic"/>


Access data based on regions, provinces, cities and barangays in the Philippines.
Check the full schema [here.](https://ph-addresses-api.vercel.app/graphql)

## 📦 Installation
In local development
```
git clone git@github.com:darwinphi/philippine-addresses-graphql.git
```
Install dependecies...
```
npm install
```
...then open [http://localhost:4000/graphql](http://localhost:4000/graphql)


## 🔧 Usage
### Using curl
```
curl  --location --request POST 'https://ph-addresses-api.vercel.app/graphql' \
      --header 'Content-Type: application/json' \
      --data '{"query": "query { regions { regionName } }"}'
```
### Queries
<details>
  <summary>All Regions</summary>
  
  ```
  regions {
    regionName
    ...
  }
  ```
</details>
<details>
  <summary>All Provinces</summary>
  
  ```
  provinces {
    provinceName
    ...
  }
  ```
</details>
<details>
  <summary>All Cities</summary>
  
  ```
  cities {
    cityName
    ...
  }
  ```
</details>
<details>
  <summary>All Barangays</summary>
  
  ```
  barangays {
    brgyName
    ...
  }
  ```
</details>
<details>
  <summary>Get Provinces by Region</summary>
  
  ```
  provinceByRegion(regionCode: String!) {
    provinceName
    ...
  }
  ```
</details>
<details>
  <summary>Get Cities by Province</summary>
  
  ```
  citiesByProvince(provinceCode: String!) {
    cityName
    ...
  }
  ```
</details>
<details>
  <summary>Get Barangays by City</summary>
  
  ```
  barangasByCity(cityCode: String!) {
    cityName
    ...
  }
  ```
</details>

## Data Source
[<img src="https://psa.gov.ph/sites/default/files/kmcd/psa%20logo.png" width="120" />](https://psa.gov.ph/)

[Philippine Statistics Authority](https://psa.gov.ph/)
