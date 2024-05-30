import "./style.css"
import ReactDom  from  'react-dom';
import App from './components/App';
//React Rounting start
import {
   createBrowserRouter,
   RouterProvider,
 } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Form from "./components/Form";
import One from "./components/One";
import Two from "./components/Two";

import Error from "./components/Error";
import Main from "./components/Main";
import Cart1 from "./components/Cart1";

 var projectroute=createBrowserRouter(
   [
      {
         path:"",
         element:<App></App>,
         children:[
            {
               path:"",
               element:<Home></Home>,
            },
            {
               path:"aboutus",
               element:<About></About>
            },
            {
               path:"cart",
               element:<Cart></Cart>
            },
            {
               path:"login",
               element:<Login></Login>
            },
            {
               path:"form",
               element:<Form></Form>
            },
            {
               path:"one",
               element:<One></One>
            },
            {
               path:"two",
               element:<Two x1="100"></Two>
            },
            {
               path:"error",
               element:<Error></Error>
            },
            {
               path:"main",
               element:<Main></Main>
            },
            {
               path:"cart1",
               element:<Cart1></Cart1>
            },
            
         ]
      },
      
   ]
 ) 
//react Rounting End
//console.log(ReactDom)
const ans = ReactDom.createRoot(document.getElementById("root"))
//console.log(ans);
//ans.render("Hello World!")
//var username="John"
//ans.render(<h1>Hello World!! {username}</h1>)//jsx
//var product =(
   // <>
   // <div className="col-3">
       // <h2>Price 2000 </h2>
       // <button>Add to cart</button>
    //</div>

   // <div className="col-3">
      //  <h2>Price 2000 </h2>
      //  <button>Add to cart</button>
   // </div>
   // </>
//)
//ans.render(product)
//ans.render(<App></App>)
ans.render(<RouterProvider router={projectroute}>

</RouterProvider>)
