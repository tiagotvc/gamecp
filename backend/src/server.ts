import express from 'express'
import { sqlConnection } from './database.ts'
import sql from 'mssql'
require('dotenv').config()

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
    sqlConnection().then((sucess) => {
        const request = new sql.Request();
        const data = request.query('USE RF_USER_AoP Select * from tbl_StaffAccount', (err, result) => {
            if (err) console.log(err)
            res.json(result)
        })
    }).catch((err) => {
        console.log(err)
        res.json(err)
    })
  
})

app.use(route)


app.listen(3333, () => 'server running on port 3333')