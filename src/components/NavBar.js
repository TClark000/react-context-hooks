import React from 'react'
import { Link, withRouter, useLocation } from 'react-router-dom'

const Navbar = () => {

  const [path, setPath ] = React.useState('/')
  let location = useLocation()

  React.useEffect(() => {
    setPath(location.pathname)
  }, [location])
  
  return(
    <nav>
      <div className="ui basic menu inverted">
        <Link id={path === '/' ? "active-tab" : ""} className="item tab-balance" to="/">
          <i className="home icon"></i> Balance
        </Link>
        <Link id={path === '/account' ? "active-tab" : ""} className="item tab-account" to="/account">
          <i className="edit icon"></i> Account
        </Link>
      </div>
    </nav>
  )
}
export default withRouter(Navbar)