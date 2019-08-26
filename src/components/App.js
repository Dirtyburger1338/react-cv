import React from 'react';
import './App.css';
import Menu from './states/Menu/Menu'
import Cmd from './states/Cmd/Cmd';
import StartModal from './general-components/Start-modal';
import Bios from './states/Bios/Bios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menu: true,
      cmd: false,
      bios: false
    }
    this.currentlyShowingCallback = this.currentlyShowingCallback.bind(this);
  }

  currentlyShowingCallback(stateName) {
    console.log(stateName)

    if (stateName === "menu") {
      this.setState({
        menu: true,
        cmd: false,
        bios: true
      });
    }
    else {
      switch (stateName) {
        case "cmd":
          this.setState({
            menu: false,
            cmd: true,
            bios: false
          });
          break;
        case "bios":
          this.setState({
            menu: false,
            cmd: false,
            bios: true
          });
          break;
        default:
          break;
      }
    }
  }


  render() {
    var CurrentlyShowing;
    if (!this.state.menu) {
      if (this.state.cmd) {
        CurrentlyShowing = Cmd;
      }
      else {
        CurrentlyShowing = Bios;
      }
    }
    else {
      CurrentlyShowing = Menu;
    }


    return (

      <div className="App">
        <StartModal></StartModal>
        <CurrentlyShowing stateChange={this.currentlyShowingCallback} />
      </div>
    );
  }
}

export default App;
