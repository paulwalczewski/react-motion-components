import React from 'react'
import Tile from './components/tile/tile'
import { Slider, Slide } from './components/slider/slider'
import { Features, Feature } from './components/features/features'
// import { Comparison, ComparisonBefore, ComparisonAfter } from './components/comparison/comparison'

import './demos.css'

const Demos = (props) => {
  return(
    <div className='demos'>
      <h1>React-Motion based components demos</h1>

      <h2>1. 3D rotating tiles</h2>

      <Tile
        front={
          <div>content front</div>
        }
        back={
         <div>content back</div>
        } />
      <Tile
        front={
          <div>content front</div>
        }
        back={
         <div>content back</div>
        } />
      <Tile
        front={
          <div>content front</div>
        }
        back={
         <div>content back</div>
        } />
      <Tile
        front={
          <div>content front</div>
        }
        back={
         <div>content back</div>
        } />

      <h2>2. Content slider</h2>
			<h4>Standard animation:</h4>
			<Slider slideStep={300}>
        <Slide>
          <p>Sample content.</p>
        </Slide>
         <Slide>
          Slide 2
        </Slide>
        <Slide>
          Slide 3
        </Slide>
        <Slide>
          Slide 4
        </Slide>
        <Slide>
          Slide 5
        </Slide>
      </Slider>
			<h4>Staggering animation:</h4>
			<Slider slideStep={300} animationType='stagger'>
        <Slide>
          Slide 1
        </Slide>
         <Slide>
          Slide 2
        </Slide>
        <Slide>
          Slide 3
        </Slide>
        <Slide>
          Slide 4
        </Slide>
        <Slide>
          Slide 5
        </Slide>
        <Slide>
          Slide 6
        </Slide>
        <Slide>
          Slide 7
        </Slide>
        <Slide>
          Slide 8
        </Slide>
      </Slider>

			<h2>3. Revealing features list</h2>
			<Features>
				<Feature>
					<p>Sample content</p>
				</Feature>
				<Feature direction='left'>
					<p>Sample content</p>
				</Feature>
				<Feature>
					<p>Sample content</p>
				</Feature>
				<Feature direction='left'>
					<p>Sample content</p>
				</Feature>
			</Features>
    </div>
  )
}

export default Demos