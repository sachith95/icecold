import { Router } from 'express'

import {getUsers, setUser} from './user-controller'
const user = Router()

user.use((req, res, next) => {
  next()
})

user.get('/', getUsers);
user.post('/createUser', setUser)

export default user