import dotenv from 'dotenv'
dotenv.config({path:'./config/.env'})

const database_Name= process.env.DATABASE_NAME
const database_Password= process.env.DATABASE_PASSWORD
const database_user= process.env.DATABASE_USER


export {database_Name,database_Password,database_user}