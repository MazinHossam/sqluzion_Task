import { Model } from 'sequelize';
// import Post from '../../../src/database/model/posts.model.js'
// import Comment from '../../../src/database/model/comment.model.js'
import {userModel} from '../../../src/database/model/user.model.js'
import { Post, Comment } from '../../../src/database/model/relation.js';

export const createPost = async (postData) => {
  const post = new Post(postData);
  await post.save();
  return post;
};

export const deletepost=async(postid,userid)=>{
  const postiddeleted =await Post.findByPk(postid)
if(!postiddeleted){
  return false
}
     if ( postiddeleted.userId!==userid) {
      return "notsame"
    }else{
          await postiddeleted.destroy();
          return postiddeleted
    }
}

export const showdatapost = async ()=>{
const result = await Post.findAll(
  {attributes: ['id', 'title']
    ,include:[
    {
    model:Comment,
 attributes: ['id', 'content']
  },
  {
    model:userModel,
 attributes: ['id', 'email']
  }]}
)
return result
}
export const commentcount = async ()=>{
const count = await Post.findAll(
  {attributes: ['id', 'title']
    ,include:[
    {
    model:Comment,
 attributes: ['id']
  }]})
 let result = count.map(post => ({
    id: post.id,
    title: post.title,
    commentCount: post.Comments.length
    
  }));
    

  
  return result

}