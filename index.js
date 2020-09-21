class TwtgOrm {
    constructor(configdb){
        const jsv = require("json-validator");
        const {configValidator} = require("./validators")
        const validators = jsv.validate(configdb, configValidator);
        if(validators.length > 0)
            throw new Error(validators);
        const configs = require("./configs");
        configs.database = configdb.database;
        configs.dialect = configdb.dialect;
        configs.host = configdb.host;
        configs.password = configdb.password;
        configs.username = configdb.username;
    }
        
    getDb(){
        return require("./models");
    }
}


module.exports = TwtgOrm;