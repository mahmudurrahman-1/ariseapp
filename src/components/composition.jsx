import React, { Component } from "react";
import Compapi from "./compositionApi";
class Composition extends Component {
  render() {
    return (
      <React.Fragment>
        <h2 className="subsection--2_headerr">
          How Many Pages your users visit?
        </h2>
        <div className="subsubsection--2-lastdiv">
          <div className="subsubsection--2-lastdiv-1">
            <h3 className="subsubsection--2-lastdiv-1-1">
              Visitors and page views
            </h3>
            <button className="subsubsection--2-lastdiv-1-2">Today</button>
            <button className="subsubsection--2-lastdiv-1-3">Yesterday</button>
          </div>
          <div className="subsubsection--2-lastdiv-2">
            <Compapi />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Composition;
