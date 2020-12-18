import React, { useEffect } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";

import getOptions from "./getOptions";
import LoadingState from "./LoadingState";

const parserData = (value) => [
  value.date,
  value.open,
  value.high,
  value.low,
  value.close,
];

const parserLinear = (value) => [value.date, value.close - value.open];

let ReactApexChart = LoadingState;
const CandleChart = ({ data = [], isLoading }) => {
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !isLoading &&
      ReactApexChart === LoadingState
    )
      ReactApexChart = dynamic(() => import("react-apexcharts"));
  }, [isLoading]);

  const seriesData = data.map(parserData);
  const seriesDataLinear = data.map(parserLinear);

  const { options, optionsBar } = getOptions();

  return isLoading ? (
    <>
      <LoadingState />
      <LoadingState />
    </>
  ) : (
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

CandleChart.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      open: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      high: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      low: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      close: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    })
  ),
};

export default CandleChart;
