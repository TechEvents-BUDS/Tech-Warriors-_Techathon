import React from 'react'
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";
import { Line } from "react-chartjs-2";
Chart.register(CategoryScale);

const Graph = ({AverageData, PetrolPriceData, ProfitData}) => {

    
    const allDaysArr = []

    let totalDaysinMonth = new Date(2024, 1, 0).getDate()
    for (let i = 1; i <= totalDaysinMonth; i++) {
        allDaysArr.push(i)
        
    }

    const data = {
        labels: allDaysArr,
        datasets: [
            {
              label: "Average",
              backgroundColor: "blue",
              borderColor: "blue",
              data: AverageData,
              fill: false,
            },
            {
              label: "Petrol Price",
              backgroundColor: "orange",
              borderColor: "orange",
              data: PetrolPriceData,
            },
            {
              label: "Profit",
              backgroundColor: "green",
              borderColor: "green",
              data: ProfitData,
            },
        ]
      };
    
      let options = {
        spanGaps: false,
        
        scales: {
          y: {
            title: {
              display: true,
              text: "Price",
              font: {
                weight:"bold"
              }
            },
          },
          x: {
            title: {
              display: true,
              text: "Days in Month",
              font: {
                weight:"bold" 
              }
            },
          },
        },
      };
      


  return (
    <>
    <Line data={data} options={options} />
    </>
  )
}

export default Graph