import React from "react";
import "./Notepad.css";
import { Rnd } from "react-rnd";
class Notepad extends React.Component {


  render() {
    let text =
      "Hello, my name is Per Nilsson, \nI'm a 30-something year old software developer from a town called Sundsvall in little Sweden. \nI currently work as an IT-consultant doing a bit of everything.\nEven though I work as fullstack I'm definitely enjoying front-end work the most. \n\nIn my personal life I spend my days gaming, playing board games \nor collecting and painting miniatures for tabletop games such as Warhammer.\nI live together with my girlfriend (also a software developer) and our little Robot vacuum cleaner Lin Lin. \n\nBefore I went into the IT-world I used do play poker professionally \naswell as doing art commisions for many many years. \n\nFeel free to contact me at perJLnilsson@gmail.com";
    return (
      <div class="notepad-wrapper">
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
      </div>
    );
  }
}

export default Notepad;
