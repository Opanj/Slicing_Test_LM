import PropTypes from "prop-types";

CheckSteper.propTypes = {
  stepsConfig: PropTypes.array,
};
function CheckSteper({ stepsConfig = [] }) {
  return (
    <>
      <div className="relative">
        {stepsConfig.map((step, index) => {
          return (
            <div key={index} className="flex flex-row gap-5 my-4">
              <div className="text-sm">{step.time}</div>
              <div className="relative">
                <div
                  className={`w-3 h-3 rounded-full p-2 ${
                    step.active ? "bg-loan" : "bg-gray"
                  } block`}
                ></div>
                {index !== stepsConfig.length - 1 && (
                  <span className="absolute left-1.5 top-4 h-full border-l-4 border-gray"></span>
                )}
              </div>
              <div className="flex flex-col">
                <div className="text-sm font-semibold">{`${step.user} has ${step.status}`}</div>
                <div className="text-xs text-gray">{step.details}</div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

function CardNotification() {
  const notifications = [
    {
      time: "2 hrs",
      status: "updated",
      user: "admin_branch",
      details: "Harry Handoko - Contact | MYCRM",
      active: true,
    },
    {
      time: "2 hrs",
      status: "updated",
      user: "admin_branch",
      details: "Harry Handoko - Application | MYCRM",
      active: false,
    },
    {
      time: "4 hrs",
      status: "updated",
      user: "admin_branch",
      details: "Harry Handoko - Contact | MYCRM",
      active: true,
    },
    {
      time: "4 hrs",
      status: "updated",
      user: "admin_branch",
      details: "Harry Handoko - Application | MYCRM",
      active: false,
    },
  ];

  return (
    <>
      <div className="bg-white w-[300px] h-[475px] mx-2 my-10 p-6 rounded-md shadow-lg">
        <h1 className="font-semibold text-xl mb-4">NOTIFICATION</h1>
        <CheckSteper stepsConfig={notifications} />
      </div>
    </>
  );
}

export default CardNotification;
