import axios from "@/assets/js/axios";
import InterfaceConfig from "./Interface";

const host = '...'

const createXhr = (url, params) => {
  return new Promise((resolve, reject) => {
    axios
      .post(host + url, params)
      .then(function (res) {
        // ...
        resolve(res);
      })
      .catch(function (err) {
        reject(err);
      });
  });
};

export default {
  login: (params) => {
    return createXhr(InterfaceConfig.login.url, params);
  },
};
