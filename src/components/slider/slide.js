import React from 'react'

export const Slide = (props) => {
  return(
    <div className='slide'>
      <div className='slide-content-wrap'>
        {props.children}
      </div>
    </div>
  )
}