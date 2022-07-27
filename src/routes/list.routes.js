import { Router } from 'express'
import {createListF,findListsF,findListByIdF,deleteListByIdF} from '../controllers/list.controller.js'
import authorization from '../middlewares/authorization.js'

const listRouter = Router()

listRouter.post('/api/list', authorization, createListF)
listRouter.get('/api/list', authorization,findListsF)
listRouter.get('/api/list/:id',authorization,findListByIdF)
listRouter.delete('/api/list/:id',authorization,deleteListByIdF)

export default listRouter