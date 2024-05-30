import React, { useEffect, useState } from 'react'
import axios  from 'axios';
import { addtocart } from '../redux/slices/cartSlice';
import { useDispatch } from 'react-redux';
export default function Login() {
    let dispatch=useDispatch()
    
    var [apidata,setapidata]=useState([]);
    function f1(value){
        console.log(value)
        dispatch(addtocart(value))
    }
    useEffect(function(){
        //console.log("call API");
       // console.log(axios);
        var ans =axios.get("https://fakestoreapi.com/products")
        //console.log(ans);
        ans.then(function(response){
            console.log(response);
            console.log(response.data);
            setapidata(response.data);
        })
    },[])
  return (
    <div className='container'><h1>API Called</h1>
    <div className='row'>
        {
            apidata && apidata.length>0 && 
            apidata.map(value =>
                <div className='col-3 text-center'>
                    
                    <img src={value.image}
                    className='img-fluid'alt=""></img>
                    <h2>{value.price}</h2>
                    <p>{value.title}</p>
                    <button onClick={()=>{f1(value)}}>Add to cart</button>
                </div>
            )
        }
    </div>

    </div>
  )
}
