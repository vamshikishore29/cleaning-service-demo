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

  function changeListDetails(item) {
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
        <ul className="list-group">
          {leftLayoutItems.map((item) => {
            return (
              <div className="list-group-items-con" key={item}>
                <li className="list-group-item" key={item}>
                  {item}
                  <div className="right-icon-con">
                    <i
                      className="bi bi-arrow-right right-icon"
                      onClick={() => changeListDetails(item)}
                    ></i>
                  </div>
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
        {listItems.map((item) => {
          return (
            <div key={item.name}>
              <h4>{item.name}</h4>
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
