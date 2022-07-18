import User from '../models/User';
import jwt from 'jsonwebtoken';
import config from '../config';
import Role from '../models/Role';

export const singUp = async (req,res) =>{


    const  {username, email, password, roles} = req.body;

   const newUser = new User({
        username,
        email,
        password: await User.encryptPassword(password)

    })


 const savedUser = await newUser.save();

    const token = jwt.sign({id: savedUser._id}, config.SECRET, {
        expiresIn: 84600
    })
   res.json({token});
   console.log(newUser);
   //res.json('singup')
}
export const signin = async (req,res) => {
    const userFound = await User.findOne({email: req.body.email})
    if(!userFound) return res.status(400).json({message: "User not found"})

    const matchPassword = await User.comparePassword(req.body.password, userFound.password)

    if(!matchPassword) return res.status(401).json({token: null, message: 'Invlid password'})

    const token = jwt.sign({id: userFound._id}, config.SECRET,{
        expiresIn: 84600
    })
    console.log(userFound)

    res.json({token})

}