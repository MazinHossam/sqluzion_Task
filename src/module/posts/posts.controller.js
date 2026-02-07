import { Router } from "express";
import Post from "../../database/model/posts.model.js";
import { deletepost,showdatapost,commentcount } from "./posts.service.js"; 

const router=Router()

router.post('/creatposts', async (req, res) => {
  const { title, content, userId } = req.body;
  const post = new Post({title,content,userId});
  await post.save();
  res.json({message: "Post created successfully",post});
});


router.delete('/deletepost/:postid',async (req,res)=>{
const {userid}=req.body
const {postid}=req.params
const result=await deletepost(postid,userid)
   if (!result) {
      return res.status(404).json({ message: "Post not found" });
    }if(result==="notsame"){
    return res.status(403).json({ message: "You are not allowed to delete this post" });
    }else{
          res.json({ message: "Post deleted successfully" });
    }
})
router.get('/postDetails', async (req,res)=>{
  const result=await showdatapost()
  console.log(result)
 if(result){
   res.json({massege:"Show Details Done",result})
 }
})
router.get('/comment-count', async (req,res)=>{
  const result=await commentcount()
  console.log(result)
 if(result){
   res.json({massege:"Show Count Done",result})
 }else{
  res.json({massege:"Not Found Comment"})
 }
})



export default router
