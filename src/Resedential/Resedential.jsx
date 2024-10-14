import Header from "../Header/Header";
import { useState } from "react";
import {
  epaTechItems,
  generalServices,
  handTechItems,
} from "../assets/list-details";
import "./Resedential.css";

export default function Resedential() {
  const leftLayoutItems = ["EPA Tech", "Hand Tech", "General Services"];

  const [listItems, setListItems] = useState(epaTechItems);
  const [selectedItemName, setSelectedItemName] = useState("EPA Tech");

  function changeListDetails(item) {
    setSelectedItemName(item);
    if (item == "EPA Tech") {
      setListItems(epaTechItems);
    } else if (item == "Hand Tech") {
      setListItems(handTechItems);
    } else {
      setListItems(generalServices);
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
        <h4 className="right-layout-heading">{selectedItemName}</h4>
        {listItems.map((item) => {
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
