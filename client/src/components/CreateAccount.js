import React, { Component } from 'react';
import MytineraryLogo from "../images/mytineraryLogo.png"

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
            e.preventDefault();
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
            }).then(function(response){
                return response.json();
            }).then(function(data){
                alert(data.msg)
            })
    };
    
    render(){
        return(
            <div className= "fullscreen d-flex flex-column justify-content-around container-fluid">
                <div>
                    <img className="new-city-image" src = {MytineraryLogo} alt="logo"/>
                </div>
                <div className="new-city-button">
                    <div className = "card">
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
                                <input id= "password" type="password" onChange={this.handleChange}/>
                            </div>
                            <div className = "d-flex justify-content-between">
                                <label>Image: </label>
                                <input id= "image" type="text" onChange={this.handleChange}/>
                            </div>
                            <button className = "btn-dark rounded m-2">Submit</button>
                        </form>
                    </div>
                </div>
                <div>
                    <a href="/" >I Already Have An Account</a>
                </div>
            </div>
        )
    }
}

export default CreateAccount