import { Router } from 'express'

const login = Router()

login.use((req, res, next) => {
  next()
})

login.get('/', login)

export default login