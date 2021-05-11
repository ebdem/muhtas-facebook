import MenuBar from "../components/menu";
import IndexPageComponent from "../components/index-page";
export default function Home() {
  return (
    <MenuBar
      title="Main Page"
      children={
        <div>
          <IndexPageComponent />
        </div>
      }
    />
  );
}
