# Bins-Su-API

An API to get BIN details from bins.su ( Unofficial &amp; may not work if bins.su do any changes to their site )

---

[Why bins-su-api.now.sh isn't working ?](https://github.com/ArnabXD/bins-su-api/issues/5#issuecomment-810950435)

---

## API

Send Get Request to `http://yourhost:port/api/{bin}`

## Example

Request to : `https://binssuapi.vercel.app/api/549184`

Response : 

```json
{
    "result": true,
    "message": "Search Successful",
    "data": {
        "bin": "549184",
        "vendor": "MASTERCARD",
        "type": "DEBIT",
        "level": "PLATINUM",
        "bank": "BANK NIZWA SAOG",
        "country": "OMAN",
        "countryInfo": {
            "name": "OMAN",
            "emoji": "🇴🇲",
            "unicode": "U+1F1F4 U+1F1F2",
            "code": "OM",
            "dialCode": "+968"
        }
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
$ npm install 
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

---

## Deploy
| Heroku | Vercel |
| :---: | :---: |
| [![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy) | [![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/ArnabXD/bins-su-api) |

`Note : Scraping is not a Fair use of Vercel`
