import React from "react";
import "./Windows.css";
import ReactDOM from "react-dom";
import Cmd from "./programs/Cmd/Cmd";
import cmdIcon from "./../images/cmd-icon.ico";
import noteIcon from "./../images/note-icon.ico";
import Taskbar from "./general-components/taskbar/Taskbar";
import StartModal from "./general-components/start-modal/Start-modal";
import { NONAME } from "dns";

class Windows extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cmdActive: false,
      cmdFullScreen: false,
      biosClick: false
    };
    this.openAppFromIcon = this.openAppFromIcon.bind(this);
    this.closeAppFromToolbar = this.closeAppFromToolbar.bind(this);
    this.minimizeAppFromToolbar = this.minimizeAppFromToolbar.bind(this);
    this.render = this.render.bind(this);
    this.clicks = [];
    this.timeout = null;
    //this.currentlyShowingCallback = this.currentlyShowingCallback.bind(this);
  }
  openAppFromIcon = e => {
    const node = ReactDOM.findDOMNode(this);
    let programNode = node.querySelector(e);
    programNode.style.display = "block";
    //Add to taskbar
  };
  closeAppFromToolbar = program => {
    console.log(program);
    const node = ReactDOM.findDOMNode(this);
    let programNode = node.querySelector(program);
    programNode.style.display = "none";
  };
  minimizeAppFromToolbar = e => {
    console.log(e);
    const node = ReactDOM.findDOMNode(this);
    let programNode = node.querySelector(e);
    let rect = programNode.getBoundingClientRect();
    console.log(rect.top, rect.right, rect.bottom, rect.left);
    console.log(programNode);
    programNode.animate(
      [
        // keyframes
        {
          transform: "translate(0px, 0px)",
          opacity: 1
        },
        {
          opacity: 0.3
        },
        {
          transform: "translate(-100px,2000px)",
          opacity: 0,
          display: "none"
        }
      ],
      {
        // timing options
        duration: 300,
        iterations: 1,
        fill: "forwards"
      }
    );
  };
  maximizeAppFromToolbar = program => {
    const node = ReactDOM.findDOMNode(this);
    let programNode = node.querySelector(program);
    programNode.classList.add("program-fullscreen");
  };
  undoMaximizeAppFromToolbar = program => {
    const node = ReactDOM.findDOMNode(this);
    let programNode = node.querySelector(program);
    programNode.classList.remove("program-fullscreen");
  };
  openApp = e => {
    this.openAppFromIcon(e);
  };
  selectApp(e) {
    console.log(e);
  }

  //Single or Double click navigator
  clickHandler(state, e) {
    e.persist();
    e.preventDefault();
    this.clicks.push(new Date().getTime());
    window.clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      if (
        this.clicks.length > 1 &&
        this.clicks[this.clicks.length - 1] -
          this.clicks[this.clicks.length - 2] <
          200
      ) {
        this.openApp(state);
      } else {
        this.selectApp(state);
      }
    }, 250);
  }

  render() {
    //this.props.stateChange(state)

    return (
      <div id="Menu-page" className="module-page">
        <StartModal></StartModal>
        <div className="Menu-buttons">
          <div
            id="cmd-btn"
            className={this.state.cmdActive ? "preview-full" : null}
            onClick={e => this.clickHandler(".cmd-exe", e)}
            tabIndex="0"
          >
            <div>
              <img src={cmdIcon}></img>
            </div>
            <div>Run skills batch job</div>
          </div>
          <div
            id="bios-btn"
            tabIndex="1"
            onClick={e => this.clickHandler(".bios-exe", e)}
          >
            <div>
              <img src={noteIcon}></img>
            </div>
            <div>Per Nilsson bio</div>
          </div>
        </div>
        <div className="program cmd-exe">
          <Cmd
            exit={this.closeAppFromToolbar}
            maximize={this.maximizeAppFromToolbar}
            normalize={this.undoMaximizeAppFromToolbar}
            minimize={this.minimizeAppFromToolbar}
          ></Cmd>
        </div>
        <Taskbar></Taskbar>
      </div>
    );
  }
}

export default Windows;
