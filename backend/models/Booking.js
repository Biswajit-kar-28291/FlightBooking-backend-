const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");
const User = require("./User");

const Booking = sequelize.define("Booking", {
  fromCity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  toCity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  travelDate: {
    type: DataTypes.DATEONLY,
    allowNull: false
  }
});

// 🔗 RELATION
User.hasMany(Booking, { foreignKey: "userId" });
Booking.belongsTo(User, { foreignKey: "userId" });

module.exports = Booking;
