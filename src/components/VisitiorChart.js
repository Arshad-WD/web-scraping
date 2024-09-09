import React from 'react';
import CanvasJSReact from '@canvasjs/react-charts'; // Import CanvasJS for React

const CanvasJSChart = CanvasJSReact.CanvasJSChart;

const VisitorChart = () => {
  const options = {
    animationEnabled: true,
    theme: "light2",
    title: {
      text: "New vs Returning Visitors"
    },
    subtitles: [
      {
        text: "Click on Any Segment to Drilldown",
        backgroundColor: "#2eacd1",
        fontSize: 16,
        fontColor: "white",
        padding: 5
      }
    ],
    legend: {
      fontFamily: "calibri",
      fontSize: 14,
      itemTextFormatter: (e) => {
        return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / 829500 * 100) + "%";
      }
    },
    data: [
      {
        type: "doughnut",
        showInLegend: true,
        innerRadius: "75%",
        dataPoints: [
          { y: 522460, name: "New Visitors", color: "#E7823A" },
          { y: 307040, name: "Returning Visitors", color: "#546BC1" }
        ]
      }
    ]
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
};

export default VisitorChart;
