import React, { Component } from 'react'

class UserImage extends Component {
  state = {
      token: {
        image: "https://icon-library.net/images/no-user-image-icon/no-user-image-icon-18.jpg"
      },
}
componentDidMount(){
    this.getTokenInCache()
}
getTokenInCache = (e) => {
    let token = JSON.parse(sessionStorage.getItem('token'))
    if (token === null || token === undefined) {
        setTimeout(this.getTokenInCache, 300)
    } else {
        this.setState({
            token: token,
        })
    }
}

    render() {      
        return (
            <div>
                <img className="userImage rounded-circle" src={this.state.token.image} onError={(e)=>{e.target.onerror = null; e.target.src="https://icon-library.net/images/no-user-image-icon/no-user-image-icon-18.jpg"}} alt="none"/>
            </div>
        )
    }
}
export default UserImage;