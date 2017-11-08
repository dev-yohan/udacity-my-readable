import React from 'react'

export default function Select({value, label, options, changeHandler}) {
  return (
    <div className="form-group">
      <label htmlFor="select" className="col-lg-2 control-label">
        {label}
      </label>
      <div className="col-lg-10">
        <select 
        className="form-control" 
        onChange={changeHandler} 
        value={value}
        id="select"
        required>
          {options.map((option) => (
            <option value={option.name} key={option.name}>{option.name}</option>
          ))}
        </select>
      </div>
    </div>   
  )
}