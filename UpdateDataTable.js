const { google } = require(`googleapis`);
const { client_email, private_key } = require(`./Keys/Key.json`);
const fs = require(`fs`);

const DataVersionSheetID = `1YNBWkV9wsgsNMOvbZLdyYUAsCfzu7S-IgYcj3sqFOB4`;
const GateInfoSheetID = `1GYMi-r9_u7xndMBWL6Y0dlZp8sMKy_dpG3pPAGOINcs`;
const DatatableSheetID = `1sz2p-T4ZpUiqFFGhjvfvsTbKYp_tMl5Px_y8eF4eWcY`;

let data = new Object;
let key, value;

async function Main() {

  const authorize = new google.auth.JWT(client_email, null, private_key, [
    'https://www.googleapis.com/auth/spreadsheets',
  ]);
  
  const googleSheet = google.sheets({
    version: 'v4',
    auth: authorize,
  });
  
  const context = await googleSheet.spreadsheets.values.get({
    spreadsheetId: DatatableSheetID,
    range: `Header!1:10000`,
  });

  console.log(context.data);

  for(let i = 0; i < context.data.values.length; i++)
  {
    key = context.data.values[i][0];
    value = context.data.values[i][1];

    data[key] = value;
  }

  console.log(data);
  
  fs.writeFileSync(`./Data/DataVersion.json`, JSON.stringify(data, null, 2));

}

Main();

const rrr = () => {

    return data;

}

module.exports = {Main, rrr};