import React from 'react'
import Image from './Image'
import ErrorBoundary from '../ErrorBoundary'



export default function Error() {
  return (
    <div className='container'>
        <h1>Error Boundry Example</h1>
        <div className='row'>
            <div className='col-4'><Image p1="https://plus.unsplash.com/premium_photo-1667055670870-5c9daa16a9a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9iaWxlfGVufDB8fDB8fHww"></Image></div>
            <div className='col-4'><Image p1="https://plus.unsplash.com/premium_photo-1661658740167-45b56833412b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bW9iaWxlfGVufDB8fDB8fHww"></Image></div>
            <div className='col-4'><ErrorBoundary><Image p1=""></Image></ErrorBoundary></div>
        
        </div>
        
        
        </div>
  )
}
