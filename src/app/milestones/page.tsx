"use client";
import { Line } from "react-chartjs-2";
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
import { useState } from "react";
import OngoingProject from "../components/OngoingProject";
import CompletedProject from "../components/CompletedProject";

// Register the required chart components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

// Custom formatter for lakhs and crores in tooltip
const formatIndianCurrency = (value: number) => {
  if (value >= 10000000) return (value / 10000000).toFixed(1) + " Cr"; // Format in Crores
  if (value >= 100000) return (value / 100000).toFixed(1) + " Lakh"; // Format in Lakhs
  return value.toString(); // Otherwise show the value as it is
};

export default function Home() {
  // Data for the chart
  const [data, setData] = useState<any>({
    labels: ["2019", "2020", "2021", "2022", "2023", "2024"], // Years
    datasets: [
      {
        label: "Total Value",
        data: [3000000, 13892213, 14554659, 10310000, 14306242, 36580000], // Values
        borderColor: "rgba(255, 0, 0, 1)", // Red for line color
        backgroundColor: "rgba(255, 0, 0, 0.2)", // Light red fill under line
        fill: true,
      },
    ],
  });

  // Chart options with Y-axis labels hidden and tooltips enabled
  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const, // Legend on top
        labels: {
          color: "#000000", // Black for legend text
        },
      },
      title: {
        display: true,
        text: "Total Value vs Year",
        color: "#FF0000", // Red title
      },
      tooltip: {
        callbacks: {
          label: (context: any) => formatIndianCurrency(context.raw), // Format tooltip with lakhs/crores
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#000000", // Black for x-axis labels
        },
      },
      y: {
        ticks: {
          display: true, // Hide Y-axis labels
        },
        grid: {
          drawBorder: false, // Optionally remove y-axis line
        },
      },
    },
  };

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center">
      {/* Heading Section */}
      <div className="text-center my-12 px-4">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Financial Growth Overview
        </h1>
        <p className="text-gray-800">
          This report outlines the consistent growth in total project values
          over the past five years, highlighting key insights and trends that
          are shaping the financial landscape.
        </p>
      </div>

      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row">
        {/* Graph Section */}
        <div className="md:w-2/3 w-full">
          <Line data={data} options={options} />
        </div>

        {/* Content Section - Vertically centered */}
        <div className="md:w-1/3 w-full flex items-center justify-center md:pl-8 mt-2 md:mt-0">
          <div>
            <h2 className="text-2xl font-bold text-red-600 mb-4 text-center">
              Yearly Growth Insights
            </h2>
            <p className="text-gray-800 text-justify">
              Over the last five years, there has been a steady increase in
              project values, with a massive spike in 2024, indicating growing
              market demand and investment opportunities.
            </p>
            <p className="text-gray-800 text-justify mt-4">
              The total value surged from 30 lakhs in 2019 to an impressive
              36.58 crore in 2024, marking a significant growth trajectory. Our
              projects reflect this growth with strategic investments in various
              sectors.
            </p>
          </div>
        </div>
      </div>
      <OngoingProject />
      <CompletedProject />
    </div>
  );
}
