import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";
import { Route, HashRouter, Routes } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Services from "./Services/Services";
import OurWork from "./OurWork/OurWork";
import Blog from "./Blog/Blog";

function App() {
  return (
    <div className="app-container">
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about-us" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/our-work" element={<OurWork />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
