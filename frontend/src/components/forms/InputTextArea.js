import React from 'react'

export default function InputTextArea({label, value, changeHandler, rows}) {
  return (
    <div className="form-group">
      <label htmlFor="textArea" className="col-lg-2 control-label">{label}</label>
      <div className="col-lg-10">
        <textarea 
          className="form-control" 
          rows={rows} 
          id="textArea" 
          onChange={changeHandler}
          value={value}
          required
        />
      </div>
    </div>
  )
}