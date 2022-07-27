import mongoose from 'mongoose'

const favSchema = new mongoose.Schema(
  {
    title: { 
      type: String,
       required: true },
    description: { 
      type: String },
    link: { type: String },
  },
  { timestamps: true }
)

const Fav = mongoose.model('Fav', favSchema)

export default Fav