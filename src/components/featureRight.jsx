import React, { Component } from "react";
import FrightApi from "./featureRightApi";
import { ImArrowUp2, ImArrowDown2 } from "react-icons/im";
class Rightfeature extends Component {
  render() {
    return (
      <React.Fragment>
        <h4 className="subsection--2-right-header">Sessions by device</h4>

        <FrightApi />

        <div className="subsection--2-item">
          <div className="span subsection--2-item-1">
            <h5 className="subsection--2-item-header">
              <span className="subsection--2-item-header-1">Desktop</span>
              <span className="subsection--2-item-header-2">92.8%</span>
              <span className="subsection--2-item-header-3">
                <ImArrowUp2 className="subsection--2-item-header-3-icon" />{" "}
                &nbsp; 0.9%
              </span>
            </h5>
          </div>
          <div className="span subsection--2-item-2">
            <h5 className="subsection--2-item-header">
              <span className="subsection--2-item-header-1">Mobile</span>
              <span className="subsection--2-item-header-2">6.1%</span>
              <span className="subsection--2-item-header-3">
                <ImArrowUp2 className="subsection--2-item-header-3-icon" />{" "}
                &nbsp; 0.7%
              </span>
            </h5>
          </div>
          <div className="span subsection--2-item-3">
            <h5 className="subsection--2-item-header">
              <span className="subsection--2-item-header-1">Tablet</span>
              <span className="subsection--2-item-header-2">1.1%</span>
              <span className="subsection--2-item-header-3">
                <ImArrowDown2 className="subsection--2-item-header-3" /> &nbsp;
                -0.1%
              </span>
            </h5>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Rightfeature;
