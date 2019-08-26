import React from 'react';
import './Bios.css';

class Bios extends React.Component {

  stateChange = (state) => {
    this.props.stateChange(state)
  }



  render() {
    return (
      <div id="bios" className="module-page">
        bios       <button onClick={(e) => this.stateChange("menu")}>Back</button>
      </div>

    );
  }
}

export default Bios;
