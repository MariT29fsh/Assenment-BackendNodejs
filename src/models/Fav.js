import { Schema, model } from "mongoose";

const favSchema=new Schema({
    title: String,
    description: String,
    link: String
},{
    timestamps:true,
    versionKey: false
}

)

export default model('Fav', favSchema)