import Fav from '../model/Fav.js'

export async function createFav(input) {
  try {
    const fav = await Fav.create(input)
    return fav
  } catch (error) {
    throw new Error(errorMessage)
  }
}
export async function findFavs(query) {
  const favs= await Fav.find({})
  return favs
}