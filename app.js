var $ = require( "jquery" );
var mysql = require('mysql');

// import $ from 'jquery';
// import mysql from 'mysql';

const mysqlHost = "127.0.0.1";
const mysqlUser = "root";
const mysqlPass = "senac@02";
const mysqlDb = "db_agencia_de_turismo";

var con = mysql.createConnection({
    host: mysqlHost,
    user: mysqlUser,
    password: mysqlPass,
    database: mysqlDb
});

const qrySql = "SELECT * FROM `tbl_aeroportos`;";

// console.clear();
con.connect(function (err) {
    if (err) throw err;
    // console.log("Connected!");
    con.query(qrySql, function (err, result, fields) {
        if (err) throw err;
        console.log("Result: ", result);
        // console.log("Fields: ", fields);
    });
});

