`use strict`

const data = require(`../Data/DataVersion.json`);

const Main = (request, response, next) => {
    console.log("complete call Version checker");
    return JSON.stringify(data, null, 2);
};

module.exports = {Main};