import React from 'react';
import './Cmd.css';

class Cmd extends React.Component {
  stateChange = (state) => {

    this.props.stateChange(state)
  }

  render() {
    return (
      <div id="cmd" className="module-page">
        <button onClick={(e) => this.stateChange("menu")}>Back</button>

        <p>Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum Lorum ipsum </p>
      </div>

    );
  }
}

export default Cmd;
