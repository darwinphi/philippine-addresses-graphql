<div align="center">
  <img src="https://cdn.countryflags.com/thumbs/philippines/flag-round-250.png" width=140>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" width=150>
</div>

<h1 align="center"/>Philippine Addresses GraphQL API</h1>
<img src="https://img.shields.io/github/deployments/darwinphi/philippine-addresses-graphql/production?label=vercel&logo=vercel&logoColor=white&style=plastic"/>


Access data based on regions, provinces, cities and barangays in the Philippines.
Check the full schema [here.](https://ph-addresses-api.vercel.app/graphql)

## Usage
### Using curl
```
curl  --location --request POST 'https://ph-addresses-api.vercel.app/graphql' \
      --header 'Content-Type: application/json' \
      --data '{"query": "query { regions { regionName } }"}'
```
### Queries
```
query {
  regions {
    regionName
    regionCode
    numOfProvinces
    numOfMunicipalities
  }
}
```
```
query {
  provinces {
    provinceName
  }
}
```
```
query {
  cities {
    cityName
  }
}
```


**This API is still under development.*
