import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <div>
      <nav>
        {/* <Link to="/counter_reducer">Example of Counter using Reducer</Link>
        <br/>
        <Link to="/reducer_context">Example of Reducer with Context</Link>
        <br/>
        <Link to="/callback_hook">Example of Callback Hook</Link>
        <br/>
        <Link to="/useMemo_hook">Example of useMemo Hook</Link>
        <br/> */}
        <Link to="/counter">Example of Counter with useState and useEffect</Link>
        <br/>
      </nav>
    </div>
  )
}

export default Header
