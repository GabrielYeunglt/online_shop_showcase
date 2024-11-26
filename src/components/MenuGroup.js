import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const options = ["one", "two", "three"];

const defaultOption = options[0];
function MenuGroup() {
  return (
    <Dropdown
      options={options}
      value={defaultOption}
      placeholder="Select an option"
    />
  );
}

export default MenuGroup;
