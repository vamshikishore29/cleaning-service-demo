import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { resedentialService } from "../assets/resedential";

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate("/"); // Navigate to Home page
  };

  function changeHover() {
    if (showPopup === true) {
      setShowPopup(true);
    }
  }

  function changePopOverContent(itemName) {
    if (itemName === "EPA Tech") {
      navigate("/resedential-EPA-Tech");
    } else if (itemName === "Hand Tech") {
      navigate("/resedential-Hand-Tech");
    } else {
      navigate("/resedential-General");
    }
  }

  function getPopOverContent() {
    return (
      <ul className="popover-content-con">
        {resedentialService.map((item) => {
          return (
            <li key={item.name} className="popover-list">
              <button
                className="btn-con repair-con"
                onClick={() => changePopOverContent(item.name)}
              >
                <img src={item.url} alt={item.name} className="repair-img" />
                <div className="p-2">
                  <span>{item.name}</span>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    );
  }

  function getNavBar() {
    return (
      <nav
        className="navbar"
        onMouseEnter={() => changeHover()}
        onMouseLeave={() => setShowPopup(false)}
      >
        <div className="logo-container">
          <div
            className="title-con"
            onClick={() => handleNavigation()}
            onMouseEnter={() => setShowPopup(false)}
          >
            <span className="logo-heading">MELAKTECH3</span>
            <span className="handyman-heading">HandyMan</span>
          </div>
          <ul className="header-link-container">
            <Link to="/" className="link">
              <li
                onMouseEnter={() => setShowPopup(false)}
                className="header-link"
              >
                Home
              </li>
            </Link>
            <Link to="/resedential-EPA-Tech" className="link">
              <li
                onMouseEnter={() => setShowPopup(true)}
                className="header-link"
              >
                Residential
              </li>
            </Link>
            <Link to="/about-us" className="link">
              <li
                onMouseEnter={() => setShowPopup(false)}
                className="header-link"
              >
                About
              </li>
            </Link>
            {/* <Link to="/blog" className="link">
              <li
                onMouseEnter={() => setShowPopup(false)}
                className="header-link"
              >
                Blog
              </li>
            </Link> */}
          </ul>
        </div>
        {/* <div className="list-icon-con"> */}
        {/* <i className="bi bi-list list-icon"></i> */}
        {/* </div> */}
        <div className="contact-con">
          <i className="bi bi-telephone"> </i>
          <span className="contact">3017934525</span>
        </div>
        {/* <button className="btn btn-info">Contact Us</button> */}
      </nav>
    );
  }

  function getPopOver() {
    return (
      <div>
        {getNavBar()}
        <div
          className="popover-con"
          onMouseEnter={() => setShowPopup(true)}
          onMouseLeave={() => setShowPopup(false)}
        >
          <h6 className="res-heading">Resedential</h6>
          <hr className="hor-line" />
          {getPopOverContent()}
        </div>
      </div>
    );
  }

  return showPopup === true ? getPopOver() : getNavBar();
}
