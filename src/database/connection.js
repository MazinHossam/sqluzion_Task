import {Sequelize} from 'sequelize'
import {database_Name,database_Password,database_user} from '../../config/env.service.js'


export const sequelize = new Sequelize(database_Name, database_user, database_Password, {
  host: 'localhost',
  dialect: 'mysql'
});


export const databaseconnection=async()=>{
    try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}


export const databaseSync=async( )=>{
    try {
  await sequelize.sync({alter:false});
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
}