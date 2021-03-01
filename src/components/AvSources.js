import React from 'react'
import { Link } from 'react-router-dom'

function AvSources() {
  return (
    <div className="homepage-container">
      <h1>Pro Av</h1>
      <div className="av-sources-container">
        <Link to={'/apple'}>
          <div className="apple">
          </div>
        </Link>
        <Link to={'/netflix'}>
          <div className="netflix">
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AvSources
