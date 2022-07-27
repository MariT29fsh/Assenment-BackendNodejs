import User from '../model/User.js'

export async function createUser(input) {
  try {
    console.log('llega aqui',input);
    const user = await User.create(input)
    return user
  } catch (error) {

    throw new Error(error)
  }
}
export async function findUsers(query) {
  const users= await User.find({})
  return users 
}