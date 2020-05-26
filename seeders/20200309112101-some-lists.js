"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkInsert(
      "todoLists",
      [
        {
          name: "Matias Work List",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          name: "Matias Personal List",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 1
        },
        {
          name: "Leo's futbol list",
          createdAt: new Date(),
          updatedAt: new Date(),
          userId: 2
        }
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return await queryInterface.bulkDelete("todoLists", null, {});
  }
};
