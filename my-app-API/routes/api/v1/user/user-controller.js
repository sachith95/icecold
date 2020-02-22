import to from 'await-to-js'

import {fetchUsers, addUser} from './user-service'

export const getUsers = async (req,res) => {
    const [err, result] = await to(fetchUsers())
    if(result){
        return res.send({
            data:result
        })
    }

    return res.send({
        error: {
            message: 'Unable to retrieve user',
            code: 500
          }
    })
}


export const setUser = async (req,res) => {
    const { body } = req
    const [err, result] = await to(addUser(body))
    if(result){
        return res.send({
            data:result
        })
    }

    return res.send({
        error: {
            message: 'Unable to save user',
            code: 500
          }
    })
}