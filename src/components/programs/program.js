import React from "react";
import { Rnd } from "react-rnd";
import { ProgramContext } from "../general-components/programContext";
import ReactDOM from "react-dom";

class Program extends React.Component {
  static contextType = ProgramContext;
  constructor(props) {
    super(props);
    this.state = {
      minWidth: 600,
      minHeight: 400,
      // x: 10,
      // y: 10,
      isfullscreen: false
    };
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
    this.previousTaskbarCoords = { x: 0, y: 0 };
  }
  componentDidUpdate = (prevProps, prevState) => {
    console.log(this.previousTaskbarCoords.x, " ", this.props.program.taskbar_x)
    if (this.previousTaskbarCoords.x !== this.props.program.taskbar_x) {

    }
    this.previousTaskbarCoords.x = this.props.program.taskbar_x;
    this.previousTaskbarCoords.y = this.props.program.taskbar_y;
    console.log(prevState)
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
      if (x.tag === "Cmd") {
        x.open = false;
      }
      return x;
    });
    this.context.setPrograms(state);
  }
  // minimizeApp() {
  //   let window = ReactDOM.findDOMNode(this);
  //   let programNode = this.context.dom;
  //   let taskbarNodes = programNode.parentNode.querySelectorAll(
  //     ".taskbar-active-programs > div"
  //   );
  //   console.log(taskbarNodes);
  //   taskbarNodes.forEach(node => {
  //     if (node.classList.contains("task-cmd")) {
  //       let taskbarCoords = node.getBoundingClientRect();
  //       let programwindow = window.getBoundingClientRect();

  //       var currentTransformFromDraggable = window.style.transform.match(
  //         /[+-]?\d+(?:\.\d+)?/g
  //       );

  //       let draggableY = 0;
  //       let draggableX = 0;

  //       if (currentTransformFromDraggable) {
  //         draggableX = currentTransformFromDraggable[0];
  //         draggableY = currentTransformFromDraggable[1];
  //         this.context.setCoords(this.props.program, draggableX, draggableY);
  //         //this.setCoords(program, draggableX, draggableY);
  //       }

  //       let destinationY =
  //         taskbarCoords.y - programwindow.y - programwindow.height;
  //       let destinationX =
  //         taskbarCoords.x - 100 - programwindow.x + parseInt(draggableX);

  //       if (destinationY < programwindow.height) {
  //         destinationY = taskbarCoords.y - programwindow.height;
  //       }

  //       window.style.transition =
  //         "transform 0.3s ease-in-out, opacity 0.2s ease-in-out";
  //       window.style.transform =
  //         "translate(" +
  //         destinationX +
  //         "px ," +
  //         destinationY +
  //         "px ) scale(0.5)";

  //       window.style.opacity = "0";
  //       setTimeout(() => {
  //         window.style.display = "none";
  //       }, 300);
  //     }
  //   });
  // }

  openAppFromTaskbar = program => {
    console.log(program);
    const node = ReactDOM.findDOMNode(this);
    let programNode = node.querySelector("." + program.tag);
    let window = programNode.querySelector(":scope > div");
    console.log(node);
    console.log(programNode);
    console.log(window);
    if (window.style.opacity === "0") {
      let taskbarNodes = node.querySelectorAll(
        ".taskbar-active-programs > div"
      );

      taskbarNodes.forEach(node => {
        if (node.classList.contains("task-" + program.id)) {
          let coordsItem = this.getCoords(program);
          window.style.display = "flex";

          setTimeout(function () {
            animate(coordsItem).then(x => {
              window.style.transition = "none";
            });
          }, 1);
        }
      });

      this.setActiveWindow(program);
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
    function animate(coordsItem) {
      return new Promise((resolve, reject) => {
        window.style.transform =
          "translate(" + coordsItem.x + "px ," + coordsItem.y + "px ) scale(1)";
        window.style.opacity = "1";
        setTimeout(() => {
          resolve(true);
        }, 300);
      });
    }
  };


  render() {
    var maximizeBtn = this.state.isfullscreen ? "❐" : "☐";
    var ComponentClass = this.props.program.class;
    return (
      <Rnd
        id={this.props.program.id}
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
            <img src={this.props.program.icon} className="toolbar-icon"></img>
            <span>{this.props.program.name}</span>
          </div>
          <div className="toolbar-btn-collection not-draggable">
            <button
              className="toolbar-btn minimize-btn"
              // onClick={() => this.props.minimize(".cmd-exe")}
              onClick={() => this.props.minimize(this.props.program)}
            //onClick={() => this.minimizeApp()}
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
        <div className="program-content not-draggable">
          <ComponentClass />
        </div>
      </Rnd>
    );
  }
}

export default Program;