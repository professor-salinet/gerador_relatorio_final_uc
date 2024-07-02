import { mysqlConnect } from './module.js';
import $ from 'jquery';
import mysql from 'mysql';

const mysqlConnector = mysqlConnect();

const mysqlDb = "db_agencia_de_turismo";
const mysqlTbl = "tbl_aeroportos";
const qrySql = "insert into `" + mysqlDb + "`.`" + mysqlTbl + "` (`nome`) values ('16 bis');";

mysqlConnector.query(qrySql, function (err) {
    if (err) throw err;
    console.log("Registro inserido com sucesso!");
    process.exit();
});
