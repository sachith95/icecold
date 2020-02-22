import UserModel from '../../../../schemas/user-model'
import to from 'await-to-js'

export const fetchUsers = async () => {
    const[err,users] = await to(UserModel.find())
    if (err) {
        return err
      }
    return users
}

export const addUser = async (user) => {
  const dbuser = new UserModel(user)
  const[err,result] = await to(dbuser.save())
  if (err) {
      return err
    }
  return result
}