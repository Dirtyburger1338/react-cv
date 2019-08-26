import React from "react";
import "./Taskbar.css";

class StartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div id="taskbar" className="taskbar">
        <button className="taskbar-startmenu-btn">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88">
            <path
              d="m0 12.402 35.687-4.8602.0156 34.423-35.67.20313zm35.67 33.529.0277 34.453-35.67-4.9041-.002-29.78zm4.3261-39.025 47.318-6.906v41.527l-47.318.37565zm47.329 39.349-.0111 41.34-47.318-6.6784-.0663-34.739z"
              fill="#ffffff"
            />
          </svg>
        </button>

        <div className="taskbar-active-programs">
          <div>
            <div>
              <div>
                <span>Ico</span> Program 2
              </div>
              <div></div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <span>Ico</span> Program 2
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <div className="taskbar-clock">
          <span>12:45</span>
        </div>
      </div>
    );
  }
}

export default StartModal;
