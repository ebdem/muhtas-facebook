import MenuBar from "../../components/menu";
import NumberOfUsersComponent from "../../components/number-of-users";

export default function NumberOfUsers() {
  return (
    <MenuBar
      title="Number of Users by Country"
      children={
        <div className="descriptionChart">
          <NumberOfUsersComponent />
        </div>
      }
    />
  );
}
