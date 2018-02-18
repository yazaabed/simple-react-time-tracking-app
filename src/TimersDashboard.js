import React, { Component } from "react";
import Timer from "./Timer";

class TimerDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timers: [
        {
          elapsed: 5456099
        },
        {
          elapsed: 1273998
        },
        {
          elapsed: 11750
        }
      ]
    };
  }

  render() {
    const timers = this.state.timers;

    return <div>{timers.map(timer => <Timer timer={timer} />)}</div>;
  }
}

export default TimerDashboard;
