import {
  CardFasilitas,
  CardProductBank,
} from "../../../elements/cardProduct/cardProduct";
import { IoHomeOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { FiCreditCard } from "react-icons/fi";
import { TbPigMoney } from "react-icons/tb";
import { LiaBuildingSolid } from "react-icons/lia";
import { GrSearch } from "react-icons/gr";
import { useState } from "react";
import CategoryFilter from "../../../elements/input/category";
import { IoMdAdd } from "react-icons/io";

function ProductBankView() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Kredit Pemilikan..."
  );

  const categories = [
    "Kredit Pemilikan...",
    "Dashboard",
    "Products",
    "Bank",
    "Marketing Tools",
  ];

  return (
    <>
      {/* fasilitas */}
      <div className="container p-4">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-4">
          <CardFasilitas
            icon={<IoHomeOutline className="md:text-6xl text-4xl" />}
            title={"KPR dan Multiguna"}
          />
          <CardFasilitas
            icon={<FaRegUser className="md:text-6xl text-4xl" />}
            title={"Refinancing"}
          />
          <CardFasilitas
            icon={<FiCreditCard className="md:text-6xl text-4xl" />}
            title={"Kredit Modal Usaha dan Investasi"}
          />
          <CardFasilitas
            icon={<TbPigMoney className="md:text-6xl text-4xl" />}
            title={"Deposito"}
          />
          <CardFasilitas
            icon={<LiaBuildingSolid className="md:text-6xl text-4xl" />}
            title={"Take Over dan Bridging Loan"}
          />
        </div>
      </div>
      {/* filter */}
      <div className="container p-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {/* search */}
          <div className="relative md:w-[450px]">
            <input
              type="text"
              placeholder="Cari berdasarkan nama"
              value=""
              className="w-full px-4 py-3 border-gray rounded-lg shadow-inner focus:outline-none focus:ring-2 focus:ring-loan focus:border-loan"
            />
            <div className="absolute inset-y-0 right-3 flex items-center pointer-events-none">
              <GrSearch className="text-loan text-xl" />
            </div>
          </div>
          {/* category */}
          <div className="md:w-[320px] md:ml-[165px]">
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>
          {/* sort */}
          <button
            type="button"
            className="md:w-[150px] md:ml-[200px] bg-white rounded-lg py-3"
          >
            <div className="flex justify-center items-center gap-4">
              <img
                src="../../../../../public/images/az.png"
                alt=""
                className="w-7"
              />
              <p className="font-semibold">Short</p>
            </div>
          </button>
          {/* tambah product */}
          <button
            type="button"
            className="md:w-[230px] md:ml-16 bg-loan text-white rounded-lg py-3"
          >
            <div className="relative flex justify-center items-center">
              <span className="absolute left-5">
                <IoMdAdd className="md:text-2xl text-xl" />
              </span>
              <span className="md:pl-6 md:text-lg">Tambah Product</span>
            </div>
          </button>
        </div>
      </div>
      {/* product bank */}
      <div>
        <CardProductBank />
      </div>
    </>
  );
}

export default ProductBankView;
