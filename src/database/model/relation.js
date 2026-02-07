import Post from './posts.model.js';
import Comment from './comment.model.js';
import { userModel } from './user.model.js';

// User relations
userModel.hasMany(Post, { foreignKey: 'userId', onDelete: 'CASCADE' });
Post.belongsTo(userModel, { foreignKey: 'userId' });

userModel.hasMany(Comment, { foreignKey: 'userId', onDelete: 'CASCADE' });
Comment.belongsTo(userModel, { foreignKey: 'userId' });

// Post - Comment relations
Post.hasMany(Comment, { foreignKey: 'postId', onDelete: 'CASCADE' });
Comment.belongsTo(Post, { foreignKey: 'postId' });

export {
  Post,
  Comment,
  userModel
};
