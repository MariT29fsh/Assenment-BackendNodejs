import { createList, deleteListById, findListById, findLists} from '../services/list.service.js'

export async function createListF(req, res) {
  try {
    
    const list = await createList(req.body)
    res.status(201).json({ message: 'List created', list })
    console.log("lista,creada");
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findListsF(req, res) {
  try {
    const lists = await findLists()
    res.status(200).json({ message: 'Lists', lists })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}

export async function findListByIdF(req, res) {
  try {
    const list = await findListById(req.params.id)
    res.status(200).json({ message: 'List by ID', list })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
export async function deleteListByIdF(req, res) {
  try {
    const message = await deleteListById(req.params.id)
    res.status(200).json({ message })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}