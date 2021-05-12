import dynamic from "next/dynamic";
const SatisfactionChart = dynamic(() => import("./chart"), {
  ssr: false,
});

export default function SatisfactionComponent() {
  return <SatisfactionChart />;
}
