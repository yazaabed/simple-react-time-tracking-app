import React from "react";
import { render } from "react-dom";
import TimersDashboard from "./TimersDashboard";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <h1>This is simple react app</h1>
    <h2>Tracking times</h2>
    <TimersDashboard />
  </div>
);

render(<App />, document.getElementById("root"));
