import React from 'react'

export { ComparisonBefore } from './comparison_before'
export { ComparisonAfter } from './comparison_after'

class Comparison extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return(
			<div className='comparison-wrap'>
				{this.props.children}
			</div>
		)
	}
}

export default Comparison