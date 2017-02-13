import React from 'react'
import {Motion, spring} from 'react-motion'
import './tile.css';

class Tile extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      angle: 0
    }

    this.handleHover = this.handleHover.bind(this);
    this.handleHoverOut = this.handleHoverOut.bind(this);
  }

  static delayHandler = null;

  handleHover() {
    clearTimeout(this.delayHandler);
    let angle = 1, angleSmooth = 1.1;

    this.setState({
      open: !this.state.open,
      angle: angleSmooth
    })

    this.delayHandler = setTimeout(()=>{
      this.setState({
        angle: angle
      })
    }, 800)
  }

  handleHoverOut() {
    clearTimeout(this.delayHandler);
    let angle, angleSmooth

    angle = 0;
    angleSmooth = -0.1;

    this.setState({
      open: !this.state.open,
      angle: angleSmooth
    })

    this.delayHandler = setTimeout(() => {
      this.setState({
        angle: angle
      })
    }, 800);
  }

  render() {
    return(
      <div className='tile-wrap' onMouseEnter={this.handleHover} onMouseOut={this.handleHoverOut}>
        <Motion style={{angle: spring(this.state.angle, {stiffness: 50, damping: 1, precision: 1 })}}>
         {({angle}) =>
            <div 
              style={{transform: `rotateY(${angle*180}deg)`}}
              className='tile-flipper'>
              <div className='tile tile-front'>
                {this.props.front}
              </div>
              <div className='tile tile-back'>
                {this.props.back}
              </div>
            </div>
          }
        </Motion>
      </div>
    )
  }
}

export default Tile