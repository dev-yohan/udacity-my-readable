import React from 'react'

export default function AlertMessage({messageInfo}) {
  return (
    <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        <div className="alert alert-dismissible alert-danger">
          <button type="button" className="close" data-dismiss="alert">
            &times;
          </button>
          {messageInfo}  
        </div> 
      </div>
    </div> 
  )
}
