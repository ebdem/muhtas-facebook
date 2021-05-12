import dynamic from "next/dynamic";
const LikeChart = dynamic(() => import("./chart"), {
  ssr: false,
});

export default function LikeComponent() {
  return <LikeChart />;
}
