const mongoose = require('mongoose');
const { config } = require('../config/config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

mongoose
  .connect(
    `${config.dbconnection}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}`,
    {
      dbName: config.dbName,
    }
  )
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error(error));
