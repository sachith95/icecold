import express from 'express'
import cors from 'cors'

import { dbInit } from './shared/DB'
import routes from './routes'

require("dotenv").config()

const app = express()

// database 
dbInit()

// middleware
app.use(express.json())
app.use(cors())

routes(app)

app.listen(process.env.API_PORT,() => console.log(`server started on port: ${process.env.API_PORT}`))