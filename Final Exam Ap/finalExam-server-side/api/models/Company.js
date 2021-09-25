const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'Company';

const Company = sequelize.define('company', {
  company_name: {
    type: Sequelize.STRING,
  },
  company_address: {
    type: Sequelize.STRING,
  },
  company_cylinder: {
    type: Sequelize.INTEGER,
  },
  company_price: {
    type: Sequelize.INTEGER,
  },
  created_by: {
    type: Sequelize.STRING,
  },
  updated_by: {
    type: Sequelize.STRING,
  },
  status: {
    type: Sequelize.BOOLEAN,
    allowNull: false,
    defaultValue: true
  },
  status_reason: {
    type: Sequelize.STRING,
  },
}, { hooks, tableName });

// eslint-disable-next-line
Company.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Company;