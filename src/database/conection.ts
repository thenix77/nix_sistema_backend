import { Pool } from "pg";

export function dbSinfo() {
  return new Pool({
    host: process.env.DB_HOST || "localhost",
    user: "postgres", //process.env.DB_USER,
    password: "1234nix", // process.env.DB_PSWD,
    database: "db_sensors", // process.env.DB_DDBB,"db_iot", //
    max: 10,
    min: 0,
    idleTimeoutMillis: 10000,
  });
}

export function dbBlackBoard() {
  return new Pool({
    host: process.env.DB_HOST || "localhost",
    user: "postgres", //process.env.DB_USER,
    password: "1234nix", // process.env.DB_PSWD,
    database: "db_sensors", // process.env.DB_DDBB,"db_iot", //
    max: 10,
    min: 0,
    idleTimeoutMillis: 10000,
  });
}


