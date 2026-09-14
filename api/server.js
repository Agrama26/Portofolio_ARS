// Wraps the Vite SSR fetch-based handler for Vercel's Node.js serverless runtime.
import handler from "../dist/server/server.js";

export default async function serverlessHandler(req, res) {
  const protocol = (req.headers["x-forwarded-proto"] || "https")
    .split(",")[0]
    .trim();
  const host = req.headers.host || "localhost";
  const url = `${protocol}://${host}${req.url}`;

  const headers = new Headers();
  for (const [key, val] of Object.entries(req.headers)) {
    if (val != null) {
      headers.append(key, Array.isArray(val) ? val.join(", ") : String(val));
    }
  }

  let body;
  if (req.method !== "GET" && req.method !== "HEAD") {
    body = await new Promise((resolve, reject) => {
      const chunks = [];
      req.on("data", (chunk) => chunks.push(chunk));
      req.on("end", () => resolve(Buffer.concat(chunks)));
      req.on("error", reject);
    });
  }

  const request = new Request(url, {
    method: req.method,
    headers,
    body: body?.length ? body : undefined,
  });

  const response = await handler.fetch(request, {}, {});

  res.statusCode = response.status;
  for (const [key, val] of response.headers.entries()) {
    res.setHeader(key, val);
  }
  const buf = Buffer.from(await response.arrayBuffer());
  res.end(buf);
}
