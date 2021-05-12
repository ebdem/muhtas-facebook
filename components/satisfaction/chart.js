import React from "react";
import { Radar } from "@ant-design/charts";
const SatisfactionChart = () => {
  const data = [
    {
      name: "Message",
      star: 29774,
    },
    {
      name: "Share-Post",
      star: 506,
    },
    {
      name: "Location",
      star: 805,
    },
    {
      name: "Security",
      star: 1478,
    },
    {
      name: "Comfortable",
      star: 2029,
    },
    {
      name: "Easy",
      star: 7100,
    },
  ];
  const config = {
    data: data.map((d) =>
      Object.assign(Object.assign({}, d), { star: Math.log(d.star).toFixed(2) })
    ),
    xField: "name",
    yField: "star",
    meta: {
      star: {
        alias: "Satisfaction",
        min: 0,
        nice: true,
      },
    },
    xAxis: {
      line: null,
      tickLine: null,
    },
    yAxis: {
      label: false,
      grid: {
        alternateColor: "rgba(0, 0, 0, 0.04)",
      },
    },
    point: {},
    area: {},
  };
  return <Radar {...config} />;
};
export default SatisfactionChart;
