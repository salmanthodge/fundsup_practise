const config = require("./config.constants");
const dbTableNames = require("./db_table_names.constants");
const masterConstants = require("./master.constants");

const sharedConstants = {
  appConfig: config,
  dbTableNames,
  masterConstants,
};

module.exports = sharedConstants;