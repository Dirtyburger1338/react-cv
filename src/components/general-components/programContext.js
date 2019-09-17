import React, { useState, createContext, Component } from "react";
import ReactDOM from "react-dom";
import cmdIcon from "../../images/cmd-icon.ico";
import noteIcon from "../../images/note-icon.ico";
import folderIcon from "../../images/shell32_264.ico";
import Cmd from "../programs/Cmd/Cmd";
import Notepad from "../programs/Notepad/Notepad";
import Folder from "../programs/Folder/Folder";
import Browser from "../programs/Browser/Browser";
export const ProgramContext = createContext();

class ProgramContextProvider extends Component {

  constructor(props) {
    super(props);
    this.state = {
      programs: [
        {
          tag: "Cmd",
          name: "User_skills",
          id: "cmd",
          icon: cmdIcon,
          active: false,
          open: false,
          class: Cmd,
          x: 0,
          y: 0,
          taskbar_x: 0,
          taskbar_y: 0
        },
        {
          tag: "Notepad",
          name: "Per Nilsson bio",
          id: "notepad",
          icon: noteIcon,
          active: false,
          open: false,
          class: Notepad,
          x: 0,
          y: 0,
          taskbar_x: 0,
          taskbar_y: 0
        },
        {
          tag: "Folder",
          name: "My projects",
          id: "folder",
          icon: folderIcon,
          active: false,
          open: false,
          class: Folder,
          x: 0,
          y: 0,
          taskbar_x: 0,
          taskbar_y: 0
        },
        {
          tag: "Browser",
          name: "Chrome",
          id: "browser",
          icon: noteIcon,
          active: false,
          open: false,
          class: Browser,
          x: 0,
          y: 0,
          taskbar_x: 0,
          taskbar_y: 0
        }
      ]
    };
  }

  setPrograms = newState => {
    this.setState({ programs: newState });
  };
  setCoords = (program, x, y) => {
    console.log(program, x, y);
    program.x = x;
    program.y = y;
    let programs = this.state.programs.map(x => {
      return x.id === program.id ? program : x;
    });
    this.setState({ programs: programs })
  };

  render() {
    return (
      <ProgramContext.Provider
        value={{
          ...this.state,
          setPrograms: this.setPrograms,
          setCoords: this.setCoords,
          openAppFromTaskbar: this.openAppFromTaskbar
        }}
      >
        {this.props.children}}
      </ProgramContext.Provider>
    );
  }
}
export default ProgramContextProvider;
