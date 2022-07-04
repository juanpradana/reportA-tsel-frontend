import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Chart from "chart.js";

const ChartBar = () => {
  const [datas, setDatas] = useState([])

  const getDatas = async () => {
    try {
      let response = await axios.get('http://localhost:4000/gRtvd563/datas')
      setDatas(response.data)
    } catch(e) {
      console.log(e.message)
    }
  }

  useEffect(() => {
    getDatas()
  }, [])

  useEffect(() => {
    let config = {
      type: "bar",
      data: {
        // labels: [
        //   "2G",
        //   "3G",
        //   "4G",
        //   "5G",
        // ],
        // datasets: [
        //   {
        //     label: "tampan",
        //     backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
        //     borderColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
        //     data: [30, 78, 56, 4],
        //     fill: false,
        //     barThickness: 10,
        //   },
        //   {
        //     label: "siak",
        //     backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
        //     borderColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
        //     data: [27, 68, 86, 7],
        //     fill: false,
        //     barThickness: 10,
        //   },
        // ],
        labels: [
          "2022",
        ],
        datasets: [
          {
            label: "branch",
            backgroundColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
            borderColor: `#${Math.floor(Math.random()*16777215).toString(16)}`,
            data: [ 50 ],
            fill: false,
            barThickness: 10,
          }
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        title: {
          display: false,
          text: "Orders Chart",
        },
        tooltips: {
          mode: "index",
          intersect: false,
        },
        hover: {
          mode: "nearest",
          intersect: true,
        },
        legend: {
          labels: {
            fontColor: "rgba(0,0,0,.4)",
          },
          align: "end",
          position: "bottom",
        },
        scales: {
          xAxes: [
            {
              display: false,
              scaleLabel: {
                display: true,
                labelString: "Month",
              },
              gridLines: {
                borderDash: [2],
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.3)",
                zeroLineColor: "rgba(33, 37, 41, 0.3)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
          yAxes: [
            {
              display: true,
              scaleLabel: {
                display: false,
                labelString: "Value",
              },
              gridLines: {
                borderDash: [2],
                drawBorder: false,
                borderDashOffset: [2],
                color: "rgba(33, 37, 41, 0.2)",
                zeroLineColor: "rgba(33, 37, 41, 0.15)",
                zeroLineBorderDash: [2],
                zeroLineBorderDashOffset: [2],
              },
            },
          ],
        },
      },
    };
    let ctx = document.getElementById("bar-chart").getContext("2d");
    window.myBar = new Chart(ctx, config);
  }, []);

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words bg-white h-[40vh] w-full sm:w-[50vw] shadow-lg rounded">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h2 className="text-blueGray-700 text-xl font-semibold">
                Data Grafik
              </h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-48">
            <canvas id="bar-chart"></canvas>
          </div>
        </div>
      </div>
    </>
  )
}

export default ChartBar