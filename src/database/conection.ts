import { Pool } from "pg";

export function dbSinfo() {
  return new Pool({
    host: process.env.DB_HOST || "localhost",
    user:  process.env.DB_USER || "postgres",
    password:  process.env.DB_PSWD || "1234nix",
    database: process.env.DB_DDBB || "blackboard",
    max: 10,
    min: 0,
    idleTimeoutMillis: 10000,
  });
}

export function dbBlackBoard() {
  return new Pool({
    host: process.env.DB_HOST || "senati-dda.blackboard.com",
    user: process.env.DB_USER || "senatiddauser",
    password: process.env.DB_PSWD || "mPdMSXiwztc9d6o",
    database: process.env.DB_DDBB || "BB5eed7aa3f3eed",
    max: 10,
    min: 0,
    idleTimeoutMillis: 10000,
  });
}
