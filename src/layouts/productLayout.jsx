import { Outlet } from "react-router-dom";
import Header from "../components/elements/header/header";

function AuthProductLayout() {
  return (
    <>
      <div className="absolute md:inset-0 md:left-[230px]">
        <Header title={"Product"} />
        <div className="">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AuthProductLayout;
