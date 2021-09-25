const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'scopes';

const Scope = sequelize.define('Scope', {
  scope_name: {
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
Scope.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Scope;
