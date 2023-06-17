import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { baseURL, wordToColorCode } from "./utility ";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Line Chart",
    },
  },
};

// eslint-disable-next-line react/prop-types
const Accordion = ({ title, content, countryCode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [chartData, setChartData] = useState({ y: [], x: [] });

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  const { isLoading, error, data, isError, refetch } = useQuery(
    ["data", countryCode],
    () => fetchDataForPrice(countryCode),
    {
      refetchInterval: 2000,
      enabled: isOpen,
    }
  );

  const fetchDataForPrice = async (code) => {
    const response = await fetch(baseURL + `/chart/${code}`);
    const data = await response.json();
    setChartData({
      x: [...chartData.x, data.data.x],
      y: [...chartData.y, data.data.y],
    });
    return data.data;
  };

  useEffect(() => {
    if (isOpen) {
      refetch();
    }
  }, [isOpen, refetch]);

  console.log("chartData", chartData);

  return (
    <div className=" rounded-xl mb-4 overflow-hidden">
      <div
        className="bg-indigo-900 px-4 py-2 flex justify-between items-center cursor-pointer"
        onClick={toggleAccordion}
      >
        <h2 className="text-lg text-yellow-50 font-medium">{title}</h2>
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-300"></span>
        </span>
      </div>
      {isOpen && (
        <div className="px-4 py-2 bg-yellow-50">
          {content}
          <Line
            options={options}
            data={{
              labels: chartData.y,
              datasets: [
                {
                  label: countryCode,
                  data: chartData.x,
                  borderColor: wordToColorCode(countryCode),
                  backgroundColor: "rgba(255, 99, 132, 0.5)",
                  pointBackgroundColor: wordToColorCode(countryCode),
                },
              ],
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Accordion;
