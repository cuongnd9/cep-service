const migration = {
  up: (queryInterface, Sequelize) => {
    const sql = '';
    return queryInterface.sequelize.query(sql, {
      type: Sequelize.QueryTypes.RAW,
    });
  },
};

export default migration;
