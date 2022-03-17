'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class petdetail extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  petdetail.init({
    name: DataTypes.STRING,
    breed: DataTypes.STRING,
    weight: DataTypes.STRING,
    years: DataTypes.INTEGER,
    months: DataTypes.INTEGER,
    allergies: DataTypes.STRING,
    condition: DataTypes.STRING,
    insured: DataTypes.BOOLEAN,
    plan: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'petdetail',
  });
  return petdetail;
};