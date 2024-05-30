import axios from 'axios';
import React from 'react'

class Two extends React.Component{

    constructor(){
        super();
        console.log(this)
        console.log("Constructor called")
        this.state={
            name:"Sam",
            age:22,
            apidata:[]
        };
    }
    f1(){
        //alert()
        this.setState({name:"Aditi",age:Math.random()})
        //this.props.x1=200
    }
    componentDidMount(){

        console.log("DidMount Cycle",this.state.name,this.state.age);
        var ans =axios.get("https://fakestoreapi.com/products");
        ans.then((response)=>{
            console.log(response)
            this.setState({apidata:response.data})
        })
        
    }
    componentDidUpdate(){
        console.log("DidUpdate Cycle",this.state.name,this.state.age);

    }
    componentWillUnmount(){
        console.log("WillUnmount Cycle");

    }

    render(){

        var ans=this.state.apidata
        return(<div className='container'>
            <h1>Class Component</h1>
            <p>{this.state.name}</p>
            <p>{this.state.age}</p>
            <button onClick={()=>{this.f1()}}>Enter</button>
            <p>{this.props.x1}</p>
            <div className='row'>
                {ans && ans.length>0 && ans.map(value=>
                    <div className="col-3">
                        <img src={value.image}
                    className='img-fluid'alt=""></img>
                    <h2>{value.price}</h2>
                        {value.title}
                        </div>
                )}
            </div>
        </div>)
    }

}
export default Two;