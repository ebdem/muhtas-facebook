import dynamic from "next/dynamic";
const AgeOfUsers = dynamic(() => import("./chart"), {
  ssr: false,
});

export default function AgeOfUsersComponent() {
  return <AgeOfUsers />;
}
