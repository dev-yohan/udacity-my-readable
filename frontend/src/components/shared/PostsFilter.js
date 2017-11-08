import React from 'react'

export default function PostFilter({ value, changeHandler }) {
  return (
    <div className="dropdown sorter pull-right">
      {`Sort by ` }
      <select  onChange={changeHandler} value={value}>
        <option value="select">Select</option>
        <option value="date">Date</option>
        <option value="score">Vote score</option>
        </select>
    </div>
  )
}
