import React from 'react'

export default function Image(props) {
  if(props.p1==""){
    throw new Error("Image empty")
  }
  return (
    <div><img src={props.p1}className='img-fluid'alt=''/></div>
  )
}
