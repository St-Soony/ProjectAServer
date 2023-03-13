`use strict`

const express = require(`express`);
const figlet = require(`figlet`);
const logger = require(`morgan`);

const ListeningPort = 55687;
const Router = require(`./Router/Router.js`);

let ProjectAServer = express();

ProjectAServer.use(figlet);
ProjectAServer.use(logger(`dev`));
ProjectAServer.use(express.static(`./Data/Table`));

ProjectAServer.get("/favicon.ico", (req, res) => res.status(204).end());
ProjectAServer.get(`/datatable/:type`, Router.Download);
ProjectAServer.get(`/:controller`, Router.Main);

ProjectAServer.listen(ListeningPort, () => {

    figlet(`Project A Data Server On..!! \n Listening on port ${ListeningPort}`, (err, data) => {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });

}) 