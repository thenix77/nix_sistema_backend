import { Pool } from "pg";

export function dbSinfo() {
  return new Pool({
    
    host: process.env.DB_HOST || 'ec2-54-157-234-29.compute-1.amazonaws.com',//  "localhost",
    user:  process.env.DB_USER || 'ltwjmfnyompypj', //"postgres",
    password:  process.env.DB_PSWD || '448d691b2faa4230c2dd5cd5d87280e3867909087c1e3ba89c597f86fe9df4f0',// "1234nix",
    database: process.env.DB_DDBB || 'da84omcj3t8lf4',//"blackboard",*/
    //connectionString:'postgres://ltwjmfnyompypj:448d691b2faa4230c2dd5cd5d87280e3867909087c1e3ba89c597f86fe9df4f0@ec2-54-157-234-29.compute-1.amazonaws.com:5432/da84omcj3t8lf4',
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
