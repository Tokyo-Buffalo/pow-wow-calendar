const { Client } = require("pg");

require("jest-fetch-mock").enableMocks();

const client = new Client(/*connectionInfo*/);
client.on("drain", client.end.bind(client)); //auto disconnect client after last query ends

require("./server/db/createTables");
