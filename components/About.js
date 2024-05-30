import React, { useEffect, useState } from 'react'

export default function About() {
    var[counter,setcounter]=useState(100);
    function f1(){
        setcounter(counter+10)

    }
    //useeffect will be called component load as well as changes in the state varriable 
   // useEffect(function(){
     //   console.log(Math.random());
   // })
   //Second behavoir use effect using  empty array it don't get repeated
   //useEffect(function(){
      // console.log(Math.random());
  // },[])


   useEffect(function(){
    console.log(Math.random());
    return()=>{
        console.log("Success")
    }
},[])
  return (
    <div class = "container"><h1>Use Effect Example</h1>
    <p>{counter}</p>
    <button onClick={f1}>Enter</button>
    </div>
  )
}
