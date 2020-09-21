const TypeOrm = require("../..");
let twtOrm = new TypeOrm({  
    username: "userFake",
    password: "passwordFake",
    database: "databaseConnect",
    port: "",
    host: "localhost",
    dialect: "postgres"});

let db = twtOrm.getDb();
db.authenticate = () => null;

module.exports = db;