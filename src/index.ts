import { Hono } from "hono";
import { cors } from "hono/cors";
import { serveStatic } from "hono/serve-static";

import index from "./handlers/index-html";
import api from "./handlers/api";

const app = new Hono();

app.use(cors());

app.use("/static/*", serveStatic({ root: "./" }));
app.route("/", index);
app.route("/api", api);

app.fire();
