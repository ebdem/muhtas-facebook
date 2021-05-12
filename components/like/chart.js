import React from "react";
import { Liquid, measureTextWidth } from "@ant-design/charts";
const LikeChart = () => {
  var config = {
    percent: 0.7,
    statistic: {
      title: {
        formatter: function formatter() {
          return "Like";
        },
        style: function style(_ref) {
          var percent = _ref.percent;
          return { fill: percent > 0.65 ? "white" : "rgba(44,53,66,0.85)" };
        },
      },
      content: {
        style: function style(_ref2) {
          var percent = _ref2.percent;
          return {
            fontSize: 30,
            lineHeight: 1,
            fill: percent > 0.65 ? "white" : "rgba(44,53,66,0.85)",
          };
        },
        customHtml: (container, view, { percent }) => {
          const { width, height } = container.getBoundingClientRect();
          const d = Math.sqrt(Math.pow(width / 2, 2) + Math.pow(height / 2, 2));
          const text = `${(percent * 1232324332).toFixed(0)}`;
          const textWidth = measureTextWidth(text, { fontSize: 60 });
          const scale = Math.min(d / textWidth, 1);
          return `<div style="width:${d}px;display:flex;align-items:center;justify-content:center;font-size:${scale}em;line-height:${
            scale <= 1 ? 1 : "inherit"
          }">${text}</div>`;
        },
      },
    },
    shape: function shape(x, y, width, height) {
      var r = width / 4;
      var dx = x - width / 2;
      var dy = y - height / 2;
      return [
        ["M", dx, dy + r * 2],
        ["A", r, r, 0, 0, 1, x, dy + r],
        ["A", r, r, 0, 0, 1, dx + width, dy + r * 2],
        ["L", x, dy + height],
        ["L", dx, dy + r * 2],
        ["Z"],
      ];
    },
    outline: {
      border: 4,
      distance: 8,
    },
    wave: { length: 128 },
  };
  return <Liquid {...config} />;
};
export default LikeChart;
