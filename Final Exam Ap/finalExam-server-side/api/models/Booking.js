const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {
};

const tableName = 'Booking';

const Booking = sequelize.define('booking', {
  user_email: {
    type: Sequelize.STRING,
  },
  username: {
    type: Sequelize.STRING,
  },
  booking_type: {
    type: Sequelize.STRING,
  },
  booking_type_id: {
    type: Sequelize.INTEGER,
  },
  booking_status: {
    type: Sequelize.STRING,
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
Booking.prototype.toJSON = function () {
  const values = Object.assign({}, this.get());

  return values;
};

module.exports = Booking;