import { isEmpty } from "lodash";
import logger from "pino";
import dotenv from "dotenv";

dotenv.config();

const config = {
  logger: logger(),
  PORT: process.env.PORT,
  DEV_DATABASE_URL: process.env.DEV_DATABASE_URL,
  TEST_DATABASE_URL: process.env.TEST_DATABASE_URL,
  PROD_DATABASE_URL: process.env.PROD_DATABASE_URL,
  APP_NAME: process.env.APP_NAME,
  CLOUD_NAME: process.env.CLOUD_NAME,
  API_KEY: process.env.API_KEY,
  API_SECRET: process.env.API_SECRET,
};

const absentConfig = Object.entries(config)
  .map(([key, value]) => [key, !!value])
  .filter(([, value]) => !value)
  .map(([key]) => key);

if (!isEmpty(absentConfig)) {
  throw new Error(`Missing Config: ${absentConfig.join(", ")}`);
}

export default config;
