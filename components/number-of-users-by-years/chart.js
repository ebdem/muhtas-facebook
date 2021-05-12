import { Line } from "@ant-design/charts";
import yearsData from "../../years.json";
const YearsChart = () => {
  const data = yearsData;

  const config = {
    data: data,
    padding: "auto",
    xField: "Date",
    yField: "scales",
    xAxis: { tickCount: 5 },
    slider: {
      start: 0.1,
      end: 0.5,
    },
  };
  return <Line {...config} />;
};
export default YearsChart;
