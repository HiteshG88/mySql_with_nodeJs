const express = require("express");
const mySql = require("mysql2");

// create a mySql connection
const db = mySql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
});

db.connect((err) => {
    if (err) {
        throw err;
    }
    console.log("mySql Connected...");
});

const app = express();

app.get("/createDb", (req, res) => {
    let sql = "CREATE DATABASE mySql_with_nodeJs";
    db.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("database created...");
    });
});

PORT = 3000;
app.listen(PORT, () => {
    console.log(`server running on ${PORT}`);
});
