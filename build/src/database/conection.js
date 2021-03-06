"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbOracle = exports.dbBlackBoard = exports.dbSinfo = void 0;
const pg_1 = require("pg");
const oracledb_1 = __importDefault(require("oracledb"));
const dotenv_1 = __importDefault(require("dotenv"));
function dbSinfo() {
    dotenv_1.default.config();
    return new pg_1.Pool({
        host: "localhost",
        user: "postgres",
        password: "1234nix",
        database: "blackboard",
        //connectionString:'postgres://ltwjmfnyompypj:448d691b2faa4230c2dd5cd5d87280e3867909087c1e3ba89c597f86fe9df4f0@ec2-54-157-234-29.compute-1.amazonaws.com:5432/da84omcj3t8lf4',
        max: 10,
        min: 0,
        idleTimeoutMillis: 10000,
    });
}
exports.dbSinfo = dbSinfo;
function dbBlackBoard() {
    return new pg_1.Pool({
        host: "localhost",
        user: "postgres",
        password: "1234nix",
        database: "blackboard",
        //connectionString:'postgres://ltwjmfnyompypj:448d691b2faa4230c2dd5cd5d87280e3867909087c1e3ba89c597f86fe9df4f0@ec2-54-157-234-29.compute-1.amazonaws.com:5432/da84omcj3t8lf4',
        max: 10,
        min: 0,
        idleTimeoutMillis: 10000,
    });
    /*
    return new Pool({
      host: "senati-dda.blackboard.com",
      user:  "senatiddauser",
      password: "mPdMSXiwztc9d6o ",
      database: "BB5eed7aa3f3eed",
      port: 5432,
      max: 10,
      min: 0,
      idleTimeoutMillis: 10000,
      
    });*/
}
exports.dbBlackBoard = dbBlackBoard;
function dbOracle() {
    oracledb_1.default.outFormat = oracledb_1.default.OUT_FORMAT_OBJECT;
    return oracledb_1.default.getConnection({
        user: 'gcabana',
        password: 'Guillermo',
        connectString: '162.248.52.113/XEPDB1'
    });
}
exports.dbOracle = dbOracle;
