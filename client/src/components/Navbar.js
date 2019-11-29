import React, { Component } from 'react'
class Navbar extends Component {
    render() {
        return (
            <div>
              <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-bottom">
                <a href= "/"className="navbar-brand " >Profile</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                  <div className="navbar-nav">
                    <a href= "/ "className="nav-item nav-link" >Landing Page</a>
                    <a href= "/cities"className="nav-item nav-link " >Cities</a>
                    <a href= "/createaccount"className="nav-item nav-link " >New Account</a>
                  </div>
                </div>
              </nav>
            </div>
        )
    }
}
export default Navbar;