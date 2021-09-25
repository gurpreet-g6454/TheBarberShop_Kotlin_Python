const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'Hospitals';

const Hospital = sequelize.define('hospital', {
  hospital_name: {
    type: Sequelize.STRING,
  },
  hospital_website: {
    type: Sequelize.STRING,
  },
  hospital_bed: {
    type: Sequelize.INTEGER,
  },
  hospital_price: {
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
Hospital.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Hospital;