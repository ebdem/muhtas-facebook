import dynamic from "next/dynamic";
const YearsChart = dynamic(() => import("./chart"), {
  ssr: false,
});

export default function NumberOfYearsComponent() {
  return <YearsChart />;
}
