/** @type {import('sequelize-cli').Migration} */

export default {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Reviews", [{
      id: "e1bc7da3-61fe-4ece-bbd7-7bd1a5b9dcce",
      name: "Umar Chibueike",
      email: "umar@chibueike.com",
      phone: "+2349072789964",
      cv: "https://nhggysjkfuigvbjkvgui",
      description: "Application for the role of a backend developer at kuda bank",
      createdAt: new Date(),
      updatedAt: new Date(),
    }
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
