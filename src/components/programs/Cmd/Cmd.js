import React from "react";
import "./Cmd.css";
import { Rnd } from "react-rnd";
import { ProgramContext } from "../../general-components/programContext";
import ReactDOM from "react-dom";

class Cmd extends React.Component {
  static contextType = ProgramContext;
  constructor(props) {
    super(props);
    this.state = {
      minWidth: 600,
      minHeight: 400,
      x: 10,
      y: 10,
      isfullscreen: false
    };
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
  }
  handleFullScreenClick() {
    if (this.state.isfullscreen) {
      this.setState({ isfullscreen: false });
      // this.setState({ isfullscreen: false });
      // this.props.normalize("#cmd");
    } else {
      this.setState({ isfullscreen: true });
    }
  }

  setActive() {
    let state = this.context.programs.map(x => {
      if (x.tag === "Cmd") {
        x.active = true;
      } else {
        x.active = false;
      }
      return x;
    });
    this.context.setPrograms(state);
  }

  closeApp() {
    let state = this.context.programs.map(x => {
      if (x.tag === "Cmd") {
        x.open = false;
      }
      return x;
    });
    this.context.setPrograms(state);
  }
  minimizeApp() {
    let window = ReactDOM.findDOMNode(this);
    let programNode = window.parentNode.parentNode;
    let taskbarNodes = programNode.parentNode.querySelectorAll(
      ".taskbar-active-programs > div"
    );
    console.log(taskbarNodes);
    taskbarNodes.forEach(node => {
      if (node.classList.contains("task-cmd")) {
        let taskbarCoords = node.getBoundingClientRect();
        let programwindow = window.getBoundingClientRect();

        var currentTransformFromDraggable = window.style.transform.match(
          /[+-]?\d+(?:\.\d+)?/g
        );

        let draggableY = 0;
        let draggableX = 0;

        if (currentTransformFromDraggable) {
          draggableX = currentTransformFromDraggable[0];
          draggableY = currentTransformFromDraggable[1];

          //this.setCoords(program, draggableX, draggableY);
        }

        let destinationY =
          taskbarCoords.y - programwindow.y - programwindow.height;
        let destinationX =
          taskbarCoords.x - 100 - programwindow.x + parseInt(draggableX);

        if (destinationY < programwindow.height) {
          destinationY = taskbarCoords.y - programwindow.height;
        }

        window.style.transition =
          "transform 0.3s ease-in-out, opacity 0.2s ease-in-out";
        window.style.transform =
          "translate(" +
          destinationX +
          "px ," +
          destinationY +
          "px ) scale(0.5)";

        window.style.opacity = "0";
        setTimeout(() => {
          window.style.display = "none";
        }, 300);
      }
    });
  }
  render() {
    var maximizeBtn = this.state.isfullscreen ? "❐" : "☐";
    return (
      <Rnd
        id="cmd"
        className={this.state.isfullscreen ? "program-fullscreen" : ""}
        minHeight="100"
        minWidth="300"
        // onMouseDown={() => this.props.active(".cmd-exe")}
        onMouseDown={() => this.setActive()}
        default={{
          x: 25,
          y: 66,
          width: 600,
          height: 400
        }}
        cancel=".not-draggable"
      >
        <div
          className={
            !this.state.isfullscreen ? "toolbar" : "toolbar not-draggable"
          }
        >
          <div className="toolbar-title">
            <span className="toolbar-icon">▇</span>
            <span>Command Prompt</span>
          </div>
          <div className="toolbar-btn-collection not-draggable">
            <button
              className="toolbar-btn minimize-btn"
              // onClick={() => this.props.minimize(".cmd-exe")}
              onClick={() => this.minimizeApp()}
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
              onClick={() => this.closeApp()}
              // onClick={() => this.props.exit(".cmd-exe")}
            >
              &#10005;
            </button>
          </div>
        </div>
        <div className="cmd-text-window not-draggable">
          <span>
            Microsoft Windows [Version 10.0.016729.1087]<br></br>
            (c)2017 Microsoft Corporation. All rights reserved.
            <br></br>
            <br></br>
            C:\Users\Guest
          </span>
        </div>
      </Rnd>
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
