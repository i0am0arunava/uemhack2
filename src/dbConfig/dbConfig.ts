import mongoose from 'mongoose';
export async function connect(){
    try{
        mongoose.connect(process.env.MONGO_URI!);
const connection =mongoose.connection;

connection.on('connected',() =>{
    console.log("connected sucessfuly")
})
connection.on('error',(err) =>{
    console.log("connected error",err)
    process.exit();
})
    } catch(err){

        console.log("something wrong",err)
    }
}