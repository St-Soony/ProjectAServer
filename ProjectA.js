let express = require(`express`);
let figlet = require(`figlet`);

const ListeningPort = 55687;
const GateKeeperName = `GateKeeper`;

const RoutingName = {
    GateKeeper : `GateKeeper`,
    DataTableVersion : `DataTableVision`,
}

let ProjectAServer = express();

ProjectAServer.use(figlet);

ProjectAServer.get(`/:type`, (request, response) => {
    
    const p = request.params;

    try
    {
        let message = eval(`${p.type}()`);

        response.send(`<h1>${message}</h1>`);
    }
    catch
    {
        console.log(`do not exist API`);
        response.send(`do not exist API`);
    }
});

function GateKeeper()
{
    console.log(`complete call gatekeeper`);
    return `complete call gatekeeper`;
}

function CheckVersion()
{
    console.log("complete call Version checker")
    return (`complete call gatekeeper`);
}

ProjectAServer.listen(ListeningPort, () => {

    figlet(`Listening on port ${ListeningPort}`, function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        console.log(data)
    });

}) 