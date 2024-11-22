import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

function Diagram() {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }
    if (chartRef.current) {
      const myChartRef = chartRef.current.getContext("2d");
      chartInstance.current = new Chart(myChartRef, {
        type: "doughnut",
        data: {
          labels: ["BRI", "Artha Graha", "BTN", "Mandiri", "KEB Hana Bank"],
          datasets: [
            {
              label: "Approval %",
              data: [30, 25, 20, 15, 10],
              backgroundColor: [
                "#4A3764",
                "#1FFFE1",
                "#51C4E9",
                "#146C94",
                "#6150C1",
              ],
            },
          ],
        },
        options: {
          aspectRatio: 2,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            // legend: {
            //   display: false,
            // },
          },
        },
        plugins: [],
      });
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-8">
        <h1 className="text-xl font-semibold tracking-wide">
          Top 5 Bank Approval Tertinggi
        </h1>
      </div>
      <div className="bg-white w-[700px] h-[400px] my-10 flex justify-center items-center">
        <div className="">
          <canvas ref={chartRef} className="w-[400px] h-[400px]" />
        </div>
      </div>
    </div>
  );
}

function CardDiagram() {
  return (
    <>
      <div className="w-[883px] bg-white flex justify-center items-center mx-4 py-3 rounded-md">
        <Diagram />
      </div>
    </>
  );
}

export default CardDiagram;
