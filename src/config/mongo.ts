import "dotenv/config";
import {connect, set} from 'mongoose'

async function dbConnect () : Promise<void>{
 try{
    set('strictQuery', true); //Evita 

    const DB_URI = <string>process.env.DB_URI;
    await connect(DB_URI)
    return Promise.resolve();
 }catch(e){
    console.log(e)
 } 
}


export default dbConnect;