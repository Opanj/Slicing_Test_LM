import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";

function DropdownSubMenu({ label, icon, subItems }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false); // Menutup dropdown jika klik di luar
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <li className="py-1" ref={dropdownRef}>
      {/* Dropdown Trigger */}
      <button
        onClick={toggleDropdown}
        className={`flex justify-between items-center w-full gap-4 px-4 py-3 rounded-[10px] ${
          isOpen ? "bg-loan text-white" : "hover:bg-loan hover:text-white"
        }`}
      >
        <div className="flex items-center gap-4">
          <span>{icon}</span>
          <span>{label}</span>
        </div>
        {isOpen ? <BiChevronUp size={24} /> : <BiChevronDown size={24} />}
      </button>
      {/* Dropdown Menu */}
      {isOpen && (
        <ul className="ml-8 mt-2 space-y-1">
          {subItems.map((subItem, index) => (
            <li key={index}>
              <Link
                to={subItem.link}
                className={`block px-4 py-2 rounded-[10px] ${
                  location.pathname === subItem.link
                    ? "bg-loan text-white"
                    : "hover:bg-loan hover:text-white"
                }`}
              >
                {subItem.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

DropdownSubMenu.propTypes = {
  label: PropTypes.string.isRequired,
  icon: PropTypes.node,
  subItems: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default DropdownSubMenu;
