import React from "react";
import "./Start-menu.css";
import PowerBtnIcon from "../../../images/powerbtn.svg";
import SettingsIcon from "../../../images/settings.svg";
import HamburgerIcon from "../../../images/hamburger-menu.svg";
import PowerpointIcon from "../../../images/powerpoint.png";
import ExcelIcon from "../../../images/excel.png";
import WordIcon from "../../../images/word.png";
import OnenoteIcon from "../../../images/onenote.png";
import OutlookIcon from "../../../images/outlook.png";
import { ProgramContext } from "../programContext";
class StartMenu extends React.Component {
  static contextType = ProgramContext;
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };
    // this.programMenuItemClicked = this.programMenuItemClicked.bind(this);
    this.toggleStartMenu = this.toggleStartMenu.bind(this);
  }
  alphabetArr = [
    "#",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "Å",
    "Ä",
    "Ö"
  ];

  toggleStartMenu() {
    this.setState({
      open: true
    });
  }

  render() {
    console.log("render");
    var programs = this.context.programs;
    return (
      <div id="start-menu-wrapper" className="noselect ignore-cancel-click">
        <div id="start-menu" className="ignore-cancel-click">
          <div className="ignore-cancel-click">
            <div className="ignore-cancel-click">
              <div className="start-menu-icon">
                <img src={HamburgerIcon} alt="turn on/off"></img>
              </div>
            </div>
            <div className="ignore-cancel-click">
              <div className="start-menu-icon">
                <img src={SettingsIcon} alt="turn on/off"></img>
              </div>
              <div className="start-menu-icon">
                <img src={PowerBtnIcon} alt="turn on/off"></img>
              </div>
            </div>
          </div>

          <div className="ignore-cancel-click">
            <div className="ignore-cancel-click">Recently added</div>
            {programs.map(program => {
              if (program.desktopShortcut) {
                return (
                  <div
                    className="start-menu-list-item"
                    key={program.name}
                    onClick={e => this.props.programMenuItemClicked(e, program)}
                  >
                    <div>
                      <img src={program.icon} alt="turn on/off"></img>
                    </div>
                    <div>{program.name}</div>
                  </div>
                );
              }
            })}
            <>
              {this.alphabetArr.map(letter => {
                var result = programs.findIndex(obj => {
                  return obj.name.startsWith(letter);
                }, letter);

                return result !== -1 ? (
                  <div key={letter}>
                    <div key={letter} className="ignore-cancel-click">
                      {letter}
                    </div>
                    <div
                      onClick={e =>
                        this.props.programMenuItemClicked(e, programs[result])
                      }
                      className="start-menu-list-item"
                      key={programs[result].name}
                    >
                      <div className="">
                        <img
                          className=""
                          src={programs[result].TbIcon}
                          alt="turn on/off"
                        ></img>
                      </div>
                      <div className="">{programs[result].name}</div>
                    </div>
                  </div>
                ) : (
                  <span key={letter}></span>
                );
              })}
            </>
          </div>

          <div className="ignore-cancel-click">
            <div className="start-menu-right-col ignore-cancel-click">
              <div>
                <img src={OutlookIcon} alt=""></img>
              </div>
              <div>
                <img src={ExcelIcon} alt=""></img>
              </div>
              <div>
                <img src={WordIcon} alt=""></img>
              </div>
              <div>
                <img src={OnenoteIcon} alt=""></img>
              </div>
              <div>
                <img src={PowerpointIcon} alt=""></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default StartMenu;
