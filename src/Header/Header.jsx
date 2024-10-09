import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <h1 className="logo-title">The Max One</h1>
      </div>
      <ul className="header-link-container">
        <Link to="/" className="link">
          <li className="header-link">Home</li>
        </Link>
        <Link to="/about-us" className="link">
          <li className="header-link">About us</li>
        </Link>
        <Link to="/services" className="link">
          <li className="header-link">Services</li>
        </Link>
        <Link to="/our-work" className="link">
          <li className="header-link">Our Work</li>
        </Link>

        <Link to="/blog" className="link">
          <li className="header-link">Blog</li>
        </Link>
      </ul>
    </nav>
  );
}
