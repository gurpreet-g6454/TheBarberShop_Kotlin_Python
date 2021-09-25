const development = {
  database: process.env.SQL_DATABASE,
  username: process.env.SQL_USER,
  password: process.env.SQL_PASS,
  host: process.env.SQL_HOST,
  dialect: 'postgres' || 'mysql' || 'mssql',
};

const testing = {
  database: 'philips_1nventory',
  username: 'sa',
  password: 'Admin@123',
  host: 'YY193799',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

const production = {
  database: 'philips_1nventory',
  username: 'sa',
  password: 'Admin@123',
  host: 'YY193799',
  dialect: 'sqlite' || 'mysql' || 'postgres',
};

module.exports = {
  development,
  testing,
  production,
};
