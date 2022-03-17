'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('petdetails', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      breed: {
        type: Sequelize.STRING
      },
      weight: {
        type: Sequelize.STRING
      },
      years: {
        type: Sequelize.INTEGER
      },
      months: {
        type: Sequelize.INTEGER
      },
      allergies: {
        type: Sequelize.STRING
      },
      condition: {
        type: Sequelize.STRING
      },
      insured: {
        type: Sequelize.BOOLEAN
      },
      plan: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('petdetails');
  }
};