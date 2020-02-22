import to from 'await-to-js'

import {fetchUser} from './login-service'

export const checkAuthentication = async (req, res) => {
    const { body } = req
    const [err, result] = await to(fetchUser(body.userName, body.password))
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