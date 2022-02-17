<div align="center">
  <img src="https://cdn.countryflags.com/thumbs/philippines/flag-round-250.png" width=140>
  <img src="https://upload.wikimedia.org/wikipedia/commons/1/17/GraphQL_Logo.svg" width=150>
</div>

[<h1 align="center"/>Philippine Addresses GraphQL API</h1>](https://philippines-address-graphql.vercel.app/) 


Access data based on regions, provinces, cities and barangays in the Philippines.
Check the full schema [here.](https://philippines-address-graphql.vercel.app/)

## Usage
### Using curl
```
curl  --location --request POST 'https://philippines-address-graphql.vercel.app/' \
      --header 'Content-Type: application/json' \
      --data '{"query": "query { regions { regionName, regionCode } }"}'
```
### Queries
```
query {
  regions {
    regionName
    regionCode
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
