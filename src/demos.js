import React from 'react'
import Tile from './components/tile/tile'
import { Slider, Slide } from './components/slider/slider'


import './demos.css'

const Demos = (props) => {
  return(
    <div className='demos'>
      <h1>React-Motion based components demos</h1>
      <h2>3D rotating tiles</h2>
      <Tile 
        front = {
          <div>content front</div>
        }
        back = {
         <div>content back</div>
        } />
      <Tile 
        front = {
          <div>content front</div>
        }
        back = {
         <div>content back</div>
        } />
      <Tile 
        front = {
          <div>content front</div>
        }
        back = {
         <div>content back</div>
        } />
      <Tile 
        front = {
          <div>content front</div>
        }
        back = {
         <div>content back</div>
        } />
      
      <h2>Content slider</h2>
      <Slider slideStep='300'>
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
      </Slider>
    </div>
  )
}

export default Demos