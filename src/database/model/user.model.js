import { DataTypes } from "sequelize";
import { sequelize } from "../connection.js";


export const userModel=sequelize.define("user",{
    id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },

  userName:{
        type:DataTypes.STRING,
        allowNull:false
    ,validate:{
 len: [2]
    }}
      ,email:{
    type : DataTypes.STRING,
    allowNull:false,
    unique: true,
    validate:{
          isEmail: true
    }

  }
  ,password:{
        type : DataTypes.STRING,
    allowNull:false,
   validate:{
      len: [6, 100]
   }
   
  }

   
})