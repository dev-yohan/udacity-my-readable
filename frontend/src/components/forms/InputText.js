import React from 'react'

export default function InputText({placeholder, label, value, changeHandler}) {
  return (
    <div className="form-group">
      <label className="col-lg-2 control-label">{label}</label>
      <div className="col-lg-10">
        <input 
        type="text" 
        className="form-control" 
        placeholder={placeholder} 
        value={value}
        onChange={changeHandler}
        required/>
      </div>
    </div>
  )
}