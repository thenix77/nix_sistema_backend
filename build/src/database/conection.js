"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbBlackBoard = exports.dbSinfo = void 0;
const pg_1 = require("pg");
function dbSinfo() {
    return new pg_1.Pool({
        host: process.env.DB_HOST || "localhost",
        user: "postgres",
        password: "1234nix",
        database: process.env.DB_DDBB || "blackboard",
        max: 10,
        min: 0,
        idleTimeoutMillis: 10000,
    });
}
exports.dbSinfo = dbSinfo;
function dbBlackBoard() {
    return new pg_1.Pool({
        host: process.env.DB_HOST || "senati-dda.blackboard.com",
        user: process.env.DB_USER || "senatiddauser",
        password: process.env.DB_PSWD || "mPdMSXiwztc9d6o",
        database: process.env.DB_DDBB || "BB5eed7aa3f3eed",
        max: 10,
        min: 0,
        idleTimeoutMillis: 10000,
    });
}
exports.dbBlackBoard = dbBlackBoard;
