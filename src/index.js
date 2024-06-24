// require(dotenv).config({path: './env'});

import dotenv from "dotenv";

import connectDB from "./db/index.js";

dotenv.config({
    path: './env'
})
connectDB()











// import express from "express";
// const app = express();
// ( async () =>{
//     try{
//         const db_connect = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

//         app.listen(process.env.PORT, ()=>{
//             console.log(`Application listening on port ${process.env.PORT}`);
//         })
//     } catch (error){
//         console.error("ERROR : ", error);
//         throw err
//     }
// })()