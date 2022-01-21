import React, { Component } from "react";
import { ImArrowUpRight2, ImArrowDownRight2 } from "react-icons/im";
import ThreeapOne from "./featuresApis";
import ThreeapTwo from "./featuresApiTwo";
import ThreeapThree from "./featuresApisThree";

class Feature extends Component {
  render() {
    return (
      <React.Fragment>
        <h3 className="subsubsection--thirdCheader">
          How are your active users trending over time?
        </h3>

        <div className="subsubsection--features ">
          <div className="subsubsection--features-1">
            <h4 className="subsubsection--fourthHeader">Conversion</h4>
            <div className="subsubsection--middle">
              <span className="subsubsection--middle-1">492</span>
              <span className="subsubsection--middle-2">
                <span className="subsubsection--middle-2-1">
                  <ImArrowUpRight2 className="subsubsection--middle-2-1-green" />
                </span>
                <span className="subsubsection--middle-2-2">13% of target</span>
              </span>
            </div>
            <ThreeapOne />
          </div>
          <div className="subsubsection--features-2">
            <h4 className="subsubsection--fourthHeader">Impressions</h4>
            <div className="subsubsection--middle">
              <span className="subsubsection--middle-1">87K</span>
              <span className="subsubsection--middle-2">
                <span className="subsubsection--middle-2-1">
                  <ImArrowUpRight2 className="subsubsection--middle-2-1-green" />
                </span>
                <span className="subsubsection--middle-2-2">12% of target</span>
              </span>
            </div>
            <ThreeapTwo />
          </div>
          <div className="subsubsection--features-3">
            <h4 className="subsubsection--fourthHeader">Visits</h4>
            <div className="subsubsection--middle">
              <span className="subsubsection--middle-1">882</span>
              <span className="subsubsection--middle-2">
                <span className="subsubsection--middle-2-1">
                  <ImArrowDownRight2 className="subsubsection--middle-2-1-red" />
                </span>
                <span className="subsubsection--middle-2-2">-9% of target</span>
              </span>
            </div>
            <ThreeapThree />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Feature;
