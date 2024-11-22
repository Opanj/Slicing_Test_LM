import {
  MdOutlineHome,
  MdOutlineContactPhone,
  MdOutlineInsertDriveFile,
  MdOutlineShoppingBag,
  MdWhatsapp,
} from "react-icons/md";
import { AiOutlineBank, AiOutlineQuestionCircle } from "react-icons/ai";
import { IoSpeedometerOutline, IoClose } from "react-icons/io5";
import { LiaLayerGroupSolid } from "react-icons/lia";
import { RxLayers } from "react-icons/rx";
import { RiArchiveLine } from "react-icons/ri";
import { Link, useLocation } from "react-router-dom";
import DropdownSubMenu from "../../elements/dropdown/dropdownSub";
import { useState } from "react";

function SidebarMenu() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    {
      name: "Dashboard",
      link: "/dashboard",
      icon: <MdOutlineHome size={26} />,
    },
    {
      name: "Contact",
      link: "/dashboard/contact",
      icon: <MdOutlineContactPhone size={23} />,
    },
    { name: "Loan", link: "#", icon: <MdOutlineInsertDriveFile size={24} /> },
    {
      name: "Products",
      link: "#",
      icon: <MdOutlineShoppingBag size={24} />,
      isDropdown: true, // indicator for dropdown
      subItems: [
        { name: "Bank Product", link: "/dashboard/products/productbank" },
        { name: "Product", link: "/dashboard/products/product" },
        {
          name: "Category Product",
          link: "/dashboard/products/productcategory",
        },
      ],
    },
    { name: "Bank", link: "#", icon: <AiOutlineBank size={24} /> },
    {
      name: "Credit Scoring",
      link: "#",
      icon: <IoSpeedometerOutline size={24} />,
    },
    { name: "FAQ`s", link: "#", icon: <AiOutlineQuestionCircle size={24} /> },
    { name: "Pipeline", link: "#", icon: <LiaLayerGroupSolid size={24} /> },
    { name: "Pipeline Developer", link: "#", icon: <RxLayers size={24} /> },
    { name: "Marketing Tools", link: "#", icon: <RiArchiveLine size={24} /> },
    {
      name: "Whatsapp",
      link: "#",
      icon: <MdWhatsapp size={24} />,
      isDropdown: true,
      subItems: [
        { name: "Whatsapp 1", link: "/dashboard/whatsapp1" },
        { name: "Whatsapp 2", link: "/dashboard/whatsapp2" },
      ],
    },
  ];

  return (
    <>
      {/* Toggle Button */}
      {!isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="p-2 bg-loan text-white fixed top-4 left-4 z-50 md:hidden rounded-md"
        >
          Menu
        </button>
      )}
      {isSidebarOpen && (
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-[250px] p-2 bg-loan text-white rounded-full z-50 md:hidden"
        >
          <IoClose size={24} />
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={` ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }  fixed top-0 left-0 w-[240px] h-full bg-white z-40 shadow-md transition-transform md:translate-x-0 md:block overflow-y-auto`}
      >
        <header className="flex justify-center items-center pb-8">
          <img
            src="../../public/images/loan.png"
            alt="loanmarket"
            className="w-[110px] h-[110px]"
          />
        </header>
        <nav className="px-4">
          <ul>
            {menuItems.map((menuItem, index) =>
              menuItem.isDropdown ? (
                <DropdownSubMenu
                  key={index}
                  label={menuItem.name}
                  icon={menuItem.icon}
                  subItems={menuItem.subItems}
                />
              ) : (
                <li key={index} className="py-1">
                  <Link
                    to={menuItem.link}
                    className={`flex gap-4 px-4 py-3 flex-row rounded-[10px] ${
                      location.pathname === menuItem.link
                        ? "bg-loan text-white"
                        : "hover:bg-loan hover:text-white"
                    }`}
                  >
                    <span>{menuItem.icon}</span>
                    <span>{menuItem.name}</span>
                  </Link>
                </li>
              )
            )}
          </ul>
        </nav>
      </aside>

      {/* Overlay (for mobile view) */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </>
  );
}

export default SidebarMenu;
