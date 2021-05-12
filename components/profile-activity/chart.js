import React, { useState, useEffect } from "react";
import { Gauge } from "@ant-design/charts";
const ActivityChart = () => {
  const [percent, setPercent] = useState(0.2);
  const [rangeColor, setRangeColor] = useState("#F4664A");
  const color = ["#F4664A", "#FAAD14", "#30BF78"];
  let ref;
  const getColor = function getColor(percent) {
    return percent < 0.4 ? color[0] : percent < 0.6 ? color[1] : color[2];
  };
  const config = {
    percent,
    range: { color: rangeColor },
    indicator: {
      pointer: { style: { stroke: "#D0D0D0" } },
      pin: { style: { stroke: "#D0D0D0" } },
    },
    axis: {
      label: {
        formatter: function formatter(v) {
          return Number(v) * 100;
        },
      },
      subTickLine: { count: 5 },
    },
    statistic: {
      content: {
        formatter: function formatter(_ref) {
          var percent = _ref.percent;
          return "Profile Activity: ".concat((percent * 100).toFixed(0), "%");
        },
      },
      style: { fontSize: 30 },
    },
    animation: true,
  };
  useEffect(() => {
    let data = percent;
    let interval = setInterval(function () {
      if (data >= 0.85) {
        clearInterval(interval);
      } else {
        data += 0.095;
        setPercent(data);
        setRangeColor(getColor(data));
      }
    }, 500);
  }, []);
  return <Gauge {...config} chartRef={(chartRef) => (ref = chartRef)} />;
};
export default ActivityChart;
