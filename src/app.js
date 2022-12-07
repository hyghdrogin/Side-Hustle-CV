import express from "express";
import cors from "cors";
import router from "./routes";
import config from "./config/index";
import reqLogger from "./utils/reqLogger";

const app = express();
const port = config.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use(reqLogger);
app.use("/api", router);

app.get("/", (req, res) => {
  res.send(`Welcome to ${config.APP_NAME} app`);
});

app.use((req, res) => res.status(404).send({
  status: "error",
  error: "Not found",
  message: "Route not correct kindly check url.",
}));

(async () => {
  app.listen(config.PORT || 4000, async () => {
    console.log(
      `${config.APP_NAME} API listening on ${port || 4000}`
    );
  });
})();

process.on("unhandledRejection", error => {
  console.log("FATAL UNEXPECTED UNHANDLED REJECTION!", error.message);
  console.error("\n\n", error, "\n\n");
});

export default app;
