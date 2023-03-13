`use strict`

const data = require(`../Data/DataVersion.json`);
//const WeaponTable = require(`../Data/Weapon.csv`);

const Main = (request, response, next) => {
    console.log("complete call Version checker");
    return JSON.stringify(data, null, 2);
};

module.exports = {Main};