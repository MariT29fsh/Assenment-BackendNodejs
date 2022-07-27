import { Router } from 'express'
import { createFavv,findFavss} from '../controllers/fav.controller.js'
import authorization from '../middlewares/authorization.js'

const favRouter = Router()

favRouter.post('/api/fav',authorization, createFavv)
favRouter.get('/api/fav',authorization,findFavss)

export default favRouter