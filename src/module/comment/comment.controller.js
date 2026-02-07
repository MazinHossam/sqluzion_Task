import { Router } from "express";
import {creatcomment,updateComment,findcreate,getdetails,getRecentComments,findCommentsByWord} from './comment.service.js'

const router =Router()
router.post('/creatcomment',async(req,res)=>{
const comments =req.body
const result = await creatcomment(comments )
console.log(result)
if(result){
    res.json({massege:"comments created"})
}else{
      res.json({massege:"post is not found"})
}

})

router.patch('/updateComment/:commentId',async (req,res)=>{
const {userid,content}=req.body
const {commentId}=req.params
const result=await updateComment(userid,content,commentId)
   if (!result) {
      return res.status(404).json({ message: "comment Not Found" });
    }if(result==="notsame"){
    return res.status(403).json({ message: "You are not allowed to update this comment" });
    }else{
          res.json({ message: "Comment updated" });
    }
})



router.post('/find-or-create',async(req,res)=>{
    const {userId,postId,content}=req.body
    const result=await findcreate(userId,postId,content)
      res.json({massege:"done",result})
    })


    router.get('/details/:id',async (req,res)=>{
     const {id}=req.params
     const result = await getdetails(id)
     if(result){
        res.json({massege:"this comment details",result})
     }else{res.json({massege:"comment not found"})}
    })



    router.get('/newest/:postId', async (req, res) => {
  const { postId } = req.params;
  const result = await getRecentComments(postId);
console.log(result)
 if(result.length==0){
        res.json({massege:"not found comments",result}); 
 }
 else if(result){
         res.json({massege:"this newest comments ",result})
 }
});

router.get('/search/:word', async (req, res) => {
  const { word } = req.params;

  const result = await findCommentsByWord(word);

  if (result.count === 0) {
    return res.json({message: "not found comments ",count: 0});
  }else{res.json({count: result.count,comments: result.comments});}
});


export default router