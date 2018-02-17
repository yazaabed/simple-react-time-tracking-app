import React from "react";

export default class Timer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      time: {}
    };
  }

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

    const seconds = Math.floor((elapsed / 1000) % 60);
    const minutes = Math.floor((elapsed / 1000 / 60) % 60);
    const hours = Math.floor((elapsed / (1000 * 60 * 60)) % 24);

    const styles = {
      marginTop: "20px"
    };

    return (
      <div style={styles}>
        <hr />
        <div className="timer">
          <div>{timer.title}</div>
          <div>
            {hours}:{minutes}:{seconds}
          </div>
        </div>
        <hr />
      </div>
    );
  }
}
