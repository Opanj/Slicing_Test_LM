import { useEffect, useRef, useState } from "react";
import { BiCaretDown } from "react-icons/bi";
import { PropTypes } from "prop-types";

DropdownMenu.propTypes = {
  menuItems: PropTypes.array,
  labelMenu: PropTypes.node,
  iconDown: PropTypes.node,
};
function DropdownMenu({ menuItems, labelMenu }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeDropdown);
    return () => {
      document.removeEventListener("mousedown", closeDropdown);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Trigger Button */}
      <button
        onClick={toggleDropdown}
        className="inline-flex justify-items-center gap-2 text-gray items-center"
      >
        {labelMenu}
        <BiCaretDown size={18} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div
          className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="menu-button"
        >
          <div className="py-1" role="none">
            {menuItems.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray block px-4 py-2 text-sm hover:bg-gray-100"
                role="menuitem"
              >
                <span className="flex flex-row justify-items-center items-center">
                  {item.icon && <span className="mr-2">{item.icon}</span>}
                  {item.label}
                </span>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
