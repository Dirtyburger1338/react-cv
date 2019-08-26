import React from "react";
import ReactDOM from "react-dom";
import Windows from "./Windows";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Windows />, div);
  ReactDOM.unmountComponentAtNode(div);
});
