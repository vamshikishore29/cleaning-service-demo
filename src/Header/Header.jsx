import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import { resedential } from "../assets/resedential";

export default function Header() {
  const [showPopup, setShowPopup] = useState(false);

  function changeHover() {
    if (showPopup === true) {
      setShowPopup(true);
    }
  }

  function getPopOverContent() {
    return (
      <ul className="popover-content-con">
        {resedential.map((item) => {
          return (
            <li key={item.name} className="popover-list">
              <button className="btn-con repair-con">
                <img src={item.url} alt="repair" className="repair-img" />
                <span>{item.name}</span>
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
          <img
            src="https://www.mrhandyman.com/us/en-us/_assets/images/brand-config-logos/mrh-opus-new-logo.svg"
            alt="title"
            className="title-img"
          />
          <ul className="header-link-container">
            <Link to="/" className="link">
              <li
                onMouseEnter={() => setShowPopup(true)}
                className="header-link"
              >
                Residential
              </li>
            </Link>
            <Link to="/about-us" className="link">
              <li className="header-link">About</li>
            </Link>
            {/* <Link to="/services" className="link">
          <li className="header-link">Services</li>
        </Link> */}
            {/* <Link to="/our-work" className="link">
          <li className="header-link">Our Work</li>
        </Link> */}

            <Link to="/blog" className="link">
              <li className="header-link">Blog</li>
            </Link>
          </ul>
        </div>
        <button className="btn btn-info">Contact Us</button>
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
