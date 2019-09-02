import React from "react";
import "./Taskbar.css";

class Taskbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProgram: "",
      clock: ""
    };
    //this.getClockTime();
    //this.getClockTime = this.getClockTime.bind(this);

  }
  componentDidMount = () => {
    this.getClockTime();
    var intervalId = setInterval(() => {
      this.getClockTime();
    }, 1000);

    this.setState({ intervalId: intervalId });
  }
  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  }
  setActive = program => {
    this.setState({ activeProgram: program });
  };
  getClockTime = () => {
    this.setState({ clock: new Date().toTimeString().slice(0, 5) });
  }
  render() {

    return (
      <div id="taskbar" className="taskbar">
        <button className="taskbar-startmenu-btn">
          <svg viewBox="0 0 48 48">
            <path fill="#ffffff" d="M20 25.026L5.011 25 5.012 37.744 20 39.818zM22 25.03L22 40.095 42.995 43 43 25.066zM20 8.256L5 10.38 5.014 23 20 23zM22 7.973L22 23 42.995 23 42.995 5z"
            /></svg>
          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88">
            <path
              d="m0 12.402 35.687-4.8602.0156 34.423-35.67.20313zm35.67 33.529.0277 34.453-35.67-4.9041-.002-29.78zm4.3261-39.025 47.318-6.906v41.527l-47.318.37565zm47.329 39.349-.0111 41.34-47.318-6.6784-.0663-34.739z"
              fill="#ffffff"
            />
          </svg> */}
        </button>
        <button className="taskbar-search-btn">
          <svg viewBox="0 0 16 16" version="1.1">
            <path fill="#ffffff" d="M 10.5 1 C 8.019531 1 6 3.019531 6 5.5 C 6 6.558594 6.382813 7.523438 7 8.292969 L 2.023438 13.269531 L 2.726563 13.980469 L 7.707031 9 C 8.476563 9.617188 9.441406 10 10.5 10 C 12.980469 10 15 7.980469 15 5.5 C 15 3.019531 12.980469 1 10.5 1 Z M 10.5 2 C 12.4375 2 14 3.5625 14 5.5 C 14 7.4375 12.4375 9 10.5 9 C 8.5625 9 7 7.4375 7 5.5 C 7 3.5625 8.5625 2 10.5 2 Z " />
          </svg>
        </button>
        <div className="taskbar-active-programs">
          {this.props.OpenPrograms.map(program => (
            <div
              className={
                "task-" +
                program +
                " " +
                (this.state.activeProgram === program ? "active" : "inactive")
              }
              key={program}
              onClick={() => this.props.taskbarItemClicked(program)}
            >
              <div>
                <div>
                  <span>Ico {this.props.ActiveProgram} </span>
                  <span>{program}</span>
                </div>

              </div>
              <div className="bottom-border"></div>
            </div>
          ))}
        </div>

        <div className="taskbar-clock">
          <span>{this.state.clock}</span>
        </div>
      </div>
    );
  }
}

export default Taskbar;
