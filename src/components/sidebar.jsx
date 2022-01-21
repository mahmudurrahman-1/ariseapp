import React, { Component } from "react";

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

class Sidebar extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="sidebar sidebar-up">
          <div className="Top-side">
            <div className="Top-side-Nav">Arise &mdash;</div>
            <ImSun className="Top-side-logoTwo" />
            <button className="sideLastButton">
              <ImMenu4 className=" Top-side-logoThree" />
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
      </React.Fragment>
    );
  }
}

export default Sidebar;
