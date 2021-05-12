import dynamic from "next/dynamic";
const PostShareChart = dynamic(() => import("./chart"), {
  ssr: false,
});

export default function PostShareComponent() {
  return <PostShareChart />;
}
