import React, { Component } from 'react'
import { connect } from 'react-redux';
import {getItineraries} from '../store/actions/itineraryActions' ;

import Navbar from './Navbar'

class Itineraries extends Component {
    componentDidMount() {
            this.props.getItineraries(this.props.selectedCity)
            if (this.props.selectedCity === "No city selected, returning to cities..."){
                window.location.href = "/cities"
            }
    }
   
    
    render () {
        let itineraries = this.props.itineraries
        let itinerariesElement = itineraries.map(itinerary => {
                let activities = itinerary.activities.map(activity => {
                    return(
                        <div key = {activity.name}>
                            <h3>{activity.name}</h3>
                            <img className="activity-image"src={activity.image} alt={activity.name}/>
                        </div>
                    )
                })
                    return(
                        <div key = {itinerary._id}>
                            <h2>{itinerary.title}</h2>
                            <img className="city-image" src={itinerary.image} alt="thing"/>
                                <div className="d-flex flex-row justify-content-between">
                                    <p>Rating: {itinerary.rating}</p>
                                    <p>Duration: {itinerary.duration} hours</p>
                                    <p>Price: {itinerary.price}</p>
                                </div>
                                    <p>{itinerary.hashtags}</p>
                            <div>
                                {activities}
                            </div>
                        </div>
                    )
                });
        return(
             <div className="itineraries container-fluid">
                <div className = "sticky-top">
                    <Navbar />
                </div>
                <div>
                    <h1>{this.props.selectedCity}</h1>
                </div>
                {itinerariesElement}
            </div>
        )
    }
    
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities.cities,
        itineraries: state.itineraries.itineraries,
        selectedCity: state.cities.selectedCity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getItineraries: (city) => dispatch (getItineraries(city)),
    }
}
export default  connect(mapStateToProps, mapDispatchToProps) (Itineraries)