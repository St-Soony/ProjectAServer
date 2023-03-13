`use strict`

const path = require("path");
const fs = require(`fs`);

const gatekeeper = require(`../Control/gatekeeper.js`);
const checkversion = require(`../Control/checkversion.js`);
const login = require(`../Control/login.js`);
const tablesend = require(`../Control/tablefilesend.js`);

const Main = (request, response, next) => {
    
    const p = request.params;

    let result = eval(`${p.controller}.Main()`);
    
    response.send(`${result}`);
}

const Download = (request, response, next) => {

    const p = request.params;

    let result =  tablesend.Main(p.type);
    //response.download(result);
    response.send(result);
}

module.exports = {Main, Download};