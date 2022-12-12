import { Hono } from "hono";
import { html } from "hono/html";

const app = new Hono();

app.get("/", (c) =>
  c.html(html`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <title>XDBINS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://fonts.googleapis.com/css2?family=Krona+One&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="static/styles.css" />
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>
      </head>
      <body>
        <div class="header">BIN CHECKER</div>
        <div class="container">
          <div class="api"><label>API : </label><span id="api"></span></div>
          <div class="box">
            <div class="form-inline">
              <center>
                <br />
                <br />
                <div class="form-group">
                  <input type="text" placeholder="Enter BIN" id="bin" /><button
                    onclick="search()"
                  >
                    Search
                  </button>
                </div>
              </center>
            </div>
          </div>
          <div class="box">
            <center>
              <img src="static/loader.svg" id="loader" style="display: none;" />
            </center>
            <div id="error" style="display: none;" class="error"></div>
            <div class="box" id="result" style="display: none;">
              <table class="table">
                <thead>
                  <tr>
                    <td><b>BIN</b></td>
                    <td style="font-weight: bold;" id="binn"></td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Card Brand</td>
                    <td id="vendor"></td>
                  </tr>
                  <tr>
                    <td>Card Type</td>
                    <td id="type"></td>
                  </tr>
                  <tr>
                    <td>Card Level</td>
                    <td id="level"></td>
                  </tr>
                  <tr>
                    <td>Bank</td>
                    <td id="bank"></td>
                  </tr>
                  <tr>
                    <td>Country</td>
                    <td id="country"></td>
                  </tr>
                </tbody>
              </table>
              <div class="info">
                Data Provided From <a href="http://bins.su">BINS.SU</a>
              </div>
              <br />
            </div>
          </div>
          <a href="https://github.com/ArnabXD/bins-su-api"
            ><img class="github" src="static/github.png"
          /></a>
        </div>
        <script src="static/main.js"></script>
      </body>
    </html>
  `)
);

export default app;
