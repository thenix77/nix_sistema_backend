"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbBlackBoard = exports.dbSinfo = void 0;
const pg_1 = require("pg");
function dbSinfo() {
    return new pg_1.Pool({
        host: process.env.DB_HOST || "localhost",
        user: "postgres",
        password: "1234nix",
        database: "db_sensors",
        max: 10,
        min: 0,
        idleTimeoutMillis: 10000,
    });
}
exports.dbSinfo = dbSinfo;
function dbBlackBoard() {
    return new pg_1.Pool({
        host: process.env.DB_HOST || "localhost",
        user: "postgres",
        password: "1234nix",
        database: "db_sensors",
        max: 10,
        min: 0,
        idleTimeoutMillis: 10000,
    });
}
exports.dbBlackBoard = dbBlackBoard;
