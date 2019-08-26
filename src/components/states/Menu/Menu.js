import React from 'react';
import './Menu.css';
import ReactDOM from "react-dom";
import Cmd from '../Cmd/Cmd';
import cmdIcon from '../../../images/cmd-icon.ico';
import noteIcon from '../../../images/note-icon.ico';
class Menu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backClick: false,
      cmdActive: false,
      biosClick: false
    }
    this.cmdClick = this.cmdClick.bind(this);
    //this.currentlyShowingCallback = this.currentlyShowingCallback.bind(this);
  }
  cmdClick = () => {
    console.log("cmd");
    const node = ReactDOM.findDOMNode(this);
    console.log(node)
    node.querySelector('#cmd-btn').animate([
      // keyframes
      { transform: 'translateY(0px)' },
      { transform: 'translateY(-300px)' }
    ], {
        // timing options
        duration: 1000,
        iterations: 1
      });

    this.setState({
      cmdActive: true
    })
  }
  stateChange = (state, e) => {
    e.persist()
    if (e) {
      e.persist()
      console.log(e);

    }
    console.log(e, state);
    //this.cmdClick();

    //this.props.stateChange(state)
  }
  singleClick = (state, e) => {
    e.persist()
    if (e) {
      e.persist()
      console.log(e);

    }
    console.log(e, state);
    //this.cmdClick();

    //this.props.stateChange(state)
  }


  render() {
    return (
      <div id="Menu-page" className="module-page">
        <div className="Menu-buttons">
          <div id="cmd-btn" className={this.state.cmdActive ? 'preview-full' : null} onDoubleClick={(e) => this.stateChange("cmd", e)} onClick={(e) => this.singleClick("cmd", e)}>
            <div><img src={cmdIcon}></img></div>
            <div>Run skills batch job</div>
          </div>
          <div id="bios-btn" onClick={(e) => this.stateChange("bios")}>
            <div><img src={noteIcon}></img></div>
            <div>Per Nilsson bio</div>
          </div>
        </div>


      </div>

    );
  }
}

export default Menu;
