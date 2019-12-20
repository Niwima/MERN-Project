import React, { Component } from 'react';

class Logout extends Component {

    handleClick = (e) => {
        sessionStorage.clear();
        window.location.href = "http://localhost:3000/"
    };
    render(){
        return(
            <div className= "container-fluid">
                <div>
                    <button onClick={this.handleClick} className="logout rounded">Log Out</button>
                </div>
            </div>
        )
    }
}
export default Logout