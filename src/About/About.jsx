import Header from "../Header/Header";
import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <Header />
      <div className="about-page-heading-con">
        <h1>About us - Professional Handyman services</h1>
      </div>
      <div className="about-page-middle-con">
        <p>
          Who we are Our experienced, professional preventive Maintenances and
          improvement technicians are skilled craftsmen with an average of 17
          years of experience in the trades. We’re so confident in the work we
          perform that each job we do, whether a repair, installation,
        </p>
        <p>
          What we do Instead of calling multiple companies for commercial or
          residential just on simple call hires professional Technical who will
          cars for your home or your business. We provide 24h emergency service,
          preventive maintenance service and improvement projects .Also we have
          free estimation with green, yellow and red recommendation reports in
          advance to plan your budget and time to go forward.
        </p>
        <div className="about-page-service-con">
          <h4>Our Services</h4>
          <ul>
            <span className="services-sub-heading">Emergency service call</span>
            <li>EPA - Tech Repair or Replace Electrical, Plumbing & AC</li>
            <li>
              Handy - Tech Inside home carpenter, painter, flooring finishing
            </li>
            <li>Outside home fence, duck, siding, roof Patio, sidewalk</li>
          </ul>
          <ul>
            <span className="services-sub-heading">
              Preventive Maintenance service
            </span>
            <li>Frequency Monthly. Quarterly, semi Annually and Annually</li>
          </ul>
          <ul>
            <span className="services-sub-heading">
              Improvement project Inside and outside Renovation Remodeling and
              Construction
            </span>
            <li>
              What makes us different - one call gets 3 Tech or 3 handyman save
              time and money
            </li>
            <li>Consistent follow up</li>
            <li>Professional and insured</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
