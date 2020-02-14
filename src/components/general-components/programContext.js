import React, { createContext, Component } from "react";
import cmdIcon from "../../images/cmd-icon.ico";
import folderIcon from "../../images/shell32_264.ico";
import TbFolderIcon from "../../images/folder-icon-sm.ico";
import TbChromeIcon from "../../images/Chrome-icon.png";
import TbCmdIcon3 from "../../images/cmd-icon-sm.ico";
import noteIcon2 from "../../images/note-icon2.png";
import TbNoteIcon from "../../images/note-icon-sm.png";
// import Cmd from "../programs/Cmd/Cmd";
// import Notepad from "../programs/Notepad/Notepad";
// import Folder from "../programs/Folder/Folder";
// import Browser from "../programs/Browser/Browser";
export const ProgramContext = createContext();

class ProgramContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      startMenuOpen: false,
      webpages: [
        {
          name: "DirtyMiniatures",
          iconName: "Dirtyminiatures.html",
          url: "https://dirtyminiatures.com",
          open: false,
          active: false
        },
        {
          name: "Snake3d",
          iconName: "snake3d.html",
          url: "https://dirtyminiatures.com/game",
          open: false,
          active: false
        }
      ],
      programs: [
        {
          tag: "Cmd",
          name: "User_skills",
          id: "cmd",
          icon: cmdIcon,
          TbIcon: TbCmdIcon3,
          active: false,
          open: false,
          class: "Cmd",
          x: 0,
          y: 0,
          taskbar_x: 0,
          taskbar_y: 0,
          desktopShortcut: true,
          zIndex: 0
        },
        {
          tag: "Notepad",
          name: "About me.txt",
          id: "notepad",
          icon: noteIcon2,
          TbIcon: TbNoteIcon,
          active: false,
          open: false,
          class: "Notepad",
          x: 0,
          y: 0,
          taskbar_x: 0,
          taskbar_y: 0,
          desktopShortcut: true,
          zIndex: 0
        },
        {
          tag: "Folder",
          name: "My projects",
          id: "folder",
          icon: folderIcon,
          TbIcon: TbFolderIcon,
          active: false,
          open: false,
          class: "Folder",
          x: 0,
          y: 0,
          taskbar_x: 0,
          taskbar_y: 0,
          desktopShortcut: true,
          zIndex: 0
        },
        {
          tag: "Browser",
          name: "Chrome",
          id: "browser",
          icon: TbChromeIcon,
          TbIcon: TbChromeIcon,
          active: false,
          open: false,
          class: "Browser",
          x: 0,
          y: 0,
          taskbar_x: 0,
          taskbar_y: 0,
          desktopShortcut: false,
          zIndex: 0
        }
      ]
    };
  }

  setPrograms = newState => {
    this.setState({ programs: newState });
  };
  setWebsites = newState => {
    this.setState({ webpages: newState });
  };
  setNewState = newState => {
    this.setState({ newState });
  };
  setCoords = (program, x, y) => {
    program.x = x;
    program.y = y;
    let programs = this.state.programs.map(x => {
      return x.id === program.id ? program : x;
    });
    this.setState({ programs: programs });
  };
  setStartMenuState = isOpen => {
    console.log("setting state to ", isOpen);
    this.setState({ startMenuOpen: isOpen });
  };

  render() {
    return (
      <ProgramContext.Provider
        value={{
          ...this.state,
          setPrograms: this.setPrograms,
          setCoords: this.setCoords,
          openAppFromTaskbar: this.openAppFromTaskbar,
          setNewState: this.setNewState,
          setWebsites: this.setWebsites,
          setStartMenuState: this.setStartMenuState
        }}
      >
        {this.props.children}}
      </ProgramContext.Provider>
    );
  }
}
export default ProgramContextProvider;
