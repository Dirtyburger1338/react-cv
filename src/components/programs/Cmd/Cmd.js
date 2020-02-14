import React from "react";
import "./Cmd.css";
import { jsxFragment } from "@babel/types";

const star = "★";
const noStar = "☆";

var helptext = (
  <span className="text-yellow">
    <div>------------------</div>
    <br></br>
    The following commands are available:
    <table className="help-table">
      <tbody>
        <tr>
          <td>"languages -l"</td>
          <td>Displays a list of programming languages</td>
        </tr>
        <tr>
          <td>"skills -l"</td>
          <td>Displays a list of general skills</td>
        </tr>
        <tr>
          <td>"bodystats -l"</td>
          <td>Displays a list of general skills</td>
        </tr>
      </tbody>
    </table>
    <br></br>
    <div>------------------</div>
    <br></br>
  </span>
);

var lang = [
  { name: "C++", level: 4 },
  { name: "C#", level: 6 },
  { name: "Java", level: 5 },
  { name: "Python", level: 4 },
  { name: "SQL", level: 6 },
  { name: "JavaScript", level: 8 },
  { name: "TypeScript", level: 8 },
  { name: "HTML", level: 8 },
  { name: "CSS", level: 8 },
  { name: "PHP", level: 7 }
];
var skills = [
  { name: "Angular", level: "Expert" },
  { name: "React", level: "Intermediate" },
  { name: ".Net", level: "Intermediate" },
  { name: ".NodeJs", level: "Intermediate" },
  { name: "Azure", level: "Intermediate" },
  { name: "MongoDB", level: "Intermediate" },
  { name: "Bootstrap", level: "Expert" },
  { name: "Adobe Photoshop", level: "Intermediate" },
  { name: "Adobe XD", level: "Intermediate" },
  { name: "Git", level: "Intermediate" },
  { name: "Tfs", level: "Novice" }
];
var bodystats = [
  { name: "Height", imperial: "5 11'", metric: "182cm" },
  { name: "Weight", imperial: "229lb", metric: "104kg" },
  { name: "Shoe size", imperial: "8", metric: "40" }
];
class Cmd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      consoleText: [
        <span>
          Microsoft Windows [Version 10.0.016729.1087]<br></br>
          (c)2017 Microsoft Corporation. All rights reserved.
          <br></br>
          <br></br>
        </span>,
        helptext
      ]
    };
    this.inputArr = [""];
    this.inputArrIndex = 0;
  }
  componentDidMount = e => {
    setTimeout(() => {
      var objDiv = document.getElementsByClassName("cmd-text-window")[0];
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 1);
  };

  _handleKeyDown = e => {
    var input = document.getElementById("cmd-input");
    var value = input.value;
    input.focus();

    // document.getElementById("cmd-input").value = "";
    // if (e.key === "ArrowUp" && e.key === "ArrowDown")
    //   input.style.width = value.length + 1 + "ch";

    if (e.key === "Enter") {
      this.inputArr.splice(1, 0, value);
      this.inputArrIndex = 0;
      setTimeout(() => {
        switch (value) {
          case "languages -l":
            this.showLanguages(value);
            // code block
            break;
          case "skills -l":
            this.showSkills(value);
            break;
          case "bodystats -l":
            this.showBodystats(value);
            break;
          default:
            this.wrongInput(value);
        }
        // input.style.width = 0 + "ch";
      }, 400);
    } else if (e.key === "ArrowUp") {
      if (this.inputArrIndex < this.inputArr.length - 1) {
        this.inputArrIndex++;
        // input.style.width = this.inputArr[this.inputArrIndex].length + "ch";
        input.value = "";
        document.getElementById("cmd-input").value = this.inputArr[
          this.inputArrIndex
        ];
      }
    } else if (e.key === "ArrowDown") {
      if (this.inputArrIndex > 0) {
        this.inputArrIndex--;
        // input.style.width = this.inputArr[this.inputArrIndex].length + "ch";
        input.value = "";
        document.getElementById("cmd-input").value = this.inputArr[
          this.inputArrIndex
        ];
      }
    } else if (e.key === "Backspace") {
      // input.style.width = value.length - 1 + "ch";
    } else {
      // input.style.width = value.length + 1 + "ch";
    }
    // input.value = "";
    // input.value = value;
  };
  showBodystats = value => {
    let newText = [...this.state.consoleText];
    newText.push(<span>C:\Users\Guest>{value}</span>);

    var sTable = (
      <table className="bodystats-table">
        <thead>
          <tr>
            <th>Stat</th>
            <th>Imperial</th>
            <th>Metric</th>
          </tr>
        </thead>
        <tbody>
          {bodystats.map((stat, i) => (
            <tr key={i}>
              <td>{stat.name}</td>
              <td>{stat.imperial}</td>
              <td>{stat.metric}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
    newText.push(sTable);
    newText.push(<br></br>);
    document.getElementById("cmd-input").value = "";
    this.setState({ consoleText: newText });
    setTimeout(() => {
      var objDiv = document.getElementsByClassName("cmd-text-window")[0];
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 1);
  };
  showLanguages = value => {
    let newText = [...this.state.consoleText];
    newText.push(<span>C:\Users\Guest>{value}</span>);

    lang.forEach(x => {
      var filledStars = "";
      var emptyStars = "";
      for (let i = 0; i < 10; i++) {
        if (i < x.level) filledStars += "★";
        else emptyStars += "☆";
      }
      newText.push(
        <div className="languages-div">
          <span>{x.name}</span>
          <span>
            <span>{filledStars}</span>
          </span>
          <span>
            <span>{emptyStars}</span>
          </span>
        </div>
      );
    });
    newText.push(<br></br>);
    document.getElementById("cmd-input").value = "";
    this.setState({ consoleText: newText });
    setTimeout(() => {
      var objDiv = document.getElementsByClassName("cmd-text-window")[0];
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 1);
  };

  showSkills = value => {
    let newText = [...this.state.consoleText];
    newText.push(<span>C:\Users\Guest>{value}</span>);

    var sTable = (
      <>
        <div>--------------SKILLS----------------</div>
        <div>
          {skills.map((skills, i) => (
            <div key={i} className="skills-table-flex">
              <div className="skills-table-name">{skills.name}</div>
              <div className="skills-table-divider">
                {" "}
                &#32; &#32; &#32;| &#32; &#32; &#32;
              </div>
              <div>{skills.level}</div>
            </div>
          ))}
        </div>
        <div>------------------------------------</div>
      </>
      // <table className="skills-table">
      //   <thead>
      //     <tr>
      //       <th>Tech</th>
      //       <th>-</th>
      //       <th>Level</th>
      //     </tr>
      //   </thead>
      //   <tbody>
      //     {skills.map((skills, i) => (
      //       <jsxFragment>
      //         <tr key={i}>
      //           <td>
      //             <div>{skills.name}</div>
      //           </td>
      //           <td>
      //             <div>|</div>
      //           </td>
      //           <td>
      //             <div>{skills.level}</div>
      //           </td>
      //         </tr>
      //         <tr>
      //           <td colSpan="3">
      //             -------------------------------------------------------------
      //           </td>
      //         </tr>
      //       </jsxFragment>
      //     ))}
      //   </tbody>
      // </table>
    );
    newText.push(sTable);
    // skills.forEach(x => {
    //   newText.push();
    // });
    newText.push(<br></br>);
    document.getElementById("cmd-input").value = "";
    this.setState({ consoleText: newText });
    setTimeout(() => {
      var objDiv = document.getElementsByClassName("cmd-text-window")[0];
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 1);
  };

  wrongInput = value => {
    let newText = [...this.state.consoleText];
    newText.push(<span>C:\Users\Guest>{value}</span>);
    newText.push(<span>err: {value} is not a recognized command.</span>);
    newText.push(helptext);
    newText.push(<br></br>);
    document.getElementById("cmd-input").value = "";
    this.setState({ consoleText: newText });
    setTimeout(() => {
      var objDiv = document.getElementsByClassName("cmd-text-window")[0];
      objDiv.scrollTop = objDiv.scrollHeight;
    }, 1);
  };

  render() {
    return (
      <label htmlFor="cmd-input">
        <div className="cmd-text-window not-draggable">
          <div id="console-wrapper">
            {/*  <span>
            Microsoft Windows [Version 10.0.016729.1087]<br></br>
            (c)2017 Microsoft Corporation. All rights reserved.
            <br></br>
            <br></br>
            {helptext}
          </span>*/}
            {this.state.consoleText.map((content, i) => (
              <div key={i}>{content}</div>
            ))}
          </div>

          <div className="cmd-input-container">
            <span>C:\Users\Guest></span>
            <input
              id="cmd-input"
              onKeyDown={this._handleKeyDown}
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              type="text"
            ></input>
            {/* <span className="cmd-caret"></span> */}
          </div>
        </div>
      </label>
    );
  }
}

export default Cmd;
