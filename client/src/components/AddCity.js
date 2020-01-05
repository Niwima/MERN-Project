//this component is not currently being used
import React, { Component } from 'react';
import MytineraryLogo from "../images/mytineraryLogo.png"
import Navbar from './Navbar'

class AddCity extends Component {
    state = {
        name: "",
        country: "",
        image: "",
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    }

    handleSubmit = (e) => {
        if (this.state.name !== "" && this.state.country !== "" && this.state.image !== "") {
            fetch("http://localhost:5000/cities/", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    country: this.state.country,
                    image: this.state.image
                })
            })
        } else {
            alert("you must input something into every field")
        }
    };

    render () {
        return(
            <div className= "container-fluid">
                <div className = "sticky-top">
                    <Navbar />
                </div>
                <div className="new-city-button">
                    <img className="new-city-image" src = {MytineraryLogo} alt="logo"/> 
                    <div>
                        <form onSubmit={this.handleSubmit} className = "d-flex flex-column justify-content-between">
                            <h2 className="p-1">Add New City</h2>
                            <div className = "d-flex justify-content-between">
                                <label>City Name:</label>
                                <input id="name" type="text" onChange={this.handleChange} />
                            </div>
                            <div className = "d-flex justify-content-between">
                                <label>Country:</label>
                                <input id= "country" type="text" onChange={this.handleChange}/>
                            </div>
                            <div className = "d-flex justify-content-between">
                                <label>Image: </label>
                                <input id= "image" type="text" onChange={this.handleChange}/>
                            </div>
                            <button className = "btn-dark rounded m-2">Submit</button>
                        </form> 
                    </div>
                </div>
            </div>
        )
    }
}
export default AddCity;