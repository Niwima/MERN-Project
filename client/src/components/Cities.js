import React, { Component } from 'react'
import Navbar from './Navbar'

class Cities extends Component {
    state= {
        allCities: [],
        filteredCities: [],
    };
    filterCities= (e) => {
        let filteredCities;
        console.log(e.target.value)
        if (e.target.value === ""){
            filteredCities = this.state.allCities;
            console.log(filteredCities)
        }else{
        filteredCities = this.state.allCities.filter(city => 
            city.name.toUpperCase().startsWith( e.target.value.toUpperCase() ) || 
            city.name.toUpperCase().includes( " " + e.target.value.toUpperCase() )
            );
        }
            this.setState({
                filteredCities: filteredCities
            })
    }
    fetchCities= () => {
        this.setState({...this.state, isFetching: true})
    fetch("http://localhost:5000/cities/all")
    .then(response => response.json())
      .then(result => {
            this.setState({
            allCities: result, 
            isFetching: false,
            filteredCities: result
        })
    })
      .catch(e => console.log(e));
      
    };
    render() {
        const citiesElement = this.state.filteredCities.map(city => {
            return (
                <div className="city-button" key = {city._id}>
                    <img className="city-image" src={city.image} alt=""/> 
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
                        <select name="sort" id="sortSelector">
                            <option value="Name">Name</option>
                            <option value="Rating">Rating</option>
                            <option value="Cost">Cost</option>
                            <option value="Population">Population</option>
                            <option value="Safety">Safety</option>
                            <option value="Cuisine">Cuisine</option>
                            <option value="Equality">Equality</option>
                            <option value="Weather">Weather</option>
                            <option value="Secret Wars">Secret Wars</option>
                            <option value="Magic">Magic</option>
                            <option value="Monsters">Monsters</option>
                            <option value="Absurdity">Absurdity</option>
                            <option value="Pet-Friendly">Pet-Friendly</option>
                            <option value="Ricks">Ricks</option>
                            <option value="Distopic">Distopic</option>
                        </select>
                        <input className="searchbar" type="text" placeholder = "Search" onChange= {this.filterCities} />
                        <select name="regions" id="regionSelector">
                            <option value="ALL">All Regions</option>
                            <option value="USA">Americas</option>
                            <option value="Europe">Europe</option>
                            <option value="Africa">Africa</option>
                            <option value="Space">Space</option>
                            <option value="Other Worlds">Other</option>
                        </select>
                    </div>
                </div>
               {citiesElement}
            </div>
        );
    }
    componentDidMount() {
        this.fetchCities()
      }
}
export default Cities;