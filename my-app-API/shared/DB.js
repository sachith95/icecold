import mongoose from 'mongoose'
import Debug from 'debug'
const debug = Debug('Database')
require("dotenv").config()

export const dbInit = () =>{
      mongoose.set('useUnifiedTopology', true)
      mongoose.set('useCreateIndex', true);
      mongoose.set('debug', true)
      mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
      const db = mongoose.connection
      db.on('error', (error) => debug(`dbInit: Database connection unsuccessfull : ${e} `))
      db.once('open', () =>  debug('dbInit: Database connection succesfull') )
}