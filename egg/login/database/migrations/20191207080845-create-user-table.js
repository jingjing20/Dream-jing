'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const {INTEGER,DATE,STRING} = Sequelize;
    return queryInterface.createTable('users',{
      user_id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      username: {
        type: STRING(100),
        allowNUll: false
      },
      email: {
        type: STRING(100),
        allowNUll: false
      },
      password: {
        type: STRING(255),
        allowNUll: false
      },
      avatarUrl: STRING(255),
      mobile: STRING(11),
      sex: {type: INTEGER, defaultValue:0 },
      created_at: DATE,
      updated_at: DATE,
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('users');
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
