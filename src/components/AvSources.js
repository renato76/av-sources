import React from 'react'
import { Link } from 'react-router-dom'

function AvSources() {
  return (
    <div className="homepage-container">
      <h1>Pro Av</h1>
      <div className="av-sources-container">
        <Link to={'/apple'}>
          <div className="apple">
            {/* <h1>Apple</h1> */}
          </div>
        </Link>
        <Link to={'/netflix'}>
          <div className="netflix">
            {/* <h1>Netflix</h1> */}
          </div>
        </Link>
      </div>
    </div>
  )
}

export default AvSources
