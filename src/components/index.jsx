import React, { useState } from "react";
import Visitors from "./visitApi";
import Feature from "./feature";
import Rightfeature from "./featureRight";
import Composition from "./composition";
import img1 from "../Pimg/p101.jpg";
import img2 from "../Pimg/p102.jpg";
import img3 from "../Pimg/p103.jpg";
import img4 from "../Pimg/p104.jpg";
import img5 from "../Pimg/p105.jpg";
import img6 from "../Pimg/p106.jpg";
import img7 from "../Pimg/p107.jpg";
import img8 from "../Pimg/p108.jpg";
import img9 from "../Pimg/p109.jpg";
import img10 from "../Pimg/p110.jpg";
import img11 from "../Pimg/p111.jpg";
import img12 from "../Pimg/p112.jpg";
import img13 from "../Pimg/p113.jpg";
import img14 from "../Pimg/p114.jpg";
import img15 from "../Pimg/p115.jpg";
import img16 from "../Pimg/p116.jpg";
import img17 from "../Pimg/p117.jpg";
import img18 from "../Pimg/p118.jpg";
//import Sidebar from "./sidebar";
//import Calender from "./calender/calender";
//import Ecommerce from "./ecommerce/ecommerce";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ImMail2,
  ImStarFull,
  ImProfile,
  ImCheckboxChecked,
  ImEnlarge,
  ImSearch,
  ImBell,
  ImEnter,
} from "react-icons/im";
import { ImMenu4, ImSun } from "react-icons/im";
import realtorOne from "../img/realtor-1.jpeg";
import { Link } from "react-router-dom";
import {
  ImEqualizer,
  ImCalendar,
  ImCart,
  ImBook,
  ImMail,
  ImFileText,
  ImFolder,
  ImWhatsapp,
  ImHangouts,
  ImInsertTemplate,
  ImParagraphJustify,
  ImLock,
  ImClock,
  ImInfo,
  ImWrench,
  ImCoinPound,
  ImCheckmark,
} from "react-icons/im";

function Home() {
  const [isHide, setIsHide] = useState(true);
  const [isThreeOpen, setIsThreeClosed] = useState(true);
  //onClick={() => setIsHide(!isHide)}
  return (
    <React.Fragment>
      <Router>
        <main className="main">
          <div className="maincontainer">
            <section className={isHide ? "hidebar" : "section--1"}>
              <div className="sidebar sidebar-up">
                <div className="Top-side">
                  <div className="Top-side-Nav">
                    Arise &mdash; <ImSun className="Top-side-logo" />
                  </div>

                  <button
                    onClick={() => setIsHide(!isHide)}
                    className="sideLastButton"
                  >
                    <ImMenu4 className=" Top-side-logos" />
                  </button>
                </div>

                <h1 className="profheader">
                  <span className="profheader-1">Mahmudur Rahman</span>
                  <span className="profheader-2">rthe1761@gmail.com</span>
                </h1>
                <img src={realtorOne} alt="Mahmudur" className="profileOne" />
              </div>
              <div className="sidebar sidebar-down">
                <h2 className="headerTwo">Applications</h2>

                <ul className="navigationOne">
                  <li>
                    <Link to="/" className="sidebarLink">
                      <ImEqualizer className="icons icon-1" />
                      Dashboards
                    </Link>
                  </li>
                  <li>
                    <Link to="/calender" className="sidebarLink">
                      <ImCalendar className="icons icon-1" />
                      Calender
                    </Link>
                  </li>
                  <li>
                    <Link to="/ecommerce" className="sidebarLink">
                      <ImCart className="icons icon-1" />
                      E-Commerce
                    </Link>
                  </li>
                  <li>
                    <Link to="/academy" className="sidebarLink">
                      <ImBook className="icons icon-1" />
                      Academy
                    </Link>
                  </li>
                  <li>
                    <Link to="/mail" className="sidebarLink">
                      <ImMail className="icons icon-1" />
                      Mail
                    </Link>
                  </li>
                  <li>
                    <Link to="/todo" className="sidebarLink">
                      <ImFileText className="icons icon-1" />
                      To-Do
                    </Link>
                  </li>
                  <li>
                    <Link to="/filemanager" className="sidebarLink">
                      <ImFolder className="icons icon-1" />
                      File Manager
                    </Link>
                  </li>
                  <li>
                    <Link to="/contacts" className="sidebarLink">
                      <ImWhatsapp className="icons icon-1" />
                      Contacts
                    </Link>
                  </li>
                  <li>
                    <Link to="/chat" className="sidebarLink">
                      <ImHangouts className="icons icon-1" />
                      Chat
                    </Link>
                  </li>
                  <li>
                    <Link to="/template" className="sidebarLink">
                      <ImInsertTemplate className="icons icon-1" />
                      Template
                    </Link>
                  </li>
                  <li>
                    <Link to="/notes" className="sidebarLink">
                      <ImParagraphJustify className="icons icon-1" />
                      Notes
                    </Link>
                  </li>
                </ul>

                <h2 className="headerTwo headerSecond">Pages</h2>
                <ul className="navigationOne nTwo">
                  <li>
                    <Link to="/authentication" className="sidebarLink">
                      <ImLock className="icons icon-1" />
                      Authentication
                    </Link>
                  </li>
                  <li>
                    <Link to="/commingsoon" className="sidebarLink">
                      <ImClock className="icons icon-1" />
                      Comming Soon
                    </Link>
                  </li>
                  <li>
                    <Link to="/erros" className="sidebarLink">
                      <ImInfo className="icons icon-1" />
                      Errors
                    </Link>
                  </li>
                  <li>
                    <Link to="/invoice" className="sidebarLink">
                      <ImCheckmark className="icons icon-1" />
                      Invoice
                    </Link>
                  </li>
                  <li>
                    <Link to="/settings" className="sidebarLink">
                      <ImWrench className="icons icon-1" />
                      Settings
                    </Link>
                  </li>
                  <li>
                    <Link to="/pricing" className="sidebarLink">
                      <ImCoinPound className="icons icon-1" />
                      Pricing
                    </Link>
                  </li>
                </ul>
              </div>
            </section>
            <section className="section--2">
              {/*    <Routes>
              <Route path="/" exact />
              <Route path="/calender" element={<Calender />} />
              <Route path="/ecommerce" element={<Ecommerce />} />
            </Routes>
        */}
              <div className="section--2-childOne">
                <ul className="navigation-header">
                  <div className="nhOne">
                    <li>
                      <button
                        style={{
                          padding: "1rem",
                          border: "none",
                          background: "none",
                        }}
                        onClick={() => setIsHide(!isHide)}
                      >
                        <a href="#" className="headerlinks ">
                          <ImProfile className="icons-header" />
                        </a>
                      </button>
                    </li>
                    <li>
                      <button
                        style={{
                          padding: "1rem",
                          border: "none",
                          background: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => setIsThreeClosed(!isThreeOpen)}
                        href="#"
                        className="headerlinks"
                      >
                        <ImMail2 className="icons-header" />
                      </button>
                    </li>

                    <li>
                      <button
                        style={{
                          padding: "1rem",
                          border: "none",
                          background: "none",
                        }}
                        href="#"
                        className="headerlinks"
                      >
                        <ImEnter className="icons-header" />
                      </button>
                    </li>
                    <li>
                      <a href="#" className="headerlinks">
                        <ImStarFull className="icons-header star" />
                      </a>
                    </li>
                  </div>
                  <div className="nhOnePointFive">
                    <form action="#" className="search-Form">
                      <input
                        type="search"
                        className="search search-Input"
                        placeholder="search people"
                        required
                      />
                      <button className="search search-Button">
                        <ImSearch className="search search-Icon" />
                      </button>
                    </form>
                  </div>
                  <div className="nhTwo">
                    <li>
                      <a href="#" className="headerlinks">
                        <ImCheckboxChecked className="icons-header" />
                      </a>
                    </li>
                    <li>
                      <a href="#" className="headerlinks">
                        <ImEnlarge className="icons-header" />
                      </a>
                    </li>

                    <li>
                      <a href="#" className="headerlinks">
                        <ImBell className="icons-header" />
                      </a>
                    </li>
                    <div className="profile-Two">
                      <h3 className="header-three">
                        <span className="headerthree-1">Mahmdur</span>
                        <span className="headerthree-2">Guest</span>
                      </h3>
                      <img
                        src={realtorOne}
                        alt="profile-two"
                        className="headerPhoto"
                      />
                    </div>
                  </div>
                </ul>
              </div>
              <div className="section--2-childTwo">
                <h2 className="section--2-childTwo-header">
                  <span className="section--2-childTwo-header-visit-1">
                    Yearly Analysis
                  </span>
                  <span className="section--2-childTwo-header-visit-2">
                    Total Visitors
                  </span>
                </h2>
                <div className="visitchart">
                  <Visitors />
                </div>
              </div>
              <div className="section--2-childThree">
                <div className="subsection subsection--1">
                  <div className="subsubsection subsubsection--1">
                    <Feature />
                  </div>
                  <div className="subsubsection subsubsection--2">
                    <Composition />
                  </div>
                </div>
                <div className="subsection subsection--2">
                  <div className="subsection--2_One">
                    <h2 className="subsection--2_headerr">
                      What are your top devices
                    </h2>
                    <div className="subsection--2_Two">
                      <Rightfeature />
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={isThreeOpen ? "hidebar" : "section--3"}>
              <div className="section--3ree">
                <img src={img1} alt="ph1" />
                <h2 className="section--3ree-header">Mahmudur Rahman</h2>
                <button
                  onClick={() => setIsThreeClosed(!isThreeOpen)}
                  className="section--3ree-bup"
                >
                  &times;
                </button>
              </div>
              <div className="section--three">
                <div className="section--three-1">
                  <button className="section--three-1-button button-1">
                    <img src={img1} alt="ph1" />
                  </button>
                  <button className="section--three-1-button button-2">
                    <img src={img2} alt="ph2" />
                  </button>
                  <button className="section--three-1-button button-3">
                    <img src={img3} alt="ph3" />
                  </button>
                  <button className="section--three-1-button button-4">
                    <img src={img4} alt="ph4" />
                  </button>
                  <button className="section--three-1-button button-5">
                    <img src={img5} alt="ph5" />
                  </button>
                  <button className="section--three-1-button button-6">
                    <img src={img6} alt="ph6" />
                  </button>
                  <button className="section--three-1-button button-7">
                    <img src={img7} alt="ph7" />
                  </button>
                  <button className="section--three-1-button button-8">
                    <img src={img8} alt="ph8" />
                  </button>
                  <button className="section--three-1-button button-9">
                    <img src={img9} alt="ph9" />
                  </button>
                  <button className="section--three-1-button button-10">
                    <img src={img10} alt="ph10" />
                  </button>
                  <button className="section--three-1-button button-11">
                    <img src={img11} alt="ph11" />
                  </button>
                  <button className="section--three-1-button button-12">
                    <img src={img12} alt="ph12" />
                  </button>
                  <button className="section--three-1-button button-13">
                    <img src={img13} alt="ph13" />
                  </button>
                  <button className="section--three-1-button button-14">
                    <img src={img14} alt="ph14" />
                  </button>
                  <button className="section--three-1-button button-15">
                    <img src={img15} alt="ph15" />
                  </button>
                  <button className="section--three-1-button button-16">
                    <img src={img16} alt="ph16" />
                  </button>
                  <button className="section--three-1-button button-17">
                    <img src={img17} alt="ph17" />
                  </button>
                  <button className="section--three-1-button button-18">
                    <img src={img18} alt="ph18" />
                  </button>
                </div>
                <div className="section--three-2">
                  <div className="section--three-2-1">
                    <div className="section--three-2-1-1">1</div>
                    <div className="section--three-2-1-2">2</div>
                  </div>
                  <div className="section--three-2-2">
                    <form action="" className="section--three-2-2-message">
                      <input
                        type="textarea"
                        className="section--three-2-2-message-input"
                        required
                      />
                      <button
                        className="section--three-2-2-message-submit"
                        type="submit"
                      >
                        Send
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>
      </Router>
    </React.Fragment>
  );
}

export default Home;
