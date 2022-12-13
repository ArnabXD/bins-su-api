import { Hono } from "hono";
import { alphaToInfo, Country } from "../utils";

const app = new Hono();

interface Result {
  result: boolean;
  message: string;
  data: {
    bin: number;
    vendor: string;
    type: string;
    level: string;
    bank: string;
    country: string;
    countryInfo: Country;
  } | null;
}

app.get("/:bin", async (c) => {
  const bin = c.req.param("bin");
  c.set("Cache-Control", "public, max-age=86400");

  const meta: Pick<Result, "result" | "message"> = {
    result: false,
    message: "Invalid BIN",
  };
  let data: Result["data"] = null;

  if (!bin || bin.length < 6 || bin.length > 16 || !/^[0-9]+$/.test(bin)) {
    return c.json({ ...meta, data });
  }

  const resp = await fetch("http://bins.su/", {
    method: "POST",
    headers: {
      // prettier-ignore
      "accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
      "accept-language": "en-US,en;q=0.9",
      "cache-control": "max-age=0",
      "content-type": "application/x-www-form-urlencoded",
      "upgrade-insecure-requests": "1",
    },
    body: `action=searchbins&bins=${bin}&bank=&country=`,
  });

  const resultArray: string[] = [];
  const rewrite = new HTMLRewriter();

  rewrite.on("#result", {
    text: ({ text }) => {
      if (text.trim()) resultArray.push(text.trim());
    },
  });

  await rewrite.transform(resp).text();

  if (resultArray[0] === "Total found 1 bins") {
    meta.result = true;
    meta.message = "BIN Found";

    const country = alphaToInfo(resultArray[8]);

    data = {
      bin: Number(resultArray[7]),
      country: country.name,
      countryInfo: country,
      bank: resultArray[12],
      level: resultArray[11],
      type: resultArray[10],
      vendor: resultArray[9],
    };
  } else {
    meta.message = "BIN Not Found";
  }

  return c.json({ ...meta, data });
});

export default app;
