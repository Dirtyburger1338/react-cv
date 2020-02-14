import React from "react";
import "./Taskbar.css";
import { ProgramContext } from "../programContext";
import Startmenu from "../../../components/general-components/start-menu/Start-menu";

class Taskbar extends React.Component {
  static contextType = ProgramContext;
  constructor(props) {
    super(props);
    this.state = {
      activeProgram: "",
      clock: "",
      startMenuOpen: false
    };
  }
  componentDidMount = () => {
    this.getClockTime();
    var intervalId = setInterval(() => {
      this.getClockTime();
    }, 1000);
    this.setState({ intervalId: intervalId });
  };
  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  };
  setActive = program => {
    this.setState({ activeProgram: program });
  };
  getClockTime = () => {
    this.setState({ clock: new Date().toTimeString().slice(0, 5) });
  };
  taskClicked = (e, program) => {
    // e.persist()
    // console.log(e)
    this.context.openAppFromTaskbar(program, e.clientX, e.clientY);
  };
  startMenuBtnClicked = e => {
    // console.log(e)
    this.context.startMenuOpen
      ? this.context.setStartMenuState(false)
      : this.context.setStartMenuState(true);
  };

  programMenuItemClicked = (e, program) => {
    this.props.programOpenedFromStartMenu(program);
  };
  componentDidUpdate(prevProps, prevState) {
    Object.entries(this.props).forEach(
      ([key, val]) =>
        prevProps[key] !== val && console.log(`Prop '${key}' changed`)
    );
    if (this.state) {
      Object.entries(this.state).forEach(
        ([key, val]) =>
          prevState[key] !== val && console.log(`State '${key}' changed`)
      );
    }
  }
  render() {
    var programs = this.context.programs;
    console.log(this.context.startMenuOpen);

    return (
      <div id="taskbar" className="taskbar">
        {this.context.startMenuOpen ? (
          <Startmenu
            programMenuItemClicked={this.programMenuItemClicked}
          ></Startmenu>
        ) : (
          <></>
        )}
        <button
          className="taskbar-startmenu-btn ignore-cancel-click"
          onClick={e => this.startMenuBtnClicked(e)}
        >
          <svg viewBox="0 0 48 48" className="ignore-cancel-click">
            <path
              className="ignore-cancel-click"
              fill="#ffffff"
              d="M20 25.026L5.011 25 5.012 37.744 20 39.818zM22 25.03L22 40.095 42.995 43 43 25.066zM20 8.256L5 10.38 5.014 23 20 23zM22 7.973L22 23 42.995 23 42.995 5z"
            />
          </svg>
        </button>
        <button className="taskbar-search-btn">
          <svg viewBox="0 0 16 16" version="1.1">
            <path
              fill="#ffffff"
              d="M 10.5 1 C 8.019531 1 6 3.019531 6 5.5 C 6 6.558594 6.382813 7.523438 7 8.292969 L 2.023438 13.269531 L 2.726563 13.980469 L 7.707031 9 C 8.476563 9.617188 9.441406 10 10.5 10 C 12.980469 10 15 7.980469 15 5.5 C 15 3.019531 12.980469 1 10.5 1 Z M 10.5 2 C 12.4375 2 14 3.5625 14 5.5 C 14 7.4375 12.4375 9 10.5 9 C 8.5625 9 7 7.4375 7 5.5 C 7 3.5625 8.5625 2 10.5 2 Z "
            />
          </svg>
        </button>
        <div className="taskbar-active-programs">
          {programs.map(program => {
            if (program.open) {
              return (
                <div
                  className={
                    "task-" +
                    program.id +
                    " " +
                    (program.active ? "active" : "inactive")
                  }
                  key={program.id}
                  onClick={e => this.props.taskbarItemClicked(e, program)}
                  // onClick={() => this.context.openAppFromTaskbar(program)}
                  //onClick={(e) => this.taskClicked(e, program)}
                >
                  <div className={"task-" + program.id}>
                    <div className="taskbar-btn-text">
                      <img src={program.TbIcon} alt="img"></img>
                      <span>{program.name}</span>
                    </div>
                  </div>
                  <div className="bottom-border"></div>
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>
        <div className="taskbar-clock">
          <span>{this.state.clock}</span>
        </div>
      </div>
    );
  }
}

export default Taskbar;
