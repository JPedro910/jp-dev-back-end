import express from "express";
import router from "./router/index";
import cors from "./middlewares/cors";

const app = express();

app.use(cors);
app.use(express.json());
app.use(router);

export default app;