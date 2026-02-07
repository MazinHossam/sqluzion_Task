import express from 'express'
import { databaseconnection, databaseSync } from './database/connection.js'
import usserrouter from './module/user/user.controller.js'
import posts from './module/posts/posts.controller.js'
import comment from './module/comment/comment.controller.js'


export const bootstrab = async()=>{

const app =express()
await databaseconnection()
await databaseSync()
const port =3000

app.use(express.json())
app.use('/users',usserrouter)
app.use('/posts',posts)
app.use('/comments',comment)
app.get('/',(req,res)=>{
    res.json({massege:"hellow world"})
})
app.use((error,req,res,next)=>{
    return res.status(error.cause?.statusCode ?? 500)
    .json({errMsg:error.massege,error,errStack:error.stack})
})

app.listen(port,()=>{console.log("server is running")})
}