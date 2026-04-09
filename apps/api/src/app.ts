import express from "express";
import cors from "cors";
import helmet from "helmet";

import { router } from "./routes";
import { env } from "./config";
import { notFoundMiddleware } from "./middlewares/not-found.middleware";
import { errorMiddleware } from "./middlewares/error.middleware";

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(env.API_PREFIX, router);

app.use(notFoundMiddleware);
app.use(errorMiddleware);

export { app };