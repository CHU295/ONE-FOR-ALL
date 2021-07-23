import React from "react";
import ReactDOM from "react-dom";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import CreateRoute from "@/source/module/createRoute";
let routes = require("@/project/" +
  process.env.REACT_APP_USING_PROJECT +
  "/router").default; // 读取路由

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      {CreateRoute({
        routes: routes,
      })}
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
