class TwtgOrm {
    constructor(config){
        this.config = config;
    }
        
    getDb(){
        return require("./models")(this.config);
    }
}


module.exports = TwtgOrm;

console.log('todo ok')
