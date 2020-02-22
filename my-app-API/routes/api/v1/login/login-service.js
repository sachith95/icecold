import to from 'await-to-js'
import Debug from 'debug'
const debug = Debug('Database')
import bcrypt from 'bcrypt'

import UserModel from '../../../../schemas/user-model'

export const fetchUser = async (userName,password) => {
    const[err,user] = await to(UserModel.find({ userName:userName }))
    const isPasswordValid = bcrypt.compareSync(password, _.get(user, 'password'))

    if (!user) throw new Error('User not found')
    if (!isPasswordValid) {
        debug(`login:  User Authentication Failed. invalid password User = ${credentials.name}`)
        return user
    }
}