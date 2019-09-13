import React from "react";
import "./Cmd.css";
import { Rnd } from "react-rnd";
import { ProgramContext } from "../../general-components/programContext";
import ReactDOM from "react-dom";

class Cmd extends React.Component {
  render() {
    return (
      <div className="cmd-text-window not-draggable">
        <span>
          Microsoft Windows [Version 10.0.016729.1087]<br></br>
          (c)2017 Microsoft Corporation. All rights reserved.
          <br></br>
          <br></br>
          C:\Users\Guest
        </span>
      </div>
    );
  }
}

export default Cmd;
