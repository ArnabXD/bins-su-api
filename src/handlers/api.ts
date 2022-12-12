import { Hono } from "hono";
import { binLookup } from "@arnabxd/bin-lookup/lib";

const app = new Hono();

app.get("/:bin", async (c) => {
  const bin = c.req.param("bin");
  const data = await binLookup(bin, "bins.ws");

  c.set("Cache-Control", "public, max-age=86400");
  return c.json(data);
});

export default app;
