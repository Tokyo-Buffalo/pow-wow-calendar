## Dependencies

First things first, make sure you have redis installed and running:

```
redis-server
```

## Getting Started

To get things up and running, the first thing to do is to run the `npm install` command:

```
npm install
```

Then, start the API server:
```
npm run dev:server
```
And the client:
```
npm run dev:client
```

### Creating the database

You're going to need to create your own database. You can do that by entering the following comamnds:

```
// this will take you to postgres
psql

// once you are in postgres

CREATE DATABASE powwowcalendar;
```
