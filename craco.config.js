const PROCESS_ARGV_ARR = process.argv.splice(2);
process.env.REACT_APP_USING_PROJECT = PROCESS_ARGV_ARR[0] || "default"; // 项目名

const path = require("path");
const webSettingObj = require("./src/project/" +
  process.env.REACT_APP_USING_PROJECT +
  "/index.js");

process.env.REACT_APP_USING_CDN = webSettingObj.useCDN ? 1 : 0;

module.exports = {
  webpack: {
    alias: {
      "@": path.resolve(__dirname, "src/"),
    },
    configure: (webpackConfig, { env, paths }) => {
      return {
        ...webpackConfig,
        externals:
          process.env.REACT_APP_USING_CDN === 1
            ? {
                react: "React",
                "react-dom": "ReactDOM",
              }
            : {},
      };
    },
  },
};
