import React from "react";
import Utils from "./helpers";
import PropTypes from "prop-types";

export default class Timer extends React.Component {
  componentWillMount() {
    if (this.props.timer.runningSince) {
      this.updateTimers = setInterval(() => this.forceUpdate(), 50);
    }
  }

  componentWillUnmount() {
    if (this.updateTimers) {
      clearInterval(this.updateTimers);
    }
  }

  handleAttachTimerInterval = () => {
    if (!this.updateTimers) {
      if (this.props.timer.runningSince) {
        this.updateTimers = setInterval(() => this.forceUpdate(), 50);
      }
    } else if (!this.props.timer.runningSince) {
      clearInterval(this.updateTimers);
    }
  };

  render() {
    const { timer } = this.props;

    let elapsed = timer.elapsed;

    if (timer.runningSince) {
      elapsed += Date.now() - timer.runningSince;
      this.handleAttachTimerInterval();
    }

    const timerValueString = Utils.milisecondsToHumanString(elapsed);

    const styles = {
      marginTop: "20px",
      borderBottom: "2px solid gray",
      padding: "5px"
    };

    return (
      <div style={styles}>
        <div className="timer">
          <h3>{timerValueString}</h3>
          {timer.runningSince ? (
            <button onClick={this.props.onTimerStopActionClicked(timer)}>
              Stop
            </button>
          ) : (
            <button onClick={this.props.onTimerStartActionClicked(timer)}>
              Start
            </button>
          )}
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  timer: PropTypes.object,
  onTimerStartActionClicked: PropTypes.func,
  onTimerStopActionClicked: PropTypes.func
};
