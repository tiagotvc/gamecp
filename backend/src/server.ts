import express from 'express'
require('dotenv').config()
import users from './routes/user.route'

import { Router, Request, Response } from 'express';

const app = express();

const route = Router()                                                                                                                                                                                                                                                                                                              

app.use(express.json())


app.use('/api', route)
app.use('/user', users)


app.listen(3333, () => 'server running on port 3333')