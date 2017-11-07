import React from 'react'

export default function FlashMessage({messageIntro, messageInfo, callbackInfo, callbackLink}) {
  return (
    <div className='row'>
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12'>
        <div className="alert alert-dismissible alert-success">
          <button type="button" className="close" data-dismiss="alert">
            &times;
          </button>
          <strong>{messageIntro}</strong> {messageInfo} 
            <a href={callbackLink} className="alert-link">{callbackInfo}</a>.
        </div> 
      </div>
    </div>  
  )
}
