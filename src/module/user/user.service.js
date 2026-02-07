import {userModel} from '../../../src/database/model/user.model.js'
// import {userModel } from '../../database/model/relation.js';


export const addUser= async (data)=>{
let {userName,email,password}=data
let userData=await userModel.create({userName,email,password})
console.log(userData)
return userData
}


export const getUserID= async (id)=>{
let userId=await userModel.findByPk(id)
return userId
}
export const getUseremail= async (email)=>{
let useremail=await userModel.findOne({ where: { email } })
return useremail
}

export const updateUser =async (data,id)=>{
const userData = await userModel.update(data,{where:{id:id}})
if(userData[0]==1){
return userData
}else{
return false
}

}



export const deleteUser =async (id)=>{
   const userDeleted = await userModel.destroy({where :{id:id}}) 
   if(userDeleted==1){
    return userDeleted
    
   }else{
    return false
   }
}
