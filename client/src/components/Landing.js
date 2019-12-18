import React, { Component } from 'react'
import Logo from '../images/mytineraryLogo.png'
import BrowseButton from '../images/circled-right-2.png'
import Logout from './Logout.js'
import Navbar from './Navbar'
import jwt_decode from 'jwt-decode'
class Landing extends Component {
    componentDidMount(){
        this.storeTokenInCache()
    }
    storeTokenInCache = (e) => {
        let encryptedToken = this.props.match.params.token
        let token = ""
        try{
            token = JSON.stringify(jwt_decode(encryptedToken))
        }catch(error) {
            window.location.href = "http://localhost:3000/login"
        }
        
        console.log("match.params", encryptedToken)
        console.log ("decrypted", token)
        sessionStorage.setItem('encryptedToken', encryptedToken)
        sessionStorage.setItem('token', token);
        let storedToken = JSON.parse(sessionStorage.getItem('token'))
        console.log('token', storedToken)
    }
    render() {
        return (
            <div className="landing container-fluid d-flex flex-column justify-content-between">
                <div>
                    <div>
                        <Navbar />
                    </div>
                    <img className="landing-logo img img-fluid " src={Logo} alt="Mytinerary LOGO"/>
                    <p>Find your perfect trip, designed by insiders who know and love their cities.</p>
                </div>
               
                <div className="container browse-button-container pb-4">
                    <a href="/cities">
                        <img className="browse-button img-fluid" src={BrowseButton} alt="Browse"/>
                    </a>
                    
                </div>

                <div className="p-3">
                    <Logout/>
                </div>
            </div>
        )
    }
}
export default Landing;
