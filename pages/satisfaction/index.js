import MenuBar from "../../components/menu";
import SatisfactionComponent from "../../components/satisfaction";

export default function NumberOfUsers() {
  return (
    <MenuBar
      title="Satisfaction"
      children={
        <div className="descriptionChart">
          <p>This chart shows us user satisfaction</p>
          <SatisfactionComponent />
        </div>
      }
    />
  );
}
