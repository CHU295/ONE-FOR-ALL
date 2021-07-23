import webSettingObj from "@/project/index";
import CreateRoute from "@/source/module/createRoute";

function Front(props) {
  return (
    <div className="main-app">
      {webSettingObj.currentProject}
      {CreateRoute(
        {
          ...props,
        },
        false
      )}
    </div>
  );
}

export default Front;
