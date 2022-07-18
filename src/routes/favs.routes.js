import {Router} from 'express'
import app from '../app'
import * as favCtrl from '../controllers/favs.controller';
import { verifyToken } from '../middlewares';


const router = Router()

router.post('/' ,verifyToken, favCtrl.createFav);
router.get('/',verifyToken,favCtrl.getFavs);
router.get('/:favId',verifyToken,favCtrl.getFavbyId);
router.put('/:favId',verifyToken, favCtrl.updateFavbyId);
router.delete('/:favId',verifyToken,favCtrl.deleteFavbyId);

export default router;