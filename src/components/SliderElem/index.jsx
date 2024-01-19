import React, { Component } from 'react';
import style from './SliderElem.module.sass';

class SliderElem extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isStart: false,
      speed: 1000,
    };
    this.idTimer = null;
    this.maxSpeed = 3000
    this.minSpeed = 500
  }

  toggleShow = () => {
    const { isStart } = this.state;

    if (!this.idTimer) {
      this.startShow();
    } else {
      this.stopShow();
    }

    this.setState({ isStart: !isStart });
  };

  startShow = () => {
    const { speed } = this.state;
    const { pageChange } = this.props;
    const actualSpeed = this.maxSpeed + this.minSpeed - speed;
    // const actualSpeed = speed
    this.idTimer = setInterval(() => pageChange(1), actualSpeed);
  };

  stopShow = () => {
    clearInterval(this.idTimer);
    this.idTimer = null;
  };

  // componentDidUpdate() {
  //   this.startShow()
  // }

  componentWillUnmount() {
    this.stopShow();
  }

  speedChange = ({ target: { value } }) => {
    // console.log(value);
    this.setState({ speed: value });
    if (this.state.isStart) {
      this.stopShow();
      this.startShow();
    }
  };

  render() {
    const { sliderWrapper, sliderImg, prevBtn, nextBtn, showBtn, speedInput } = style;
    const { img, alt, pageChange } = this.props;
    const { isStart, speed } = this.state;
    return (
      <div className={sliderWrapper}>
        <img className={sliderImg} src={img} alt={alt} />
        <button
          className={prevBtn}
          onClick={() => {
            pageChange(-1);
          }}
        >
          {'<'}
        </button>
        <button
          className={nextBtn}
          onClick={() => {
            pageChange(1);
          }}
        >
          {'>'}
        </button>
        <button className={showBtn} onClick={this.toggleShow}>
          {isStart ? 'Stop' : 'Start'}
        </button>
        <input
          min={this.minSpeed}
          max={this.maxSpeed}
          step={100}
          type="range"
          name="speed"
          className={speedInput}
          value={speed}
          onChange={this.speedChange}
        />
      </div>
    );
  }
}

export default SliderElem;
