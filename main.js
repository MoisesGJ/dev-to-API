require('dotenv').config();

const mongoose = require('mongoose');
const server = require('./src/server');

const USER = process.env.USER_DB;
const PASSWORD = process.env.PASSWORD_DB;
const HOST = process.env.HOST_DB;
const NAME = process.env.NAME_DB;
const PORT = process.env.SERVER_PORT;

mongoose
  .connect(`mongodb+srv://${USER}:${PASSWORD}@${HOST}/${NAME}`)
  .then(() => {
    console.log('DB CONNECT');

    server.listen(PORT, () => {
      console.log(`Server listening on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error('DB Error', err);
  });
