import mongoose from "mongoose";

const uri = 'mongodb+srv://database:database@cluster0.grg1k.mongodb.net/?retryWrites=true&w=majority';

export async function connect(){
    mongoose.set('strictQuery', true);

    try {
        mongoose.set('strictQuery', true);

         mongoose.connect(uri);
        console.log("Successfully connected to MongoDB Atlas");
      } catch (error) {
        console.log("Error connecting to MongoDB Atlas: ", error);
      }
}

