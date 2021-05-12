import { Image } from "antd";

export default function IndexPageComponent() {
  return (
    <div>
      <h1 className="main-title">Welcome to the Facebook Analytics </h1>
      <p className="by">by Ebubekir DEMİRAY</p>
      <Image
        src="/main2.svg"
        style={{ maxWidth: "100%", height: "auto", margin: "10px" }}
        preview={false}
      />
    </div>
  );
}
