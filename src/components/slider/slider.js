import React from 'react'
import {StaggeredMotion, Motion, spring} from 'react-motion'

import './slider.css';

export { Slide } from './slide';

export class Slider extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      x: 0,
      totalWidth: (props.children.length - 1) * props.slideStep
    }

    this.defaultStyles = [];
  }

  componentWillMount() {
    this.populateDefaultStyles(this.props.children);
  }

  /**
   * Populates default styles based on children. Required by Staggered Motion
   */
  populateDefaultStyles(children) {
    this.defaultStyles = children.map((child) => {
      return {x: 0}
    })
  }

  handlePrevClick = (e) => {
    this.setState({x: this.state.x + parseInt(this.props.slideStep, 10)});
  }

  handleNextClick = (e) => {
    this.setState({x: this.state.x - parseInt(this.props.slideStep, 10)});
  }

  renderStandard() {
    return (
      <Motion style={{x: spring(this.state.x, {stiffness: 100, damping: 10, precision: 1 })}}>
        {({x}) =>
          <ul
            style={{transform: `translateX(${x}px)`}} 
            className='slides-list'>
            {this.props.children}
          </ul>
        }
      </Motion>
    )
  }

  renderStagger() {
    return (
      <StaggeredMotion
      defaultStyles={this.defaultStyles}
      styles={prevInterpolatedStyles => prevInterpolatedStyles.map((_, i) => {
        return i === 0
          ? {x: spring(this.state.x)}
          : {x: spring(prevInterpolatedStyles[i - 1].x)}
      })}>
      {interpolatingStyles =>
        <div className='slides-list'>
          {interpolatingStyles.map((style, i) =>
            <div 
              className='slide-stagger-wrap' 
              key={i} style={{transform: `translateX(${style.x}px)`}}>
              {this.props.children[i]}
            </div>)
          }
        </div>
      }
    </StaggeredMotion>
    )
  }

  render() {
    return(
      <div className='slider-wrap'>
        {this.props.animationType === 'stagger' &&
          this.renderStagger()
        }
        {!this.props.animationType &&
          this.renderStandard()
        }
        <button 
          disabled={this.state.x >= 0}
          onClick={this.handlePrevClick}>
          Prev
        </button>
        <button
          disabled={this.state.x <= -this.state.totalWidth} 
          onClick={this.handleNextClick}>
          Next
        </button>
      </div>
    )
  }
}

Slider.propTypes = {
  animationType: React.PropTypes.string
}