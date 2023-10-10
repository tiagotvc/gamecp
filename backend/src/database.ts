import sql from 'mssql'
require('dotenv').config()

export const sqlConnection = () => {

    const config = {
        user:process.env.SQL_USER,
        password:process.env.SQL_PASSWORD,
        server:process.env.SQL_SERVER,
        database:process.env.SQL_DATABASE,
        synchronize: true,
        trustServerCertificate: true
       
    }
    return sql.connect(config);
}