import MenuBar from "../../components/menu";
import NumberOfYearsComponent from "../../components/number-of-users-by-years";

export default function NumberOfUsers() {
  return (
    <MenuBar
      title="Number of Users by Years"
      children={
        <div className="descriptionChart">
          <p>This graph shows us how many users have registered each period.</p>
          <NumberOfYearsComponent />
        </div>
      }
    />
  );
}
