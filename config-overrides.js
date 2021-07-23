const PROCESS_ARGV_ARR = process.argv.splice(2);
const path = require("path");

process.env.REACT_APP_USING_PROJECT = PROCESS_ARGV_ARR[0] || "default"; // 项目名

module.exports = function override(config, env) {
  config.resolve.alias = {
    ...config.resolve.alias,
    "@": path.resolve(__dirname, "src/"),
  };
  return config;
};
