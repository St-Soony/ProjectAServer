`use strict`

const path = require("path");
const fs = require(`fs`);

const Main = (request, response, next) => {

    const p = request;

    const filePath =  path.join(__dirname, `../Data/Table/${p}.csv`);
    const file = fs.readFileSync(filePath, `utf-8`);
    //const test = require(file);

    const rows = file.split(`\r\n`)

    //console.log(file);

    return file;
};

module.exports = {Main};