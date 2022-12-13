# Bins-Su-API

An API to get BIN details from bins.su (Unofficial & may not work if bins.su do any changes to their site)

---

## API

Send Get Request to `http://yourhost:port/api/{bin}`

## Example

Request to : `https://yourhost:port/api/439129`

Response : 

```json
{
  "result": true,
  "message": "BIN Found",
  "data": {
    "bin": 439129,
    "country": "NEPAL",
    "countryInfo": {
      "name": "NEPAL",
      "alpha2": "NP",
      "alpha3": "NPL",
      "numeric": "524",
      "emoji": "🇳🇵"
    },
    "bank": "KUMARI BANK, LTD.",
    "level": "ELECTRON",
    "type": "DEBIT",
    "vendor": "VISA"
  }
}
```

#### Errors :

```json
// No Results Found
{"result":false,"message":"No Results Found"}

// Invalid Bin
{"result":false,"message":"Request a Valid BIN"}
```

---

## Running Locally

```bash
$ git clone https://github.com/ArnabXD/bins-su-api
$ cd bins-su-api
$ yarn install
$ yarn run start
```

## Deploy

[![Deploy to Cloudflare Workers](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/ArnabXD/bins-su-api)