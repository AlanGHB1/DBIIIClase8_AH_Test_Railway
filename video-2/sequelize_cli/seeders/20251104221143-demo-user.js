"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("user_ahs", [
      {
        firstName_ah: "Alan",
        lastName_ah: "Hidalgo",
        email_ah: "example@example.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("user_ahs", null, {});
  },
};
