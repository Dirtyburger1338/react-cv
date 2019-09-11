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
    let text =
      "Hello, my name is Per Nilsson, \nI'm a 30-something year old software developer from a town called Sundsvall in little Sweden. \nI currently work as an IT-consultant doing a bit of everything.\nEven though I work as fullstack I'm definitely enjoying front-end work the most. \n\nIn my personal life I spend my days gaming, playing board games \nor collecting and painting miniatures for tabletop games such as Warhammer.\nI live together with my girlfriend (also a software developer) and our little Robot vacuum cleaner Lin Lin. \n\nBefore I went into the IT-world I used do play poker professionally \naswell as doing art commisions for many many years. \n\nFeel free to contact me at perJLnilsson@gmail.com";
    return (
      <Rnd
        id="notepad"
        minHeight="100"
        minWidth="300"
        onMouseDown={() => this.props.active(".notepad-exe")}
        default={{
          x: 65,
          y: 116,
          width: 700,
          height: 400
        }}
        cancel=".not-draggable"
      >
        <div
          className={
            !this.state.isfullscreen
              ? "notepad-toolbar"
              : "notepad-toolbar not-draggable"
          }
        >
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
          <textarea defaultValue={text}></textarea>
        </div>
      </Rnd>
    );
  }
}

export default Notepad;
