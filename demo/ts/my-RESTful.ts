import * as path from 'path';
import * as fs from 'fs';
//这里之所以不用 import * as express from 'express'; ，是因为express是第三方的，并且推荐使用  import xxx = require('xxx);
import express = require('express');
let app = express();

app.get('/', (req, res) => {
    res.end('Hello Express');
});
app.get('/listUsers', (req, res) => {
    fs.readFile(path.join(__dirname, '../res/users.json'), 'utf8', (err, data) => {
        if (err) {
            return console.error(err);
        }
        console.log(data);
        data = JSON.parse(data);
        res.end(data);
    });
});
app.get('/find/:id', (req, res) => {
    fs.readFile(path.join(__dirname, '../res/users.json'), 'utf8', (err, data) => {
        if (err) {
            return console.error(err);
        }
        data = JSON.parse(data);
        let userName = "user" + req.params.id;
        let user = data[userName];
        if (user) {
            res.end(JSON.stringify(user));
        } else {
            res.statusCode = 404;
            res.end('There is No such person!');
        }
    });
});

app.get('/add/:id', (req, res) => {
    console.log(req.body);
    fs.readFile(path.join(__dirname, '../res/users.json'), 'utf8', (err, data) => {
        if (err) {
            return console.error(err);
        }
        data = JSON.parse(data);
        let userName = "user" + req.params.id;
        data[userName] = {
            "name": "mohit",
            "password": "password4",
            "profession": "teacher",
            "id": 4
        };
        res.end(JSON.stringify(data));
    });
});
app.get('/delete/:id', function (req, res) {
    fs.readFile(path.join(__dirname, '../res/users.json'), 'utf8', (err, data) => {
        if (err) {
            return console.error(err);
        }
        data = JSON.parse(data);
        let userName = "user" + req.params.id;
        delete data[userName];
        res.end(JSON.stringify(data));
    });
});
var server = app.listen(8080, function () {
    var host = server.address().address;
    var port = server.address().port;
    console.log("应用实例，访问地址为 http://%s:%s", host, port);
});