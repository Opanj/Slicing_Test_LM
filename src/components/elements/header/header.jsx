import DropdownMenu from "../dropdown/dropdown";
import { IoMdNotificationsOutline } from "react-icons/io";
import PropTypes from "prop-types";

Header.propTypes = {
  title: PropTypes.string,
};
function Header({ title }) {
  const notificationItems = [
    {
      label: "New Notification",
      link: "#notification",
    },
    { label: "Another Alert", link: "#alert" },
  ];
  const userMenuItems = [
    { label: "Profile", link: "#profile" },
    { label: "Settings", link: "#settings" },
    { label: "Logout", link: "#logout" },
  ];
  return (
    <>
      <header className="h-[70px] bg-white border-b-2 border-gray px-4 md:px-10">
        <div className="flex md:justify-between justify-items-center items-center h-full gap-2">
          <h1 className="text-xl sm:text-2xl font-semibold text-gray">
            {title}
          </h1>
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="py-1 px-4 border-r border-l border-gray sm:block">
              <DropdownMenu
                menuItems={notificationItems}
                labelMenu={<IoMdNotificationsOutline size={24} />}
              />
            </span>
            <span className="text-gray font-medium py-1 sm:pr-4 sm:border-r border-gray">
              <DropdownMenu
                menuItems={userMenuItems}
                labelMenu={<span className=" sm:inline">YOHANNES AFFANDY</span>}
              />
            </span>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
