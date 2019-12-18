import React, { Component } from 'react';
import MytineraryLogo from "../images/mytineraryLogo.png"

class Login extends Component {
    state = {
        email: "",
        password: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.id]: e.target.value,
        })
    };
    handleSubmit = (e) => {
        sessionStorage.clear();
        e.preventDefault();
            fetch("http://localhost:5000/auth", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: this.state.email,
                    password: this.state.password,
                })
            }).then(function(response){
                return response.json();
            }).then(function(data){
                alert(data.msg)
                window.location.href = ("/landing/" + data.token)
            })
    };
    handleClick = (e) => {
        sessionStorage.clear();
        window.location.href = ("http://localhost:5000/auth/google")
    };
    render(){
        return(
            <div className= "container-fluid">
                <div className="new-city-button">
                    <img className="new-city-image" src = {MytineraryLogo} alt="logo"/> 
                    <div>
                        <form onSubmit={this.handleSubmit} className = "d-flex flex-column justify-content-between">
                            <h2 className="p-1">Login</h2>
                            <div className = "d-flex justify-content-between">
                                <label>Email:</label>
                                <input id= "email" type="text" onChange={this.handleChange}/>
                            </div>
                            <div className = "d-flex justify-content-between">
                                <label>Password: </label>
                                <input id= "password" type="text" onChange={this.handleChange}/>
                            </div>
                            <button className = "btn-dark rounded m-2">Log In</button>
                        </form> 
                            <button onClick = {this.handleClick} className = "btn-dark rounded m-2">Log In With Google</button>
                        <div>
                        <a href="/createaccount" >Create New Account</a>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }
}
export default Login