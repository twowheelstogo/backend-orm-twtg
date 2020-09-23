class TwtgOrm {
    constructor(){
    }
        
    getDb(){
        return require("./models");
    }
}

module.exports = TwtgOrm;