import React from 'react'
import { Link } from 'react-router-dom'

export default function Header ({categories}) {

  return (
    <nav className="navbar navbar-inverse">
      <div className="container-fluid">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand" to='/'>Readable App</Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
          <ul className="nav navbar-nav navbar-right">
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">
                Categories <span className="caret"></span>
              </a>
              <ul className="dropdown-menu" role="menu">
                {categories.map((category) => (
                  <li key={category.path}>
                    <Link to={`/${category.path}`}>{category.name}</Link>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
