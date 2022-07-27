import User from '../model/User.js'
import jwt from 'jsonwebtoken'
export async function login(req, res) {
    const {body}=req
    const{email,password}=body
    const user=await User.findOne({email})
    const passwordCorrect = user === null? false : password===user.password;
    if(!(user && passwordCorrect)){
        res.status(400).json({ message: "no authorization usuario" })
    }
    const userToken={
        id:user._id,
        email:user.email
    }
    console.log("var",process.env.SECRET)
    const token=jwt.sign(userToken,process.env.SECRET,{expiresIn:60*60*44*7})
    res.json({
        email:user.email,
        token:token
    })

  }