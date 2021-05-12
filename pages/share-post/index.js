import MenuBar from "../../components/menu";
import PostShareComponent from "../../components/post-share";

export default function NumberOfUsers() {
  return (
    <MenuBar
      title="Share Post"
      children={
        <div className="descriptionChart">
          <p>
            This chart shows us what percentage of all accounts share daily.
          </p>
          <PostShareComponent />
        </div>
      }
    />
  );
}
