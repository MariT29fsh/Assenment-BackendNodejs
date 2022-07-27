import { createFav, findFavs } from '../services/fav.service.js'

export async function createFavv(req, res) {
  try {
    const fav = await createFav(req.body)
    res.status(201).json({ message: 'Fav created', fav })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findFavss(req, res) {
  try {
    const favs = await findFavs()
    res.status(200).json({ message: 'Fav List', favs })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}