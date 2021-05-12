import dynamic from "next/dynamic";
const ActivityChart = dynamic(() => import("./chart"), {
  ssr: false,
});

export default function ProfileActivityComponent() {
  return <ActivityChart />;
}
