# Bins-Su-API

An API to get BIN details from bins.su ( Unofficial &amp; may not work if bins.su do any changes to their site ) ([Demo](http://binsapi.herokuapp.com/))

## API

Send Get Request to `http://yourhost:port/api/{bin}`

## Example

Request to : `https://bins-su-api.now.sh/api/549184`

Response : 

`
{"result":true,"data":{"bin":"549184","vendor":"MASTERCARD","type":"DEBIT","level":"PLATINUM","bank":"BANK NIZWA SAOG","country":"OMAN"},"message":"Search Successful"}
`

Errors :

`{"result":false,"message":"No Results Found"}`

`{"result":false,"message":"Request a Valid BIN"}`

## Running Locally

```
$ git clone https://github.com/ArnabXD/bins-su-api
$ cd bins-su-api
$ npm install 
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying to Heroku

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## Deploying to Vercel/Zeit

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/ArnabXD/bins-su-api)

`Note : Scraping is not a Fair use of Vercel`
