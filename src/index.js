import React from "react";
import { render } from "react-dom";
import TimersDashboard from "./TimersDashboard";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <TimersDashboard />
  </div>
);

render(<App />, document.getElementById("root"));
