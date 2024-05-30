import React, { useState } from 'react'
import Left from './Left'
import Right from './Right'

export default function Main() {

    var[record,setrecord]=useState("")
     
    function parentfunction(category){
        console.log("parent function call",category)
        setrecord(category)
    }
    
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-3 border p-3' ><Left p1={parentfunction}></Left></div>
            <div className='col-9 border p-3'><Right p2={record}></Right></div>
        </div>
        
        
        </div>
  )
}
