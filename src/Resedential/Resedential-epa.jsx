import Header from "../Header/Header";
import { useNavigate } from "react-router-dom";
import { epaTechItems } from "../assets/list-details";
import "./Resedential.css";

export default function ResedentialEPA() {
  const leftLayoutItems = ["EPA Tech", "Hand Tech", "General Services"];
  const navigate = useNavigate();
  // const [listItems, setListItems] = useState(epaTechItems);
  // const [selectedItemName, setSelectedItemName] = useState("EPA Tech");

  // function changeListDetails(item) {
  //   setSelectedItemName(item);
  //   if (item == "EPA Tech") {
  //     setListItems(epaTechItems);
  //   } else if (item == "Hand Tech") {
  //     setListItems(handTechItems);
  //   } else {
  //     setListItems(generalServices);
  //   }
  // }
  function changeListDetails(itemName) {
    if (itemName === "EPA Tech") {
      navigate("/resedential-EPA-Tech");
    } else if (itemName === "Hand Tech") {
      navigate("/resedential-Hand-Tech");
    } else {
      navigate("/resedential-General");
    }
  }
  function renderHomePageLeftLayout() {
    return (
      <div className="list-group-con">
        <h6 className="p-2">Resedential</h6>
        <hr className="m-0" />
        <ul className="list-group">
          {leftLayoutItems.map((item) => {
            return (
              <div className="list-group-items-con" key={item}>
                <li
                  className="list-group-item"
                  key={item}
                  onClick={() => changeListDetails(item)}
                >
                  {item}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }

  function renderHomePageRightLayout() {
    return (
      <div className="list-details-con">
        <h4 className="right-layout-heading">EPA Tech</h4>
        {epaTechItems.map((item) => {
          return (
            <div key={item.name}>
              <h4 className="item-heading">{item.name}</h4>
              <p>{item.description}</p>
              <hr className="line" />
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <div>
      <Header />
      <div className="middle-con">
        {renderHomePageLeftLayout()}
        {renderHomePageRightLayout()}
      </div>
    </div>
  );
}
