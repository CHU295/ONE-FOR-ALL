import React from "react";

import Front from "@/source/layout/Front/index";
import B from "@/source/page/B";

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
        path: "/Front/B",
        component: B,
      },
    ],
  },
];

export default routes;
