import React from "react";
import "./Windows.css";
import ReactDOM from "react-dom";

import Folder from "./programs/Folder/Folder";
import Browser from "./programs/Browser/Browser";
// import Cmd from "./programs/Cmd/Cmd";
// import Notepad from "./programs/Notepad/Notepad";

// import folderIcon from "../images/shell32_264.ico";
// import cmdIcon from "./../images/cmd-icon.ico";
// import noteIcon from "./../images/note-icon.ico";

import Program from "./programs/program";
import Taskbar from "./general-components/taskbar/Taskbar";
import StartModal from "./general-components/start-modal/Start-modal";
import { ProgramContext } from "./general-components/programContext";

class Windows extends React.Component {
  // static contextType = ProgramContext;
  constructor(props) {
    super(props);
    this.state = {
      OpenPrograms: [],
      ActiveProgram: "",
      cmdActive: false,
      cmdFullScreen: false,
      biosClick: false
    };
    this.taskbar = React.createRef();
    //this.browser = React.createRef();
    this.clicks = [];
    this.timeout = null;
  }

  openAppFromIcon = program => {
    program.open = true;
    this.setActive(program);
  };

  setActive(program) {
    var programs = this.context.programs.map(x => {
      if (x.id === program.id) {
        x.active = true;
      } else {
        x.active = false;
      }
      return x;
    });
    this.context.setPrograms(programs);
  }

  openAppFromTaskbar = (e, program) => {
    const node = ReactDOM.findDOMNode(this);
    let programWrapper = node.querySelector("." + program.tag);
    let programWindow = programWrapper.querySelector(":scope > div");

    if (programWindow.style.opacity === "0") {
      //-----------Handle coords
      let taskbarNodes = node.querySelectorAll(
        ".taskbar-active-programs > div"
      );

      taskbarNodes.forEach(node => {
        if (node.classList.contains("task-" + program.id)) {
          // let coordsItem = this.getCoords(program);
          programWindow.style.display = "flex";

          setTimeout(function() {
            animate(program).then(x => {
              programWindow.style.transition = "none";
            });
          }, 1);
        }
      });
      this.setActive(program);
      // this.setActiveWindow(program);
    } else {
      if (program.active) {
        this.minimizeAppFromToolbar(program);
      } else {
        program.active = true;
        let state = this.context.programs.map(x => {
          return x.id === program.id ? program : x;
        });

        this.context.setPrograms(state);
      }
    }

    function animate(program) {
      return new Promise((resolve, reject) => {
        programWindow.style.transform =
          "translate(" + program.x + "px ," + program.y + "px ) scale(1)";
        programWindow.style.opacity = "1";
        setTimeout(() => {
          resolve(true);
        }, 300);
      });
    }
  };

  // closeAppFromToolbar = program => {
  //   const node = ReactDOM.findDOMNode(this);
  //   let programNode = node.querySelector(program);
  //   programNode.style.display = "none";
  //   let list = this.state.OpenPrograms;
  //   let idx = list.indexOf(program);
  //   list.splice(idx, 1);
  //   this.setState({ OpenPrograms: list });
  // };

  minimizeAppFromToolbar = program => {
    console.log(program.tag);
    const node = ReactDOM.findDOMNode(this);

    let programNode = node.querySelector("." + program.tag);
    let window = programNode.querySelector(":scope > div");
    let taskbarNodes = node.querySelectorAll(".taskbar-active-programs > div");
    taskbarNodes.forEach(node => {
      if (node.classList.contains("task-" + program.id)) {
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
          this.context.setCoords(program, draggableX, draggableY);
        }
        // console.log(          taskbarCoords.x + " " + programwindow.x + " " + programwindow.width / 4        );

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
  };

  openApp = program => {
    this.openAppFromIcon(program);
    //this.taskbar.current.setActive(program);
  };

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
      }
    }, 250);
  }

  openShortcut = shortcut => {
    this.browser.current.openNewPage(shortcut);
    this.openApp(".browser-exe");
    this.taskbar.current.setActive(".browser-exe");
  };

  render() {
    const programs = this.context.programs;

    return (
      <div id="Menu-page" className="module-page">
        <StartModal></StartModal>
        <div className="Menu-buttons">
          {programs.map(program => {
            if (program.desktopShortcut) {
              return (
                <div
                  key={program.id}
                  id={program.id + "-btn"}
                  tabIndex="0"
                  onClick={e => this.clickHandler(program, e)}
                >
                  <div>
                    <img src={program.icon} alt="icon"></img>
                  </div>
                  <div>
                    {program.name} {program.open ? "y" : "n"}
                  </div>
                </div>
              );
            }
          })}
        </div>

        {programs.map((program, i) => {
          if (program.open) {
            return (
              <div
                className={
                  "program " +
                  program.tag +
                  " " +
                  (program.active
                    ? "program-window-front"
                    : "program-window-back")
                }
                key={program.tag}
              >
                <Program
                  program={program}
                  index={i}
                  minimize={this.minimizeAppFromToolbar}
                ></Program>
              </div>
            );
          }
        })}
        <Taskbar
          ref={this.taskbar}
          taskbarItemClicked={this.openAppFromTaskbar}
        />
      </div>
    );
  }
}
Windows.contextType = ProgramContext;
export default Windows;
