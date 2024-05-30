import React from 'react'
import { useSelector } from 'react-redux'

export default function Cart1() {
    let ans = useSelector(state=>state.cart.value)
  return (
    <div className='container'>
        <h1>Cart Page</h1>
        <div className=' row'>
            {ans && ans.length>0 && ans.map(value =>
                <div className='col-3'>
                    <img src ={value.image} alt=''className='img-fluid'/>
                    <h2>{value.price}</h2>
                    <button>remove</button> </div>
            )}
        </div>
    </div>
  )
}
