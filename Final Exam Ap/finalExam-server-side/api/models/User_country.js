const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'User_country';

const UserCountry = sequelize.define('User_country', {
  country_id: {
    type: Sequelize.INTEGER,
  },
  user_id: {
    type: Sequelize.INTEGER,
  },
  created_by: {
    type: Sequelize.STRING,
  },
  updated_by: {
    type: Sequelize.STRING,
  }
}, { hooks, tableName });

// eslint-disable-next-line
UserCountry.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = UserCountry;
