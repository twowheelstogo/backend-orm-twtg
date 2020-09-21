module.exports = {   
    username:{
        required: true,
    },
    password: {
        required: false,
    },
    database: {
        required: true,
    },
    host: {
        required: true,
    },
    dialect: {
        required: true,
        enum: ['mysql', 'mariadb', 'sqlite', 'postgres']
    }
}