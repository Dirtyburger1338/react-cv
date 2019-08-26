import React from "react";
import ReactDOM from "react-dom";
import StartMenu from "./Start-menu";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<StartMenu />, div);
  ReactDOM.unmountComponentAtNode(div);
});
