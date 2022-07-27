import List from '../model/List.js'

export async function createList(input) {
  try {
    console.log(input);
    const list = await List.create(input)
    console.log('llego aqui1');
    return list.populate('user')
  } catch (error) {
    throw new Error(error)
  }
}
export async function findLists(query) {
  const lists= await List.find({})
  for (const list of lists) {
    await list.populate('favs')
    await list.populate('user')//.populate('user') 
  }
  return lists
}

export async function findListById(query) {
  const list= await List.findById(query)
  if(list){
    await list.populate('favs')
    await list.populate('user')
  }
  return list
  
}

export async function deleteListById(query) {
  try {
    await List.findByIdAndDelete(query)
    return 'La lista eliminó correctamente'
  } catch (error) {
    throw new Error(error)
  }
}