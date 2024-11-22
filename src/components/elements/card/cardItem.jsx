import {
  MdOutlineContactPhone,
  MdOutlineInsertDriveFile,
  MdOutlineShoppingBag,
} from "react-icons/md";
import { AiOutlineBank } from "react-icons/ai";
import PropTypes from "prop-types";

function Card({ label, icon, value }) {
  Card.propTypes = {
    label: PropTypes.string.isRequired,
    icon: PropTypes.node,
    value: PropTypes.number,
  };
  return (
    <div className="md:bg-white p-1 md:rounded-md md:shadow-lg">
      <div className="bg-white w-[200px] h-[100px] flex gap-5 justify-center items-center rounded-md">
        <span className=" rounded-full p-2 bg-lightBlue text-loan">{icon}</span>
        <div className="flex flex-col justify-center items-center">
          <span className="font-semibold text-xl">{label}</span>
          <span className="text-loan text-3xl font-bold pt-2">{value}</span>
        </div>
      </div>
    </div>
  );
}
function CardItem() {
  return (
    <>
      <div className="flex flex-row gap-4 w-[883px] mx-4 my-10">
        <div className="flex flex-row gap-4">
          <Card
            icon={<MdOutlineContactPhone size={35} />}
            label="CONTACT"
            value={51}
          />
          <Card
            icon={<MdOutlineInsertDriveFile size={35} />}
            label="LOAN"
            value={56}
          />
        </div>
        <div className="flex flex-row gap-4">
          <Card
            icon={<MdOutlineShoppingBag size={35} />}
            label="PRODUCT"
            value={80}
          />
          <Card icon={<AiOutlineBank size={35} />} label="BANK" value={30} />
        </div>
      </div>
    </>
  );
}

export default CardItem;
