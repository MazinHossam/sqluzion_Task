
// import Comment from '../../../src/database/model/comment.model.js'
// import {userModel} from '../../../src/database/model/user.model.js'
import { Comment, Post,userModel } from '../../../src/database/model/relation.js';
import { json, where } from 'sequelize';



export const creatcomment=async (commentsData )=>{
    const comentdata=await Comment.bulkCreate(commentsData)
console.log(comentdata)
    if(!comentdata){
return false
    }else{
       return comentdata
    }

}


export const updateComment=async(userid,content,commentId)=>{
  const result =await Comment.findByPk(commentId)
if(!result){
  return false
} 
if ( result.userId!==userid) {
      return "notsame"
    }
 await result.update({
    content: content
  });
  return result 
}


export const findcreate =async(userId,postId,content)=>{
    const result=await Comment.findOne({where:{
      postId: postId,
      userId: userId,
      content: content
    }})
    if(result){
return result
    }
   const  newcomment  = await Comment.create({userId,postId,content})
        return newcomment

    
}


export const getdetails=async(id)=>{
    const result=await Comment.findByPk(id,{
        include:[
             {
        model: userModel,
        attributes: ['id', 'userName', 'email'] // اختياري
      },
      {
        model: Post,
        attributes: ['id', 'title']
      }
    ]
        
    })
    return result
}

export const getRecentComments = async (postId) => {
  const comments = await Comment.findAll({
    where: {
      postId: postId
    },
    order: [['createdAt', 'DESC']],
    limit: 3
  });

  return comments;
};

export const findCommentsByWord = async (word) => {
  const comments = await Comment.findAll();

  const matchedComments = comments.filter(c =>
    c.content.includes(word)
  );

  return {
    count: matchedComments.length,
    comments: matchedComments
  };
};




