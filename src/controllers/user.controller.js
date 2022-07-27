import { createUser, findUsers } from '../services/user.service.js'

export async function createUsers(req, res) {
  try {
    const user = await createUser(req.body)
    //console.log('llega aqui1',user);
    res.status(201).json({ message: 'User created', user })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findUserss(req, res) {
  try {
    const users = await findUsers()
    res.status(200).json({ message: 'Users List', users })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}