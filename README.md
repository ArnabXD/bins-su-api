# Bins-Su-API
An API to get BIN details from bins.su ( Unofficial &amp; may break if bins.su do any changes to their site )

## Running Locally

```
$ git clone https://github.com/ArnabXD/bins-su-api
$ cd bins-su-api
$ npm install
$ npm start
```

Your app should now be running on [localhost:3000](http://localhost:3000/).

## Deploying to Heroku

```
$ heroku create
$ git push heroku master
$ heroku open
```
or

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.png)](https://heroku.com/deploy)

## API

Send Get Request to : `yourhost:port/api/<BIN TO SEARCH>`

### Example : 

Request to : `https://near-foggy-silverfish.glitch.me/api/439129`

Response : `{"result":true,"data":{"country":"Nepal","vendor":"VISA","type":"DEBIT","level":"ELECTRON","bank":"KUMARI BANK, LTD."},"message":"successful"}`
