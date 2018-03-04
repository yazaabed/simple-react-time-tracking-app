import React, { Component } from "react";
import Timer from "./Timer";
import PropTypes from "prop-types";

class TimerDashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      timers: [
        {
          elapsed: 5456099,
          id: 1
        },
        {
          elapsed: 1273998,
          id: 2
        },
        {
          elapsed: 11750,
          id: 3
        }
      ]
    };
  }

  handleStartTimer = timerData => event => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timerData.id === timer.id) {
          return Object.assign({}, timer, {
            runningSince: Date.now()
          });
        }

        return timer;
      })
    });
  };

  handleStopTimer = timerData => event => {
    this.setState({
      timers: this.state.timers.map(timer => {
        if (timerData.id === timer.id) {
          let newTimer = Object.assign({}, timer, {
            elapsed: Date.now() - timerData.runningSince + timerData.elapsed
          });

          delete newTimer.runningSince;
          return newTimer;
        }

        return timer;
      })
    });
  };

  render() {
    const timers = this.state.timers;

    return (
      <div>
        {timers.map((timer, index) => (
          <Timer
            key={index}
            timer={timer}
            onTimerStopActionClicked={this.handleStopTimer}
            onTimerStartActionClicked={this.handleStartTimer}
          />
        ))}
      </div>
    );
  }
}

export default TimerDashboard;
