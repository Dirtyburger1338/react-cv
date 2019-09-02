import React from "react";
import ReactDOM from "react-dom";
import Browser from "./Browser";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<Browser />, div);
  ReactDOM.unmountComponentAtNode(div);
});
