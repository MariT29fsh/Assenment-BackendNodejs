import mongoose from 'mongoose'

const listSchema = new mongoose.Schema(
  {
    name: { 
      type: String, 
      required: true},
    favs: [{
      type: mongoose.Schema.Types.ObjectId,
      ref:'Fav'}],
    user: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"User"}
  },
  { timestamps: true }
)

const List = mongoose.model('List', listSchema)

export default List