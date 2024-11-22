import PropTypes from "prop-types";
// rating
import { IoStarOutline, IoStar } from "react-icons/io5";
// detail
import {
  AiOutlineBarChart,
  AiOutlineFieldTime,
  AiOutlineDollarCircle,
} from "react-icons/ai";
import { MdAccessTime } from "react-icons/md";
import { GoShieldCheck } from "react-icons/go";
import { FiUser } from "react-icons/fi";
import { Link } from "react-router-dom";

export function CardFasilitas({ icon, title }) {
  CardFasilitas.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
  };
  return (
    <div className="bg-white md:py-4 md:px-6 p-2 rounded-md shadow-inner">
      <div className="flex flex-col justify-center items-center text-center md:gap-6 gap-3">
        <span className="text-[#999999]">{icon}</span>
        <span className=" text-[#999999] tracking-wide font-medium text-sm md:text-lg">
          {title}
        </span>
      </div>
    </div>
  );
}

export function CardDetailBank({ icon, title, value }) {
  CardDetailBank.propTypes = {
    icon: PropTypes.node,
    title: PropTypes.string,
    value: PropTypes.string,
  };
  return (
    <div className="flex md:gap-4 gap-2">
      <span className="md:text-3xl text-2xl">{icon}</span>
      <span className="md:pt-1">
        {title}: {value}
      </span>
    </div>
  );
}

export function CardProductBank() {
  const banks = [
    {
      name: "Mandiri",
      image: "../../../../public/images/mandiri.png",
      title: "Mandiri Bunga Special Tengah Imlek 2023",
      rating: 5,
      reviews: 14,
      users: 220,
      fixRate: "3.88",
      maxTenor: "12",
      loanToValue: "1",
      guarantee: "Ruko, Rukan, Rumah, Apartemen",
      target: "Karyawan, Pengusaha",
      commission: "1",
    },
    {
      name: "BCA",
      image: "../../../../public/images/bca.png",
      title: "BCA Promo KPR Fix Rate 2023",
      rating: 4,
      reviews: 20,
      users: 180,
      fixRate: "4.25",
      maxTenor: "15",
      loanToValue: "0.9",
      guarantee: "Rumah, Apartemen",
      target: "Karyawan",
      commission: "0.8",
    },
    {
      name: "BRI",
      image: "../../../../public/images/bri.png",
      title: "BRI Kredit Usaha Rakyat (KUR) 2023",
      rating: 5,
      reviews: 25,
      users: 500,
      fixRate: "6.00",
      maxTenor: "5",
      loanToValue: "0.95",
      guarantee: "Tanah, Rumah",
      target: "Pengusaha UMKM",
      commission: "1.5",
    },
    {
      name: "CIMB Niaga",
      image: "../../../../public/images/cimb.png",
      title: "CIMB Niaga Kredit Pemilikan Rumah 2023",
      rating: 4,
      reviews: 18,
      users: 150,
      fixRate: "4.00",
      maxTenor: "10",
      loanToValue: "0.85",
      guarantee: "Rumah",
      target: "Karyawan, Pengusaha",
      commission: "1.2",
    },
    {
      name: "Danamon",
      image: "../../../../public/images/danamon.png",
      title: "Danamon Kredit Usaha Rakyat 2023",
      rating: 5,
      reviews: 12,
      users: 120,
      fixRate: "5.75",
      maxTenor: "7",
      loanToValue: "0.9",
      guarantee: "Tanah, Ruko",
      target: "UMKM",
      commission: "1.8",
    },
  ];

  return (
    <>
      {banks.map((bank, index) => (
        <div key={index} className="container p-4">
          <div className="bg-white md:p-4 p-6 grid grid-cols-1 md:grid-cols-3 rounded-[5px] relative">
            {/* Rating Section */}
            <div className="md:ml-2">
              {/* Logo */}
              <div className="flex justify-center items-center">
                <img
                  src={bank.image}
                  alt={bank.name}
                  className="w-[200px] h-[150px]"
                />
              </div>
              <div className="flex flex-row gap-10 justify-center mr-8">
                <div className="flex flex-col justify-center items-center gap-2">
                  <span className="text-gray">Rating :</span>
                  <span className="flex flex-row">
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < bank.rating ? (
                        <IoStar
                          key={i}
                          className="md:text-3xl text-2xl text-loan"
                        />
                      ) : (
                        <IoStarOutline
                          key={i}
                          className="md:text-3xl text-2xl text-gray"
                        />
                      )
                    )}
                  </span>
                  <span className="">{bank.reviews} Reviews</span>
                </div>
                <span className="border-l-2 border-gray"></span>
                <div className="flex flex-col justify-center items-center gap-2">
                  <span className="text-gray">User :</span>
                  <span>{bank.users}</span>
                  <span>Users yearly</span>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="md:w-[600px] flex flex-col pt-4">
              <h1 className="md:text-3xl text-xl font-medium text-loan md:text-start text-center">
                <span className="text-[#4A5055]">{bank.name}</span> {bank.title}
              </h1>
              <div className="flex flex-row md:gap-10 md:pt-4 pt-2 gap-6 text-gray">
                {/* Detail 1 */}
                <div className="flex flex-col gap-4">
                  <CardDetailBank
                    icon={<AiOutlineBarChart />}
                    title="Fix Rate (Year)"
                    value={bank.fixRate}
                  />
                  <CardDetailBank
                    icon={<MdAccessTime />}
                    title="Max Tenor"
                    value={bank.maxTenor}
                  />
                  <CardDetailBank
                    icon={<AiOutlineFieldTime />}
                    title="Loan to Value"
                    value={bank.loanToValue}
                  />
                </div>
                {/* Detail 2 */}
                <div className="flex flex-col gap-4">
                  <CardDetailBank
                    icon={<GoShieldCheck />}
                    title="Jaminan"
                    value={bank.guarantee}
                  />
                  <CardDetailBank
                    icon={<FiUser />}
                    title="Target"
                    value={bank.target}
                  />
                  <CardDetailBank
                    icon={<AiOutlineDollarCircle />}
                    title="Komisi"
                    value={bank.commission}
                  />
                </div>
              </div>
            </div>

            {/* Button */}
            <div className="md:absolute right-[50px] top-[120px] text-center">
              <button className=" w-full mt-3 py-2 px-9 rounded-[3px] text-loan shadow-custom hover:bg-lightBlue  transition ease-in-out duration-300">
                <Link
                  to={`/dashboard/products/productbank/${bank.name.toLowerCase()}`}
                  className="font-medium md:text-xl text-lg"
                >
                  Detail
                </Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
