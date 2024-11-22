import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  useEffect(() => {
    setIsNavbarVisible(!location.pathname.startsWith("/dashboard"));
  }, [location.pathname]);

  if (!isNavbarVisible) return null;
  return (
    <div className="py-4 px-8 flex justify-between bg-loan text-white">
      <div className="flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/dashboard">Dashboard</Link>
      </div>
    </div>
  );
}

export default Navbar;
