import React from "react";
import "./Notepad.css";
import { Rnd } from "react-rnd";
class Notepad extends React.Component {
  constructor(props) {
    super(props);
    this.handleFullScreenClick = this.handleFullScreenClick.bind(this);
    this.state = { isfullscreen: false };
  }

  handleFullScreenClick() {
    console.log(this.state.isfullscreen);
    if (this.state.isfullscreen) {
      this.setState({ isfullscreen: false });
      this.props.normalize("#notepad");
    } else {
      this.props.maximize("#notepad");
      this.setState({ isfullscreen: true });
    }
  }

  stateChange = state => {
    this.props.stateChange(state);
  };

  render() {
    var maximizeBtn = this.state.isfullscreen ? "❐" : "☐";
    return (
      <Rnd
        id="notepad"
        minHeight="100"
        minWidth="300"
        onMouseDown={() => this.props.active(".notepad-exe")}
        default={{
          x: 65,
          y: 116,
          width: 600,
          height: 400,
        }}
        cancel=".not-draggable"
      >
        < div className={!this.state.isfullscreen ? "notepad-toolbar" : "notepad-toolbar not-draggable"} >
          <div className="toolbar-title">
            <span className="toolbar-icon">▇</span>
            <span>Personal information.txt</span>
          </div>
          <div className="toolbar-btn-collection not-draggable">
            <button
              className="notepad-toolbar-btn minimize-btn"
              onClick={() => this.props.minimize(".notepad-exe")}
            >
              &#8213;
              </button>
            <button
              className="notepad-toolbar-btn maximize-btn"
              onClick={this.handleFullScreenClick}
            >
              {maximizeBtn}
            </button>
            <button
              className="notepad-toolbar-btn close-btn"
              onClick={() => this.props.exit(".notepad-exe")}
            >
              &#10005;
              </button>
          </div>
        </div>
        <div className="toolbar-btn-row not-draggable">
          <span>File</span>
          <span>Edit</span>
          <span>Format</span>
          <span>View</span>
          <span>Help</span>
        </div>
        <div className="notepad-text-window not-draggable">
          <span>
            My name is Per "the sär" Nilsson<br></br>I live in the Sundsvall
            AKA "The northern darkness" AKA "A regular town in Sweden".
              <br></br>
            <br></br>
            My life philosophy is to do as little as possible and devouring as
            many things as i can.
            </span>
        </div>

      </Rnd>
      // <Draggable
      //   handle=".toolbar-title"
      //   disabled={this.state.isfullscreen}
      //   onStart={() => this.props.active(".notepad-exe")}
      // >
      //   <div id="notepad" onClick={() => this.props.active(".notepad-exe")}>
      //     <div className="notepad-toolbar">
      //       <div className="toolbar-title">
      //         <span className="toolbar-icon">▇</span>
      //         <span>Personal information.txt</span>
      //       </div>
      //       <div className="toolbar-btn-collection">
      //         <button
      //           className="notepad-toolbar-btn minimize-btn"
      //           onClick={() => this.props.minimize(".notepad-exe")}
      //         >
      //           &#8213;
      //         </button>
      //         <button
      //           className="notepad-toolbar-btn maximize-btn"
      //           onClick={this.handleFullScreenClick}
      //         >
      //           {maximizeBtn}
      //         </button>
      //         <button
      //           className="notepad-toolbar-btn close-btn"
      //           onClick={() => this.props.exit(".notepad-exe")}
      //         >
      //           &#10005;
      //         </button>
      //       </div>
      //     </div>
      //     <div className="toolbar-btn-row">
      //       <span>File</span>
      //       <span>Edit</span>
      //       <span>Format</span>
      //       <span>View</span>
      //       <span>Help</span>
      //     </div>
      //     <div className="notepad-text-window">
      //       <span>
      //         My name is Per "the sär" Nilsson<br></br>I live in the Sundsvall
      //         AKA "The northern darkness" AKA "A regular town in Sweden".
      //         <br></br>
      //         <br></br>
      //         My life philosophy is to do as little as possible and devouring as
      //         many things as i can.
      //       </span>
      //     </div>
      //   </div>
      // </Draggable>
    );
  }
}

export default Notepad;
