import MenuBar from "../../components/menu";
import LikeComponent from "../../components/like";

export default function NumberOfUsers() {
  return (
    <MenuBar
      title="Like"
      children={
        <div className="descriptionChart">
          <p>This chart shows us how many likes all accounts have per day.</p>
          <LikeComponent />
        </div>
      }
    />
  );
}
