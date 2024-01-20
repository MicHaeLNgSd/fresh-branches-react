import { Component } from 'react';
import SliderElem from '../SliderElem';
import style from './SliderContainer.module.sass';

class SliderContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slides: [
        {
          img: 'https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-bubble-nebula.jpg?t=tn2400',
          header: 'Header1',
          text: 'Text1',
          src: '#',
          alt: 'alt1',
        },
        {
          img: 'https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-whirlpool-galaxy.jpg?t=tn2400',
          header: 'Header2',
          text: 'Text2',
          src: '#',
          alt: 'alt2',
        },
        {
          img: 'https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-crab-nebula.jpg?t=tn2400',
          header: 'Header3',
          text: 'Text3',
          src: '#',
          alt: 'alt3',
        },
        {
          img: 'https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-westerlund2.jpg?t=tn2400',
          header: 'Header4',
          text: 'Text4',
          src: '#',
          alt: 'alt4',
        },
        {
          img: 'https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-horsehead-nebula.jpg?t=tn2400',
          header: 'Header5',
          text: 'Text5',
          src: '#',
          alt: 'alt5',
        },
        {
          img: 'https://hubblesite.org/files/live/sites/hubble/files/home/mission-and-telescope/hubble-30th-anniversary/iconic-images/_images/hubble_30th_images/hubble-30th-monkey-head.jpg?t=tn2400',
          header: 'Header6',
          text: 'Text6',
          src: '#',
          alt: 'alt6',
        },
      ],
      curPage: 0,
    };
  }
  pageChange = (delta) => {
    const {curPage, slides: {length : len}} = this.state
    const newInd = (curPage + delta % len + len) % len
    this.setState({
      curPage: newInd
    })
    console.log('pageChange')
  }
  render() {
    const { sliderContainer, slideHeader, slideText, slideLink } = style;
    const { slides, curPage } = this.state;
    const { img, alt, header, text, src } = slides[curPage];
    return (
      <div className={sliderContainer}>
        <SliderElem img={img} alt={alt} pageChange={this.pageChange}/>
        <h2 className={slideHeader}>{header}</h2>
        <p className={slideText}>{text}</p>
        <a className={slideLink} href={src}>
          {'Learn More >'}
        </a>
      </div>
    );
  }
}

export default SliderContainer;
