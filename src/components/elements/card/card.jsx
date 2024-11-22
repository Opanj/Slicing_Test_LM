import { FiEdit } from "react-icons/fi";
import PropTypes from "prop-types";

function CircleBar({
  percentage,
  size = 150,
  strokeWidth = 10,
  trackColor = "#C1C1C1",
  progressColor = "#17A9E2",
}) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  // calculate the offset
  const adjustedPercentage = percentage > 100 ? percentage % 100 : percentage;
  const rotations = Math.floor(percentage / 100);
  const offset = circumference - (adjustedPercentage / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      {/* SVG Circle */}
      <svg width={size} height={size}>
        {/* Background Circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke={trackColor}
          strokeWidth={strokeWidth}
        />
        {/* Progress Circle */}
        {[...Array(rotations + 1)].map((_, index) => (
          <circle
            key={index}
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke={progressColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={
              index < rotations ? 0 : offset // Set the offset for the last rotation
            }
            strokeLinecap="round"
            transform={`rotate(-90 ${size / 2} ${size / 2})`} // Rotate to start at the top
          />
        ))}
      </svg>
      {/* Percentage Text */}
      <div
        className="absolute inset-0 flex items-center justify-center text-lg font-semibold"
        style={{ fontSize: size * 0.2 }}
      >
        {percentage}%
      </div>
    </div>
  );
}

// Prop Types for validation
CircleBar.propTypes = {
  percentage: PropTypes.number.isRequired,
  size: PropTypes.number,
  strokeWidth: PropTypes.number,
  trackColor: PropTypes.string,
  progressColor: PropTypes.string,
};

function Card({
  label,
  percentage,
  value,
  circleSize = 150,
  strokeWidth = 10,
}) {
  Card.propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
    circleSize: PropTypes.number,
    strokeWidth: PropTypes.number,
  };
  return (
    <div className="">
      <div className="text-center mx-10 flex gap-6 justify-center items-center flex-col my-6">
        <h1 className="text-2xl font-semibold tracking-wide">{label}</h1>
        <span className="font-semibold text-xl">
          <CircleBar
            percentage={percentage}
            size={circleSize}
            strokeWidth={strokeWidth}
          />
        </span>
        <p className="text-center font-semibold">{value}</p>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <div className="w-[883px] shadow-lg rounded-md bg-white flex flex-row flex-nowrap justify-around mx-4 my-10 py-3 relative">
      <Card
        label="PINJAMAN DISETUJUI"
        value="2/5 Pinjaman telah disetujui"
        percentage={40}
        circleSize={150}
        strokeWidth={15}
      />
      <div className="lg:border-l-2 border-lightGray"></div>
      <Card
        label="TARGET"
        value="Rp14.000.000.000,00 / Rp5.000.000.000"
        percentage={280}
        circleSize={150}
        strokeWidth={15}
      />
      <button
        type=""
        className="absolute right-6 top-5 border-2 rounded-md p-1 text-loan border-loan"
      >
        <FiEdit size={26} />
      </button>
    </div>
  );
}

export default Cards;
