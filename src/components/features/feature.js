import React from 'react'
import ReactDOM from 'react-dom'
import { Motion, spring } from 'react-motion'


export class Feature extends React.Component {
	constructor(props) {
		super(props)
		this.handleScroll = this.handleScroll.bind(this)
	}

	static propTypes = {
		direction: React.PropTypes.string
	}

	static defaultProps = {
		direction: 'right' //animation direction
	}

	static stateVisible = {
		translation: 0,
		opacity: 1,
		animationDone: true
	}

	setHiddenState() {
		this.setState({
			translation: this.props.direction === 'right' ? 300 : -300,
			opacity: 0,
			animationDone: false
		})
	}

	handleScroll() {
		if (this.state.animationDone) return
		let isVisible = this.isElementVisible(ReactDOM.findDOMNode(this))
		if (isVisible) {
			this.onTriggerAnimation()
		}
	}

	onTriggerAnimation = () => {
		this.setState({
			...this.constructor.stateVisible
		})
	}

	componentWillMount() {
		this.setHiddenState()
	}

	componentDidMount() {
		if (typeof(window) === 'undefined' && global && !global.window){
			global.window = {} //support for isomorphic rendering
		}
		window.addEventListener('scroll', this.handleScroll)
	}

	componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
	}

	isElementVisible(el) {
    let elemTop = el.getBoundingClientRect().top
    let elemBottom = el.getBoundingClientRect().bottom

    let isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight)
    return isVisible
	}

	render() {
		return(
			<Motion
				style={{
					translation: spring(this.state.translation, {stiffness: 50, damping: 10, precision: 1 }),
					opacity: spring(this.state.opacity, {stiffness: 100, damping: 27})
				}}>
				{({translation, opacity}) =>
					<div
						className='feature'
						style={{transform: `translateX(${translation}px)`, opacity: `${opacity}`}}>
						{this.props.children}
					</div>
				}
			</Motion>
		)
	}
}