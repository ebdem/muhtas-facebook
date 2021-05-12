import MenuBar from "../../components/menu";
import ProfileActivityComponent from "../../components/profile-activity";

export default function NumberOfUsers() {
  return (
    <MenuBar
      title="Profile Activity"
      children={
        <div className="descriptionChart">
          <p>
            This chart shows us how many percent activity all accounts are used.
          </p>
          <ProfileActivityComponent />
        </div>
      }
    />
  );
}
