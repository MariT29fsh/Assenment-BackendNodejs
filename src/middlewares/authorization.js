import jwt from "jsonwebtoken"

const authorization = async (req, res, next) => {
    const authorization=req.get('authorization')
    let token=''
    if(authorization && authorization.toLowerCase().startsWith('bearer')){
        token=authorization.substring(7)
    }
    const decodedToken=jwt.verify(token,process.env.SECRET)

    if(!token || !decodedToken.id){
        return res.status(401).json({error:"token invalid"})
    }
    const {id:userId} =decodedToken
    req.userId=userId
    return next()
  }
export default authorization