import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

export function DetailBank({ title, value }) {
  DetailBank.propTypes = {
    title: PropTypes.string,
    value: PropTypes?.string,
    isEditabled: PropTypes.bool,
  };
  return (
    <form action="">
      <div className="grid grid-cols-2 py-2 relative">
        <div className="py-2 md:w-[300px] w-[150px]">
          <h1 className="font-semibold">{title}</h1>
        </div>
        <div className="md:w-[860px] w-[275px] absolute md:left-[300px] left-[150px] top-[8px]">
          <input
            type="text"
            value={value}
            className="w-full py-2 bg-[#EBEBEB] pl-4 rounded-[5px]"
          />
        </div>
      </div>
    </form>
  );
}

function ProductDetailBank() {
  const { name } = useParams();

  const banks = [
    {
      name: "mandiri",
      image: "/images/mandiri.png",
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
      appraisal: "1",
      floating: "1",
      penaltyFee: "1",
      minTenor: "1",
      maxLoanAmount: "1",
      minLoanAmount: "1",
      interestRate: "1",
      keterangan:
        "Mandiri KPR adalah kredit pemilikan rumah (KPR) bank mandiri yang diberikan secara perseorangan untuk membeli rumah tinggal/apartemen/ruko/rukan, baik melalui developer atau tidak.",
      url: "null",
    },
  ];

  const bank = banks.find((bank) => bank.name === name);

  if (!bank) {
    return <div>Bank not found</div>;
  }

  return (
    <>
      <div className="container p-4">
        <div className="bg-white rounded-lg">
          <div className="py-6 px-8">
            <DetailBank title="Bank" value={bank.name} />
            <DetailBank title="Nama Product" value={bank.title} />
            <DetailBank title="Jaminan" value={bank.guarantee} />
            <DetailBank title="Target Market" value={bank.target} />
            <DetailBank title="Komisi" value={bank.commission} />
            <DetailBank title="Appraisal" value={bank.appraisal} />
            <DetailBank title="Floating" value={bank.floating} />
            <DetailBank title="Loan to Value" value={bank.loanToValue} />
            <DetailBank title="Penalty Fee" value={bank.penaltyFee} />
            <DetailBank title="Interest Rate" value={bank.interestRate} />
            <DetailBank title="Fix Rate %" value={bank.fixRate} />
            <DetailBank title="Fix Rate (year)" value={bank.fixRate} />
            <DetailBank title="Max Tenor (year)" value={bank.fixRate} />
            <DetailBank title="Keterangan" value={bank.keterangan} />
            <DetailBank title="URL" value={bank.url} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetailBank;
