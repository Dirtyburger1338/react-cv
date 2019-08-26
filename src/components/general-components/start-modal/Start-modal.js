import React from "../../../../node_modules/react";
import "./Start-modal.css";

class StartModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.setState({
      clicked: true
    });
  }

  render() {
    return (
      <div
        id="modal-wrapper"
        className={this.state.clicked ? "modal-remove" : ""}
      >
        <div id="modal">
          <div>Press F11 to enter fullscreen for the best user experience</div>
          <div>
            <button onClick={this.closeModal}>Got it</button>
          </div>
        </div>
        <div id="modal-trail"></div>
      </div>
    );
  }
}

export default StartModal;
