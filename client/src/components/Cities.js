import React, { Component } from 'react';
import { connect } from 'react-redux';
import {getCities, selectCity} from '../store/actions/cityActions' ;

import Navbar from './Navbar'

class Cities extends Component {
    state = {
        timer: 1,
        filteredCities: [],
        searchTerm: ""
    }
    componentDidMount(){
        this.setState({timer: 0})
        this.authAndGetCities()
    }
    authAndGetCities = (e) => {
        let token = sessionStorage.getItem('encryptedToken');
        if (token === null) {
            let timer = this.state.timer + 1
            this.setState({
                timer: timer
            })
            console.log(this.state.timer)
            if(this.state.timer > 15){
                window.location.href = "http://localhost:3000/";
            }else{
                setTimeout(this.authAndGetCities, 300);
            }
        } else {
            this.props.getCities(token);
        }
    }
    sortCities = (e) => {
        let value = e.target.value;
        let sortedCities;
            if (this.state.filteredCities.length === 0) {
                sortedCities = this.props.cities;
                
            }else {
                sortedCities = this.state.filteredCities;
            }
        sortedCities.sort((a, b) => (a[value] > b[value]) ? 1 : -1)
        this.setState({
            filteredCities: sortedCities
        })
    }
    filterCities= (e) => {
        let filteredCities;
        if (e.target.value === ""){
            this.setState({
                searchTerm: e.target.value
            })
            filteredCities = this.props.cities;
        }else{
        filteredCities = this.props.cities.filter(city => 
            city.name.toUpperCase().startsWith( e.target.value.toUpperCase() ) || 
            city.name.toUpperCase().includes( " " + e.target.value.toUpperCase() ) ||
            city.country.toUpperCase().startsWith( e.target.value.toUpperCase() ) || 
            city.country.toUpperCase().includes( " " + e.target.value.toUpperCase() )
            );
        }
            filteredCities.sort((a, b) => (a.name > b.name) ? 1 : -1)
            this.setState({
                filteredCities: filteredCities,
                searchTerm: e.target.value
        })
    }

    goToItinerariesPage = (city) => {
        this.props.selectCity(city.name)
        this.props.history.push("/itineraries")
    }
    render() {
        let citiesElementSource;
        let citiesElement;
        if (this.state.filteredCities.length === 0 && this.state.searchTerm === "") {
            citiesElementSource = this.props.cities
        }else {
            citiesElementSource = this.state.filteredCities
        }
        citiesElement = citiesElementSource.map(city => {
            return (
                <div onClick={() => {this.goToItinerariesPage(city)}} className="city-button" key = {city._id}>
                        <img  className="city-image" src = {city.image} alt={city.name} />
                        <div className="cityNameAndCountry">
                            <div className="text-light bg-darkish small font-weight-bold">{city.name}</div>
                            <div className="text-light bg-darkish small font-weight-bold">{city.country}</div>
                        </div>
                </div>
            )});
            return (
                <div className="cities container-fluid">
                <div className = "sticky-top">
                    <Navbar />
                    <div className="d-flex justify-content-between">
                        <select onChange={this.sortCities} name="sort" id="sortSelector">
                            <option value="name">Name</option>
                            <option value="country">Country</option>
                        </select>

                        <input className="searchbar" type="text" placeholder = "Search" onChange= {this.filterCities} />

                        <select name="regions" id="regionSelector">
                            <option value="Fictional">Fictional</option>
                        </select>
                    </div>
                </div>

            <div className="container-fluid">
                {citiesElement}
            </div>

            </div>
            );
    }
}

const mapStateToProps = (state) => {
    return {
        cities: state.cities.cities,
        selectedCity: state.cities.selectedCity
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getCities: (token) => dispatch (getCities(token)),
        selectCity: (city) => dispatch (selectCity(city))
    }
}

export default  connect(mapStateToProps, mapDispatchToProps) (Cities)