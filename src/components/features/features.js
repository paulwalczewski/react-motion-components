import React from 'react'

export { Feature } from './feature'
import './features.css'

export class Features extends React.Component {
	static propTypes = {
		animateWhenShown: React.PropTypes.bool
	}

  static defaultProps = {
		animateWhenShown: true
	}

	render() {
		return (
			<div>
				<div className='features-list'>
					{this.props.children}
				</div>
			</div>
		)
	}
}