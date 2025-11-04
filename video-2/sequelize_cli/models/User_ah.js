'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_ah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User_ah.init({
    firstName_ah: DataTypes.STRING,
    lastName_ah: DataTypes.STRING,
    email_ah: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User_ah',
  });
  return User_ah;
};