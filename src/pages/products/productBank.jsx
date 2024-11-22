import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

function ProductBankPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const isDetailPage = location.pathname.includes(
    "/dashboard/products/productbank/"
  );

  return (
    <>
      {!isDetailPage ? (
        <nav className="bg-white">
          <ul className="flex flex-row justify-center items-center">
            <li className="py-4 px-10">
              <Link
                to="/dashboard/products/productbank"
                className={`text-lg md:text-xl font-semibold py-4 px-9 ${
                  location.pathname === "/dashboard/products/productbank"
                    ? "text-loan border-b-4 border-loan"
                    : "hover:text-loan hover:border-b-4 hover:border-loan"
                }`}
              >
                Bank
              </Link>
            </li>
            <li className="py-4 px-10">
              <Link
                to="/dashboard/products/productbank/developer"
                className={`md:text-xl text-lg font-semibold py-4 px-9 ${
                  location.pathname ===
                  "/dashboard/products/productbank/developer"
                    ? "text-loan border-b-4 border-loan"
                    : "hover:text-loan hover:border-b-4 hover:border-loan"
                }`}
              >
                Developer
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="bg-white shadow-lg">
          <div className="p-4 flex flex-row justify-between items-center">
            <div className="flex flex-row items-center md:ml-5 md:gap-6 gap-2">
              <button
                onClick={() => navigate(-1)}
                className="text-white font-semibold rounded-full p-2 bg-loan"
              >
                <IoArrowBack className="md:text-3xl text-xl" />
              </button>
              <h1 className="md:text-2xl text-xl font-medium text-[#4F5051]">
                Bank Product Detail
              </h1>
            </div>
            <div className="border flex flex-row md:gap-6 gap-2 md:mr-5 text-white">
              <button
                type="button"
                className="rounded-[5px] py-1 px-4 flex md:gap-4 gap-2 justify-center items-center bg-[#005274]"
              >
                <span>
                  <FiEdit />
                </span>
                <span>Edit Product</span>
              </button>
              <button
                type="button"
                className="rounded-[5px] py-1 px-4 flex md:gap-4 gap-2 justify-center items-center bg-[#FF0000]"
              >
                <span>
                  <RiDeleteBin6Line />
                </span>
                <span>Edit Product</span>
              </button>
            </div>
          </div>
        </nav>
      )}

      {/* Render Child Routes */}
      <div className="md:mx-4 md:mt-4">
        <Outlet />
      </div>
    </>
  );
}

export default ProductBankPage;
