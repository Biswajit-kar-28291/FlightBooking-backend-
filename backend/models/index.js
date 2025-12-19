const Sequelize = require("sequelize");
const sequelize = require("../config/db");

const UserModel = require("./User");
const User = UserModel(sequelize, Sequelize.DataTypes);

sequelize.sync()
  .then(() => console.log("Database synced"))
  .catch(err => console.log(err));

module.exports = {
  sequelize,
  User
};
