import React, { createContext } from "react";
import "./Windows.css";
import ReactDOM from "react-dom";

import Folder from "./programs/Folder/Folder";
import Cmd from "./programs/Cmd/Cmd";
import Notepad from "./programs/Notepad/Notepad";
import folderIcon from "../images/shell32_264.ico";
import cmdIcon from "./../images/cmd-icon.ico";
import noteIcon from "./../images/note-icon.ico";
import Taskbar from "./general-components/taskbar/Taskbar";
import Browser from "./programs/Browser/Browser";
import StartModal from "./general-components/start-modal/Start-modal";
import Program from "./programs/program";
import ProgramContextProvider from "./general-components/programContext";
import { ProgramContext } from "./general-components/programContext";

class Windows extends React.Component {
  static contextType = ProgramContext;
  constructor(props) {
    super(props);
    this.state = {
      OpenPrograms: [],
      ActiveProgram: "",
      cmdActive: false,
      cmdFullScreen: false,
      biosClick: false
    };
    this.programTags = {
      Cmd: Cmd,
      Notepad: Notepad,
      Folder: Folder,
      Browser: Browser
    };
    this.listOfProgramCoords = [
      { name: ".cmd-exe", x: "0", y: "0" },
      { name: ".notepad-exe", x: "0", y: "0" },
      { name: ".folder-exe", x: "0", y: "0" },
      { name: ".browser-exe", x: "0", y: "0" }
    ];
    this.taskbar = React.createRef();
    this.browser = React.createRef();

    this.openAppFromIcon = this.openAppFromIcon.bind(this);
    //this.closeAppFromToolbar = this.closeAppFromToolbar.bind(this);
    this.minimizeAppFromToolbar = this.minimizeAppFromToolbar.bind(this);
    this.render = this.render.bind(this);
    this.clicks = [];
    this.timeout = null;
    //this.currentlyShowingCallback = this.currentlyShowingCallback.bind(this);
  }
  openAppFromIcon = program => {
    program.open = true;
    program.active = true;
    let state = this.context.programs.map(x => {
      return x.id === program.id ? program : x;
    });

    this.context.setPrograms(state);
    // const node = ReactDOM.findDOMNode(this);
    // let programNode = node.querySelector(program);
    // let window = programNode.querySelector(":scope > div");

    // if (programNode.style.display !== "block") {
    //   programNode.style.display = "block";
    //   let list = this.state.OpenPrograms;
    //   list.push(program);
    //   this.setState({ OpenPrograms: list });
    //   this.setActiveWindow(program);
    // } else {
    //   if (window.style.opacity === 0) {
    //     this.openAppFromTaskbar(program);
    //   } else {
    //     this.setActiveWindow(program);
    //   }
    // }
  };
  setActive(program) {
    var programs = this.context.programs.map(x => {
      if (x.id === program.id) {
        x.active = true;
      }
      else {
        x.active = false;
      }
      return x;
    });
    this.context.setPrograms(programs);
  }
  openAppFromTaskbar = (e, program) => {
    console.log(program);
    const node = ReactDOM.findDOMNode(this);
    let programWrapper = node.querySelector("." + program.tag);
    let programWindow = programWrapper.querySelector(":scope > div");
    console.log(node);
    console.log(programWrapper);
    console.log(programWindow);
    if (programWindow.style.opacity === "0") {
      //-----------Handle coords 
      let taskbarNodes = node.querySelectorAll(
        ".taskbar-active-programs > div"
      );

      taskbarNodes.forEach(node => {
        if (node.classList.contains("task-" + program.id)) {
          // let coordsItem = this.getCoords(program);
          programWindow.style.display = "flex";

          setTimeout(function () {
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
    console.log(program.tag)
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
  // maximizeAppFromToolbar = program => {
  //   const node = ReactDOM.findDOMNode(this);
  //   let programNode = node.querySelector(program);
  //   programNode.classList.add("program-fullscreen");
  // };
  // undoMaximizeAppFromToolbar = program => {
  //   const node = ReactDOM.findDOMNode(this);
  //   let programNode = node.querySelector(program);
  //   programNode.classList.remove("program-fullscreen");
  // };
  setActiveWindow = program => {
    // console.log(program);
    // program.active = true;
    // console.log(this.context.programs);
    // let state = this.context.programs.map(x => {
    //   return x.id === program.id ? program : x;
    // });
    // console.log(state);
    // this.context.setPrograms(state);
    // const node = ReactDOM.findDOMNode(this);
    // let programNode = node.querySelector(program);
    // if (!programNode.classList.contains("program-window-front")) {
    //   let AllPrograms = node.querySelectorAll(".program");
    //   AllPrograms.forEach(prog => {
    //     prog.classList.remove("program-window-front");
    //     prog.classList.add("program-window-back");
    //   });
    //   programNode.classList.remove("program-window-back");
    //   programNode.classList.add("program-window-front");
    // }
    // this.taskbar.current.setActive(program);
  };
  openApp = program => {
    this.openAppFromIcon(program);
    //this.taskbar.current.setActive(program);
  };
  getCoords(program) {
    return this.listOfProgramCoords.find(x => x.name === program);
  }
  setCoords(program, x, y) {
    var foundIndex = this.listOfProgramCoords.findIndex(
      x => x.name === program
    );

    this.listOfProgramCoords[foundIndex].y = y;
    this.listOfProgramCoords[foundIndex].x = x;
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
      }
    }, 250);
  }
  openShortcut = shortcut => {
    this.browser.current.openNewPage(shortcut);
    this.openApp(".browser-exe");
    this.taskbar.current.setActive(".browser-exe");
  };
  render() {
    //this.props.stateChange(state)
    const programs = this.context.programs;
    // const SomeComponent = () => (
    //   <span>
    //     <Taskbar />
    //   </span>
    // );
    return (
      <div id="Menu-page" className="module-page">
        <StartModal></StartModal>
        <div className="Menu-buttons">
          {programs.map(program => (
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
          ))}
        </div>
        {/* <div
              id="cmd-btn"
              className={this.state.cmdActive ? "preview-full" : null}
              onClick={e => this.clickHandler(".cmd-exe", e)}
              tabIndex="0"
            >
              <div>
                <img src={cmdIcon} alt="cmd-icon"></img>
              </div>
              <div>Run skills batch job</div>
            </div>

            <div
              id="notepad-btn"
              tabIndex="1"
              onClick={e => this.clickHandler(".notepad-exe", e)}
            >
              <div>
                <img src={noteIcon} alt="notepad-icon"></img>
              </div>
              <div>Per Nilsson bio</div>
            </div>

            <div
              id="folder-btn"
              tabIndex="1"
              onClick={e => this.clickHandler(".folder-exe", e)}
            >
              <div>
                <img src={folderIcon} alt="folder-icon"></img>
              </div>
              <div>Projects</div>
            </div> 
          </div>*/}

        {programs.map(program => {
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
                <Program program={program} minimize={this.minimizeAppFromToolbar}></Program>
                {/* <TagName
                  exit={this.closeAppFromToolbar}
                  maximize={this.maximizeAppFromToolbar}
                  normalize={this.undoMaximizeAppFromToolbar}
                  minimize={this.minimizeAppFromToolbar}
                  active={this.setActiveWindow}
                ></TagName> */}
              </div>
            );
          }
        })}

        {/* <div className="program cmd-exe">
            <Cmd
              exit={this.closeAppFromToolbar}
              maximize={this.maximizeAppFromToolbar}
              normalize={this.undoMaximizeAppFromToolbar}
              minimize={this.minimizeAppFromToolbar}
              active={this.setActiveWindow}
            ></Cmd>
          </div>
          <div  className={
                    "task-" +
                    program.name +
                    " " +
                    (this.state.activeProgram === program.name
                      ? "active"
                      : "inactive")
                  }>
            <Notepad
              exit={this.closeAppFromToolbar}
              maximize={this.maximizeAppFromToolbar}
              normalize={this.undoMaximizeAppFromToolbar}
              minimize={this.minimizeAppFromToolbar}
              active={this.setActiveWindow}
            ></Notepad>
          </div>
          <div className="program folder-exe">
            <Folder
              exit={this.closeAppFromToolbar}
              maximize={this.maximizeAppFromToolbar}
              normalize={this.undoMaximizeAppFromToolbar}
              minimize={this.minimizeAppFromToolbar}
              active={this.setActiveWindow}
              shortcutOpened={this.openShortcut}
            ></Folder>
          </div>
          <div className="program browser-exe">
            <Browser
              ref={this.browser}
              exit={this.closeAppFromToolbar}
              maximize={this.maximizeAppFromToolbar}
              normalize={this.undoMaximizeAppFromToolbar}
              minimize={this.minimizeAppFromToolbar}
              active={this.setActiveWindow}
            ></Browser>
          </div> */}
        {/* <iframe src="http://dirtyminiatures.com/" height="500" width="500" /> */}
        <Taskbar
          ref={this.taskbar}
          // OpenPrograms={this.state.OpenPrograms}
          taskbarItemClicked={this.openAppFromTaskbar}
        />
      </div>
    );
  }
}

export default Windows;
