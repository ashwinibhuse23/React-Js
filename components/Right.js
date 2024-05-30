import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Right(props) {
    var [apidata,setapidata] = useState([])
    useEffect(function(){
    if (props.p2 !=""){
        var apipath = `https://fakestoreapi.com/products/category/${props.p2}`;
        console.log(apipath);
        var ans=axios.get(apipath);
        ans.then(function(response){
            console.log(response.data);
            setapidata(response.data);
    })
    }
},[props.p2])
  return (
    <div className='container'>
        <div className="row">{
            apidata && apidata.length>0 && apidata.map(value =>
                <div className="col-3" text-center>
                    <img src={value.image}className="img-fluid" alt=""/>
                    <h2>{value.price}</h2>
                    <p>{value.title}</p>
                </div>
            )
           
        }</div>
    </div>
  )
}