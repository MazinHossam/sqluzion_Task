import  { Router } from 'express'
import {addUser,getUserID,getUseremail,updateUser,deleteUser} from '../user/user.service.js'


const router=Router()

router.post('/sign-up', async (req, res) => {
  try {
    const userData = await addUser(req.body);
    res.json({ message: "User added successfully", userData });
  } catch (error) {
    console.error("error", error.original || error);

    res.status(500).json({
      message: "DB Error",
      error: error.original?.sqlMessage || error.message
    });
  }
});



router.get('/getUserID/:id', async (req, res) => {

    const {id}=req.params
    const userId = await getUserID(id);
    console.log(userId)
if(userId){
  res.json({massege:"this User is found",userId})
}else{
    res.json({massege:"this User is not found"})
}


});

router.get('/byEmail',async(req,res)=>{
const {email}=req.query
const userEmail=await getUseremail(email)
console.log(email)
if(userEmail){
  res.json({massege:"this user found",userEmail})
}else{
  res.json({massege:"user is not found"})
}



})

router.put('/update/:id',async (req,res)=>{

  const {id}=req.params 
  const userData = await updateUser(req.body,id)
  if(userData==false){
res.json({massege:'user not found '})
  }else{
res.json({massege:'user updated '})
  }

})

router.delete('/deleteUser/:id',async (req,res)=>{
  const {id}=req.params
  const userdata =await deleteUser(id)
  if(userdata==false){
    res.json({massege:'user not found'})
  }else{
    res.json({massege:'user Deleted'})
  }
})



export default router