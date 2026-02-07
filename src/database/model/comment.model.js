import { DataTypes,Model } from "sequelize";
import { sequelize } from "../connection.js";



class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true 
  },
  content: {
    type: DataTypes.TEXT
  },
    postId:{
        type: DataTypes.INTEGER,
    references: {
      model: "posts",
      key: "id"
    }  
    } ,
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: "users",
      key: "id"
    }
  }
},
  {
  sequelize,
  modelName: "Comment",
  timestamps: true
});

// userModel.hasMany(Comment,{
//   onDelete:'CASCADE',
//   onUpdate:'CASCADE',

// });
// Comment.belongsTo(userModel);



export default Comment;
