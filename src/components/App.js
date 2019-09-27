import React from "react";
import Windows from "./Windows";
import "./App.css";

import ProgramContextProvider from "./general-components/programContext";
import { ProgramContext } from "./general-components/programContext";
class App extends React.Component {
  static contextType = ProgramContext;

  render() {
    return (
      <ProgramContextProvider>
        <Windows></Windows>
      </ProgramContextProvider>
    );
  }
}

export default App;
