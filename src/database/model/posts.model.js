import { DataTypes,Model } from "sequelize";
import { sequelize } from "../connection.js";


class Post extends Model {}

Post.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  title: {
    type: DataTypes.STRING
  },
  content: {
    type: DataTypes.TEXT
  },
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id"
    }
  }
}, {
  sequelize,
  modelName: "Post",
  timestamps: true
});

// userModel.hasMany(Post,{
//   onDelete:'CASCADE',
//   onUpdate:'CASCADE',

// });
// Post.belongsTo(userModel);
// Post.hasMany(Comment, { foreignKey: 'postId' });
// Comment.belongsTo(Post, { foreignKey: 'postId' });


export default Post;
