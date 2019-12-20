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
                <div className= "fullscreen d-flex flex-column justify-content-around container-fluid">
                    <div className="new-city-button">
                        <img className="new-city-image" src = {MytineraryLogo} alt="logo"/>
                    </div>
                    <div className="new-city-button"> 
                        <div className = "card">
                            <form onSubmit={this.handleSubmit} className = "d-flex flex-column justify-content-between">
                                <h2 className="p-1">Login</h2>
                                <div className = "d-flex justify-content-between">
                                    <label>Email:</label>
                                    <input id= "email" type="text" onChange={this.handleChange}/>
                                </div>
                                <div className = "d-flex justify-content-between">
                                    <label>Password: </label>
                                    <input id= "password" type="password" onChange={this.handleChange}/>
                                </div>
                                <button className = "btn-dark rounded m-2">Log In</button>
                            </form> 
                        </div>
                    </div>
                    <div>
                        <img src="http://www.setyourowntests.com/_/rsrc/1468869481521/help/accounts/btn_google_signin_dark_normal_web%402x.png" onClick = {this.handleClick} className = "googleButton" alt="Sign In With Google"/>
                    </div>
                    <div>
                        <a href="/createaccount" >Create New Account</a>
                    </div>
                </div>
        )
    }
}
export default Login