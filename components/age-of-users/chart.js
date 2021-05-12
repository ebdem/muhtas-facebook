import React from "react";
import { Pie, G2 } from "@ant-design/charts";
const AgeOfUsers = () => {
  const { registerTheme } = G2;
  registerTheme("custom-theme", {
    colors10: [
      "#FACDAA",
      "#F4A49E",
      "#EE7B91",
      "#E85285",
      "#BE408C",
      "#BE408C",
    ],
    colors20: [
      "#FACDAA",
      "#F4A49E",
      "#EE7B91",
      "#E85285",
      "#BE408C",
      "#BE408C",
      "#942D93",
    ],
  });
  const data = [
    {
      type: "30+",
      value: 27,
    },
    {
      type: "25-30",
      value: 25,
    },
    {
      type: "20-25",
      value: 18,
    },
    {
      type: "15-20",
      value: 15,
    },
    {
      type: "10-15",
      value: 10,
    },
    {
      type: "10-",
      value: 5,
    },
  ];
  const config = {
    appendPadding: 10,
    data,
    angleField: "value",
    colorField: "type",
    radius: 0.8,
    label: {},
    interactions: [{ type: "element-active" }],
    theme: "custom-theme",
  };
  return <Pie {...config} />;
};
export default AgeOfUsers;
