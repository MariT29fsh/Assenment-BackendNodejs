import { Router } from 'express'
import {createUsers, findUserss} from '../controllers/user.controller.js'
import authorization from '../middlewares/authorization.js'

const userRouter = Router()

userRouter.post('/api/user', createUsers)

userRouter.get('/api/user',authorization,findUserss)

export default userRouter