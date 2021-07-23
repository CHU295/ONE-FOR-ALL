import React from "react";

import Front from "@/source/layout/Front/index";
import A from "@/source/page/A";

const routes = [
  {
    path: "/",
    component: () => {
      return <div>empty_route</div>;
    },
  },
  {
    path: "/Front",
    component: Front,
    routes: [
      {
        path: "/Front/A",
        component: A,
      },
    ],
  },
];

export default routes;
