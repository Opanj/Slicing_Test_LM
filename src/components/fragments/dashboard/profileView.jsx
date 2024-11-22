import { BiBuildings } from "react-icons/bi";
import { GoMail } from "react-icons/go";
import { FiPhone } from "react-icons/fi";

function ProfileView() {
  return (
    <>
      <div className="bg-white p-6 sm:p-10 flex flex-col sm:flex-row md:items-center sm:items-start gap-6 sm:gap-8">
        <div className="flex">
          <img
            src="../../public/images/profile.png"
            alt="profile"
            className="w-24 h-24 sm:w-32 sm:h-32 rounded-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="text-xl md:text-2xl text-loan font-semibold">
            YOHANNES AFFANDY (JOJO)
          </h1>
          <div className="flex flex-col sm:flex-row sm:gap-6">
            <div className="flex flex-col gap-4 sm:border-r sm:pr-6 border-gray">
              <div className="flex items-center gap-3">
                <span className="rounded-full p-2 bg-lightBlue text-loan">
                  <BiBuildings size={24} />
                </span>
                <span className="text-sm sm:text-base">
                  Loan Market Office Dev
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full p-2 bg-lightBlue text-loan font-semibold">
                  ID:
                </span>
                <span className="text-sm sm:text-base">LM9990001</span>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <span className="rounded-full p-2 bg-lightBlue text-loan">
                  <GoMail size={22} />
                </span>
                <span className="text-sm sm:text-base">
                  it@loanmarket.co.id
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="rounded-full p-2 bg-lightBlue text-loan">
                  <FiPhone size={22} />
                </span>
                <span className="text-sm sm:text-base">+62 812-3456-7890</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileView;
