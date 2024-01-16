import React, { Component } from 'react';
import { addMilliseconds, format as dateFormat } from 'date-fns';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date(0, 0),
      isTimerGoing: false,
      DELTA: 5,
    };
  }
  addDelta = () => {
    const newDate = addMilliseconds(this.state.time, this.state.DELTA);
    this.setState({
      time: newDate,
    });
    this.timerStart(); //THIS
  };
  timerStart = () => {
    // if (!this.timerId) {
    //   this.timerId = setInterval(this.addDelta, this.state.DELTA);
    // }

    this.timerId = setTimeout(this.addDelta, this.state.DELTA); //THIS
  };
  timerStop = () => {
    clearInterval(this.timerId);
    this.timerId = null;
  };
  timerClear = () => {
    this.setState({
      time: new Date(0, 0),
    });
  };

  componentDidMount() {
    this.timerStart();
  }
  componentWillUnmount() {
    this.timerStop();
  }

  render() {
    const { time } = this.state;
    const timeFormated = dateFormat(time, 'HH:mm:ss:SSS');
    return (
      <div>
        <h2>Stopwatch:</h2>
        <p>{timeFormated}</p>
        <p>00:00:00.000</p>
        <button onClick={this.timerStart}>Start</button>
        <button onClick={this.timerStop}>Stop</button>
        <button onClick={this.timerClear}>Clear</button>
      </div>
    );
  }
}

export default Stopwatch;
