import { sign,verify} from 'jsonwebtoken'
const JWT_SE = process.env.JWT_S  || "token.010101"
console.log(JWT_SE)


const generateToken = async (id:string) => {
    const jwt =  sign({id},JWT_SE,
        {expiresIn: "2h"});
        return jwt
}


const verifyToken = async () => {

}

export {generateToken, verifyToken}