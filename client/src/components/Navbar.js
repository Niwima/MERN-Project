import React, { Component } from 'react'
import UserImage from './UserImage'
class Navbar extends Component {
  state = {
    token: {
    },
    landingPage: "",
}
  componentDidMount(){
    this.getTokenInCache()
}
  getTokenInCache = (e) => {
    let storedToken = sessionStorage.getItem('encryptedToken')
    let token = JSON.parse(sessionStorage.getItem('token'))

    this.setState({
      token: {
        image: token
      },
      landingPage: "/landing/" + storedToken
    })
    console.log(token)
}

  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded-bottom">
          <UserImage/>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a href= {this.state.landingPage} className="nav-item nav-link" >Landing Page</a>
              <a href= "/cities"className="nav-item nav-link " >Cities</a>
              <a href= "/createaccount"className="nav-item nav-link " >New Account</a>
              <a href= "/"className="nav-item nav-link " >Login</a>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}
export default Navbar;