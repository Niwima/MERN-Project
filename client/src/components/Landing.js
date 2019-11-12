import React, { Component } from 'react'
import Logo from '../images/mytineraryLogo.png'
import BrowseButton from '../images/circled-right-2.png'
import CityImages from './CityImages.js'
import Navbar from './Navbar'
class Landing extends Component {
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

                <div>
                    <p className="font-weight-bold"> Popular MYtineraries</p>
                    <CityImages />
                </div>

            </div>
        )
    }
}
export default Landing;
