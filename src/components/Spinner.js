import React from 'react'
import loading from './loading.gif'

 const Spinner=()=> {
    return (
      <div className='text-center'>
        <img src={loading} alt="Loading" width="35px" className='my-3'/>
      </div>
    )

}

export default Spinner