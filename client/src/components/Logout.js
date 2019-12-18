import React, { Component } from 'react';

class Logout extends Component {

    handleClick = (e) => {
        sessionStorage.clear();
        window.location.href = "http://localhost:3000/login"
    };
    render(){
        return(
            <div className= "container-fluid">
                <div className="new-city-button"> 
                    <div>
                        <button onClick={this.handleClick} className="btn">Log Out</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Logout