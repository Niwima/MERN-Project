import React, { Component } from 'react';
import MytineraryLogo from "../images/mytineraryLogo.png"
import Navbar from './Navbar'

class CreateAccount extends Component {
    state = {
        name: "",
        email: "",
        image: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    };
    handleSubmit = (e) => {
        if (this.state.name !== "" && this.state.email !== "" && this.state.image !== ""  && this.state.password !== "") {
            fetch("http://localhost:5000/users/newUser", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: this.state.name,
                    email: this.state.email,
                    password: this.state.password,
                    image: this.state.image
                    
                })
            })
        } else {
            alert("you must input something into every field")
        }
    };
    render(){
        return(
            <div className= "container-fluid">
                <div className = "sticky-top">
                    <Navbar />
                </div>
                <div className="new-city-button">
                    <img className="new-city-image" src = {MytineraryLogo} alt="logo"/> 
                    <div>
                        <form onSubmit={this.handleSubmit} className = "d-flex flex-column justify-content-between">
                            <h2 className="p-1">Create Account</h2>
                            <div className = "d-flex justify-content-between">
                                <label>Name:</label>
                                <input id="name" type="text" onChange={this.handleChange} />
                            </div>
                            <div className = "d-flex justify-content-between">
                                <label>Email:</label>
                                <input id= "email" type="text" onChange={this.handleChange}/>
                            </div>
                            <div className = "d-flex justify-content-between">
                                <label>Password: </label>
                                <input id= "password" type="text" onChange={this.handleChange}/>
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

export default CreateAccount