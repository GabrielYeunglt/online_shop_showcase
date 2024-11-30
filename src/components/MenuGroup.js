import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
const options = ["one", "two", "three"];

const defaultOption = options[0];
function MenuGroup() {
  return (
    <div className="dropdown">
      <button className="dropbtn">Dropdown</button>
      <div className="dropdown-content">
        <a href="#">Link 1</a>
        <a href="#">Link 2</a>
        <a href="#">Link 3</a>
      </div>
    </div>
  );
}

export default MenuGroup;
