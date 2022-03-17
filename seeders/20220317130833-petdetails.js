"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "petdetails",
      [
        {
          name: "Dudley",
          breed: "poodle",
          weight: "150kg",
          years: 5,
          months: 2,
          allergies: "none",
          condition: "none",
          insured: true,
          plan: "foodplan",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("petdetails", null, {});
  },
};
