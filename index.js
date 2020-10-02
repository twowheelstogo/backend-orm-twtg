class TwtgOrm {
    constructor(){
    }
        
    getDb(){
        return require("./models");
    }
}


module.exports = TwtgOrm;

console.log('todo ok')
