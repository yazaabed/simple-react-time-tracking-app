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
    clearInterval(this.updateTimers);
  }

  render() {
    const { timer } = this.props;

    let elapsed = timer.elapsed;

    if (timer.runningSince) {
      elapsed += Date.now() - timer.runningSince;
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
        </div>
      </div>
    );
  }
}

Timer.propTypes = {
  timer: PropTypes.object
};
