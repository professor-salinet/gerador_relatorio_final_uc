import { createConnection } from 'mysql';

export function mysqlConnect() {
    const mysqlHost = "127.0.0.1";
    const mysqlUser = "root";
    const mysqlPass = "senac@02";

    const con = createConnection({
        host: mysqlHost,
        user: mysqlUser,
        password: mysqlPass
    });

    con.connect(function (err) {
        if (err) throw err;
        // console.log("Connected!");
    });

    return con;
}