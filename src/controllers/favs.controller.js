import Fav from '../models/Fav'
export const createFav = async (req,res) =>{
    //save datos in db
   const {name,category,link}=req.body;
    const newFav= new Fav({name,category,link});
    const favSaved = await newFav.save();
    res.status(201).json(favSaved);
    //res.json('creating fav');
}
export const getFavs= async (req,res) =>{
    const favs =await Fav.find();
    res.json(favs);
}
export const getFavbyId = async ( req,res) =>{
    const fav = await Fav.findById(req.params.favId);
    res.status(200).json(fav)

}
export const updateFavbyId = async (req,res) =>{
    const updatefav =await Fav.findByIdAndUpdate(req.params.favId, req.body,{
        new:true
    })
     res.status(200).json(updatefav)

}
export const deleteFavbyId = async (req,res) =>{
    await Fav.findByIdAndDelete(req.params.favId);
    res.status(204).json();
}