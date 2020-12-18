import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import getOptions from "./getOptions";

const parserData = (value) => [
  value.date,
  value.open,
  value.high,
  value.low,
  value.close,
];

const parserLinear = (value) => [value.date, value.close - value.open];

let ReactApexChart = () => null;
const ApexChart = ({ data = [] }) => {
  useEffect(() => {
    if (typeof window !== "undefined")
      ReactApexChart = dynamic(() => import("react-apexcharts"));
  }, []);

  const seriesData = data.map(parserData);
  const seriesDataLinear = data.map(parserLinear);

  const { options, optionsBar } = getOptions();

  return (
    <>
      <ReactApexChart
        options={options}
        series={[
          {
            data: seriesData,
          },
        ]}
        type="candlestick"
      />
      <ReactApexChart
        options={optionsBar}
        series={[
          {
            name: "volume",
            data: seriesDataLinear,
          },
        ]}
        type="bar"
        height={160}
      />
    </>
  );
};

export default ApexChart;
