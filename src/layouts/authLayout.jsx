import SidebarMenu from "../components/fragments/sidebar/sidebar";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <>
      <div className="flex h-screen">
        <SidebarMenu />
        <div className="flex-1 relative">
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default AuthLayout;
