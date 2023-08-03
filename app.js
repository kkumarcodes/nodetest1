const express = require("express");
const app = express();
require("dotenv").config();
const port = 3004;
var sqlite3 = require("sqlite3").verbose();
const cors = require("cors");
var bodyParser = require("body-parser");

const DBSOURCE = "usersdb.sqlite";

let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
        // Cannot open database
        console.error(err.message);
        throw err;
    } else {
        db.run(
            `CREATE TABLE Comment (
            Id INTEGER PRIMARY KEY AUTOINCREMENT,
            comment text, 
            image_name text,             
            parent_id INTEGER,
            x INTEGER,
            y INTEGER
            )`,
            (err) => {
                if (err) {
                    // Table already created
                } else {

                }
            }
        );
    }
});

module.exports = db;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(
    express.urlencoded(),
    cors({
        origin: "http://localhost:3000",
    })
);

app.get("/", (req, res) => res.send("API Root"));

// * employee

app.post("/api/comments", async (req, res) => {
    var errors = [];
    try {
        const {
            comment,
            image_name,
            parent_id,
            x,
            y
        } = req.body;

        if (!comment) {
            errors.push("comment is missing");
        }
        if (!image_name) {
            errors.push("image_name is missing");
        }

        var sql =
            "INSERT INTO Comment (comment, image_name, parent_id, x, y) VALUES (?,?,?,?,?)";
        var params = [
            comment,
            image_name,
            parent_id,
            x,
            y
        ];
        var employee = db.run(sql, params, function (err, rows) {
            if (err) {
                res.status(400).json({ error: err.message });
                return;
            }
            res.status(201).json({
                message: "success",
            });
        });
    } catch (err) {
        console.log(err);
    }
});


app.get("/api/comments/:slug", async (req, res, next) => {
    var sql =
        "SELECT * FROM Comment WHERE image_name=$image_name";
    var image_name = req.params.slug
    var params = {
        $image_name: image_name
    };
    var employee = await db.all(sql, params, function (err, rows) {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.status(200).json({
            message: "success",
            data: rows
        });
    });
});

app.listen(port, () => console.log(`API listening on port ${port}!`));

module.exports = app;
