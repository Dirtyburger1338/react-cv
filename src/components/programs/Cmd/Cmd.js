import React from "react";
import "./Cmd.css";
import { Rnd } from "react-rnd";

class Cmd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minWidth: 600,
      minHeight: 400,
      x: 10,
      y: 10, isfullscreen: false
    };
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
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
    var maximizeBtn = this.state.isfullscreen ? "❐" : "☐";
    return (
      <Rnd
        id="cmd"
        minHeight="100"
        minWidth="300"
        onMouseDown={() => this.props.active(".cmd-exe")}
        default={{
          x: 25,
          y: 66,
          width: 600,
          height: 400,
        }}
        cancel=".not-draggable"
      >

        < div className={!this.state.isfullscreen ? "toolbar" : "toolbar not-draggable"} >
          <div className="toolbar-title">
            <span className="toolbar-icon">▇</span>
            <span>Command Prompt</span>
          </div>
          <div className="toolbar-btn-collection not-draggable">
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
        </div >
        <div className="cmd-text-window not-draggable">
          <span>
            Microsoft Windows [Version 10.0.016729.1087]<br></br>
            (c)2017 Microsoft Corporation. All rights reserved.
               <br></br>
            <br></br>
            C:\Users\Guest
             </span>
        </div>



      </Rnd >
      // <Draggable
      //   handle=".toolbar-title"
      //   disabled={this.state.isfullscreen}
      //   onStart={() => this.props.active(".cmd-exe")}
      // >

      //   <div id="cmd" onClick={() => this.props.active(".cmd-exe")}>
      //     <div className="toolbar">
      //       <div className="toolbar-title">
      //         <span className="toolbar-icon">▇</span>
      //         <span>Command Prompt</span>
      //       </div>
      //       <div className="toolbar-btn-collection">
      //         <button
      //           className="toolbar-btn minimize-btn"
      //           onClick={() => this.props.minimize(".cmd-exe")}
      //         >
      //           &#8213;
      //         </button>
      //         <button
      //           className="toolbar-btn maximize-btn"
      //           onClick={this.handleFullScreenClick}
      //         >
      //           {maximizeBtn}
      //         </button>
      //         <button
      //           className="toolbar-btn close-btn"
      //           onClick={() => this.props.exit(".cmd-exe")}
      //         >
      //           &#10005;
      //         </button>
      //       </div>
      //     </div>
      //     <div className="cmd-text-window">
      //       <span>
      //         Microsoft Windows [Version 10.0.016729.1087]<br></br>
      //         (c)2017 Microsoft Corporation. All rights reserved.
      //         <br></br>
      //         <br></br>
      //         C:\Users\Guest
      //       </span>
      //     </div>
      //   </div>
      // </Draggable>
    );
  }
}

export default Cmd;
