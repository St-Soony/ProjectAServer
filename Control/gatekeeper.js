`use strict`

const Main = (request, response, next) => {
    console.log(`complete call gatekeeper`);
    //console.log(gate.r);
    return `complete call gatekeeper`;
};

module.exports = {Main};