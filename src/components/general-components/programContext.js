import React, { useState, createContext, Component } from "react";

import cmdIcon from "../../images/cmd-icon.ico";
import noteIcon from "../../images/note-icon.ico";
import folderIcon from "../../images/shell32_264.ico";

export const ProgramContext = createContext();

class ProgramContextProvider extends Component {
  state = {
    programs: [
      {
        tag: "Cmd",
        name: "User_skills",
        id: "cmd",
        icon: cmdIcon,
        active: false,
        open: false
      },
      {
        tag: "Notepad",
        name: "Per Nilsson bio",
        id: "notepad",
        icon: noteIcon,
        active: false,
        open: false
      },
      {
        tag: "Folder",
        name: "My projects",
        id: "folder",
        icon: folderIcon,
        active: false,
        open: false
      },
      {
        tag: "Browser",
        name: "Chrome",
        id: "browser",
        icon: noteIcon,
        active: false,
        open: false
      }
    ]
  };
  setPrograms = newState => {
    this.setState({ programs: newState });
    console.log(this.state);
  };
  render() {
    return (
      <ProgramContext.Provider
        value={{ ...this.state, setPrograms: this.setPrograms }}
      >
        {this.props.children}}
      </ProgramContext.Provider>
    );
  }
}
export default ProgramContextProvider;
