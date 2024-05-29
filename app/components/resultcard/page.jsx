"use client";

import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { useRouter } from "next/navigation";

function Resultcard() {
  const chartRef = useRef(null);
  const router=useRouter()

  useEffect(() => {
    const chrt = chartRef.current.getContext("2d");

    const myChart = new Chart(chrt, {
      type: "bar",

      data: {
        labels: ["Jan", "Feb", "Mar", "Apr"],
        datasets: [
          {
            label: "online tutorial subjects",
            data: [20, 25, 30, 35, ],
            backgroundColor: ["yellow", "aqua", "pink", "lightgreen"],
            borderColor: ["yellow", "aqua", "pink", "lightgreen"],
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: false,

        scales: {
          x: {
            grid: {
              display: false,
            },

            ticks: {
              font: {
                size: 14,
              },
            },
          },
          y: {
            grid: {
              display: false,
            },
            ticks: {
              font: {
                size: 14,
              },
            },
          },
        },
        plugins: {
          stripLines: {
            display: true,
            borderDash: [5, 5],
            color: "rgba(0, 0, 0, 0.1)",
            offset: 0,
          },
        },
      },
    });

    return () => {
      myChart.destroy();
    };
  }, []);
  return (
    <div className="md:w-[400px] w-full rounded  bg-white shadow p-2 mx-auto flex flex-col items-center justify-center">
      <h1 className="text-2xl text-center font-[700]">
        Your Personal Wealth Growth
      </h1>
      <h1 className="text-2xl text-center font-[700]">Challenge</h1>
      <p className="text-center text-[18px] my-2">
        Based on your answers, we expect you to gain necessary investing skills
        of
      </p>
      <h1 className="text-lg font-[700] underline text-center my-4">
        Confident Investor by May, 2024
      </h1>
      <button className="bg-slate-200 text-sm px-2 py-1 rounded-md ">
        Your goal: <span className="font-[700]">Buy a house</span>
      </button>

      {/* graph here */}
      <div className="w-80 border my-4 p-4 rounded-md">
        <canvas
          id="chartId"
          aria-label="chart"
          height="250"
          width="270"
          ref={chartRef}
        ></canvas>
      </div>

      <button onClick={()=>{
        router.push('/components/thankyou')
      }} className="w-full text-lg bg-blue-600 text-white font-[700] py-4 rounded-md my-4">
        CONTINUE
      </button>
    </div>
  );
}

export default Resultcard;
