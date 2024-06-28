var $ = require( "jquery" );
var mysql = require('mysql');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "senac@02"
});

var qrySql = "SELECT * FROM db_agencia_de_turismo.tbl_aeroportos;";

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(qrySql, function (err, result) {
        if (err) throw err;
        console.log("Result: " + result);
    });
});

