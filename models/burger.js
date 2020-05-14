 const Sequelize = require("sequelize");
module.exports = function(sequelize, DataTypes) {
  var burger = sequelize.define("burger", {

    burger_name: {
        type: DataTypes.STRING,
    },

    devoured: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },

    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
  });

     return burger;
};