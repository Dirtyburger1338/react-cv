import React from "react";
import { Rnd } from "react-rnd";
import { ProgramContext } from "../general-components/programContext";
import Browser from "./Browser/Browser";
import Folder from "./Folder/Folder";
import Cmd from "./Cmd/Cmd";
import Notepad from "./Notepad/Notepad";

class Program extends React.Component {
  static contextType = ProgramContext;
  constructor(props) {
    super(props);
    this.state = {
      isfullscreen: false
    };
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
    this.previousTaskbarCoords = { x: 0, y: 0 };

    this.componentList = {
      Browser: Browser,
      Folder: Folder,
      Cmd: Cmd,
      Notepad: Notepad
    };
  }

  componentDidUpdate = (prevProps, prevState) => {
    this.previousTaskbarCoords.x = this.props.program.taskbar_x;
    this.previousTaskbarCoords.y = this.props.program.taskbar_y;
  };
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
      if (x.tag === this.props.program.tag) {
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
      if (x.tag === this.props.program.tag) {
        x.open = false;
      }
      return x;
    });
    this.context.setPrograms(state);
  }

  render() {
    var maximizeBtn = this.state.isfullscreen ? "❐" : "☐";
    var tagName = this.props.program.class;
    var ComponentClass = this.componentList[tagName];
    return (
      <Rnd
        id={this.props.program.id}
        className={
          (this.state.isfullscreen ? "program-fullscreen" : "") +
          " " +
          (this.props.program.active ? "program-active" : "program-inactive")
        }
        minHeight="100"
        minWidth="300"
        // onMouseDown={() => this.props.active(".cmd-exe")}
        onMouseDown={() => this.setActive()}
        default={{
          x: 60 + this.props.index * 50,
          y: 60 + this.props.index * 60,
          width: 600,
          height: 400
        }}
        cancel=".not-draggable"
      >
        {this.props.program.id === "browser" ? ( //If its a browser we change the toolbar
          <div
            className={
              !this.state.isfullscreen
                ? "browser-toolbar"
                : "browser-toolbar not-draggable"
            }
          >
            <div className="toolbar-btn-collection not-draggable">
              <button
                className="toolbar-btn minimize-btn"
                onClick={() => this.props.minimize(this.props.program)}
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
              >
                &#10005;
              </button>
            </div>
          </div>
        ) : (
          <div
            className={
              !this.state.isfullscreen ? "toolbar" : "toolbar not-draggable"
            }
          >
            <div className="toolbar-title">
              <img
                src={this.props.program.icon}
                alt=""
                className="toolbar-icon"
              ></img>
              <span>{this.props.program.name}</span>
            </div>
            <div className="toolbar-btn-collection not-draggable">
              <button
                className="toolbar-btn minimize-btn"
                onClick={() => this.props.minimize(this.props.program)}
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
              >
                &#10005;
              </button>
            </div>
          </div>
        )}

        <div className="program-content not-draggable">
          <ComponentClass />
        </div>
      </Rnd>
    );
  }
}

export default Program;
