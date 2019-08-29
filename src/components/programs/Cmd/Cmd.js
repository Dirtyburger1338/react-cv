import React from "react";
import "./Cmd.css";
import Draggable from "react-draggable"; // Both at the same time

class Cmd extends React.Component {
  constructor(props) {
    super(props);
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
    this.state = { isfullscreen: false };
  }
  handleFullScreenClick() {
    if (this.state.isfullscreen) {
      this.setState({ isfullscreen: false });
      this.props.normalize("#cmd");
    } else {
      this.props.maximize("#cmd");
      this.setState({ isfullscreen: true });
    }
  }

  render() {
    //&#10064;
    // var maximizeBtn = this.props.isfullscreen ? &#x2610; : &#10064;
    var maximizeBtn = this.state.isfullscreen ? "❐" : "☐";
    return (
      <Draggable
        handle=".toolbar-title"
        disabled={this.state.isfullscreen}
        onStart={() => this.props.active(".cmd-exe")}
      >
        <div id="cmd" onClick={() => this.props.active(".cmd-exe")}>
          <div className="toolbar">
            <div className="toolbar-title">
              <span className="toolbar-icon">▇</span>
              <span>Command Prompt</span>
            </div>
            <div className="toolbar-btn-collection">
              <button
                className="toolbar-btn minimize-btn"
                onClick={() => this.props.minimize(".cmd-exe")}
              >
                &#8213;
              </button>
              <button
                className="toolbar-btn maximize-btn"
                onClick={this.handleFullScreenClick}
              >
                {maximizeBtn}
              </button>
              <button
                className="toolbar-btn close-btn"
                onClick={() => this.props.exit(".cmd-exe")}
              >
                &#10005;
              </button>
            </div>
          </div>
          <div className="cmd-text-window">
            <span>
              Microsoft Windows [Version 10.0.016729.1087]<br></br>
              (c)2017 Microsoft Corporation. All rights reserved.
              <br></br>
              <br></br>
              C:\Users\Guest
            </span>
          </div>
        </div>
      </Draggable>
    );
  }
}

export default Cmd;
