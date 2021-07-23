import { Switch, Route, Redirect } from "react-router-dom";
import webSettingObj from "@/project/index";

const CreateRoute = (props, exact = false) => {
  let { routes } = props;
  console.log(props);
  return (
    <Switch>
      {routes.map((route, i) => (
        <Route
          exact={route.path === "/" || exact}
          path={route.path}
          key={route.path + i}
          render={(prop) => {
            return route.path !== "/" ? (
              <route.component
                {...props}
                {...prop}
                {...route}
                routes={route.routes}
              />
            ) : (
              <Redirect to={webSettingObj.home_route_path} />
            );
          }}
        />
      ))}
    </Switch>
  );
};

export default CreateRoute;
