import MenuBar from "../../components/menu";
import AgeOfUsersComponent from "../../components/age-of-users";

export default function NumberOfUsers() {
  return (
    <MenuBar
      title="Age of Users"
      children={
        <div className="descriptionChart">
          <p>This chart shows us users in their age range.</p>
          <AgeOfUsersComponent />
        </div>
      }
    />
  );
}
