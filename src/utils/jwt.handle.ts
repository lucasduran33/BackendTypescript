import { sign,verify} from 'jsonwebtoken'
const JWT_SE = process.env.JWT_S  || "token.010101"
console.log(JWT_SE)


const generateToken = async (id:string) => {
    const jwt =  sign({id},JWT_SE,
        {expiresIn: "2h"});
        return jwt
}


const verifyToken = async (jwt : string) => {
    try{
        console.log(jwt, 'soy jwt del verify')
        const isOk = await verify(jwt,JWT_SE); 
        return isOk
    }catch(e){
        console.log(e, 'is not possible enable connection')
    }

}

export {generateToken, verifyToken}