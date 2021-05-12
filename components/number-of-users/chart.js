import { WordCloud } from "@ant-design/charts";
import countryData from "../../country.json";
const WorldNumbers = () => {
  const data = countryData;
  const config = {
    data: data,
    wordField: "x",
    weightField: "value",
    color: "#122c6a",
    wordStyle: {
      fontFamily: "Verdana",
      fontSize: [24, 80],
    },
    interactions: [{ type: "element-active" }],
    state: { active: { style: { lineWidth: 3 } } },
  };
  return <WordCloud {...config} />;
};
export default WorldNumbers;
