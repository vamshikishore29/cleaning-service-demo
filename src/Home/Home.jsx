// import React from 'react'
import { useState } from "react";
import Header from "../Header/Header";
import "./Home.css";
import {
  epaTechItems,
  generalServices,
  handTechItems,
} from "../assets/list-details";

export default function Home() {
  const homePageMainHeadings = ["Resedential", "Home", "Office"];
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

  // function renderHomePageNavHeadings() {
  //   return (
  //     <nav className="navbar home-page-nav-heading-con">
  //       <ul className="home-page-nav-items">
  //         {homePageMainHeadings.map((item) => {
  //           return (
  //             <li className="nav-list-items" key={item}>
  //               {item}
  //             </li>
  //           );
  //         })}
  //       </ul>
  //     </nav>
  //   );
  // }

  return (
    <div className="home-container">
      <Header />
      <div className="home-page-layout">
        {/* {renderHomePageNavHeadings()} */}
        {/* <div className="home-page-left-layout">
          {renderHomePageLeftLayout()}
          {renderHomePageRightLayout()}
        </div> */}
      </div>
    </div>
  );
}
