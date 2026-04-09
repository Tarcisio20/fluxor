import { app } from "./app";
import { env } from "./config";

app.listen(env.PORT, () => {
  console.log(`🚀 API running on http://localhost:${env.PORT}${env.API_PREFIX}`);
});