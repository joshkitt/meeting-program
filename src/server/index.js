import "./utils/dotenv";
import next from "next";
import path from "path";
import express from "express";
import compression from "compression";
import helmet from "helmet";
import { share } from "@lds/universal-env";

// choose which node environment varialbes are shared with the client
// select with caution to avoid sending sensitive data
share("VARIABLE1", "APP_NAME", "HOST");

const port = parseInt(process.env.PORT, 10);
const dev = process.env.NODE_ENV !== "production";
const app = next({ dir: path.join(__dirname, "..", "app"), dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  !dev && server.use(compression()); // https://github.com/zeit/next.js/issues/3890
  server.use(helmet());

  server.get("*", (req, res) => {
    return handle(req, res);
  });

  // eslint-disable-next-line no-unused-vars
  server.use((err, req, res, next) => {
    // eslint-disable-next-line no-console
    console.error(err);
    res
      .status(err.status || 500)
      .send(req.xhr ? { error: "An error occured" } : "An error occured");
  });

  server.listen(port, err => {
    if (err) throw err;
    // eslint-disable-next-line no-console
    console.log(`Listening at Port ${port} (${process.env.HOST})`);
  });
});
