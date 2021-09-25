const Sequelize = require('sequelize');

const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'roles';

const Role = sequelize.define('Role', {
  role_name: {
    type: Sequelize.STRING,
  },
  role_alias: {
    type: Sequelize.STRING,
  },
  created_by: {
    type: Sequelize.STRING,
  },
  updated_by: {
    type: Sequelize.STRING,
  }
}, { hooks, tableName });

// eslint-disable-next-line
Role.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Role;
