// import React from 'react'
import Header from "../Header/Header";
import "./Home.css";

export default function Home() {
  function renderMiddleSection() {
    return (
      <>
        <div>
          <img
            src="https://cdn.pixabay.com/photo/2015/12/07/10/56/architect-1080589_1280.jpg"
            className="home-img"
          />
        </div>
        <div className="home-page-middle-sec">
          <h1 className="middle-sec-heading">
            Professional Home Repair and Handyman Services
          </h1>
          <p>
            Maintaining your home or business shouldn&apos;t be a struggle.
            MelTech Handyman® is your trusted partner, offering a reliable team
            of experts to tackle any project.
          </p>
        </div>
        <div className="home-page-middle-sec">
          <h1 className="middle-sec-heading">
            How MelTech Handyman Can Help You
          </h1>
          <p>
            A functional home is a happy home. That&apos;s why we&apos;re
            committed to providing our neighbors with top-notch handyman
            services. And because we believe in empowering homeowners, we offer
            a library of tips and guides to help you keep your home running
            smoothly and looking its best!
          </p>
        </div>
        <div className="faq-section">
          <h1 className="faq-section-heading">FAQs About Handyman Services</h1>
          <p>
            Have questions about MalTech Handyman? Check out answers to some of
            the most frequently asked questions below.
          </p>
          <h4>Should I hire a handyman service expert?</h4>
          <p>Consider hiring a handyman service expert if:</p>
          <ul>
            <li>The job is beyond your skill or comfort level.</li>
            <li>
              You don&apos;t have the time or tools to tackle the project
              yourself.
            </li>
            <li>
              {" "}
              You want a professional to ensure the job is done correctly and
              safely.
            </li>
          </ul>
          <h4>
            Do you offer handyman services for residential home interiors?
          </h4>
          <p>
            We absolutely do! We offer various interior handyman services,
            including:
          </p>
          <ul>
            <li className="faq-list">Repair</li>
            <li className="faq-list">Remodel</li>
            <li className="faq-list">Window & DoorService</li>
            <li className="faq-list">Plumbing</li>
            <li className="faq-list">Electrical</li>
            <li className="faq-list">Painting</li>
          </ul>
        </div>
      </>
    );
  }

  return (
    <div className="home-container">
      <Header />
      <div className="home-page-layout">{renderMiddleSection()}</div>
    </div>
  );
}
