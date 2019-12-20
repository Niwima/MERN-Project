export const getItineraries = (cityname, token) => dispatch => {

    fetch("http://localhost:5000/itineraries/" + cityname, {
      headers:{
      "Content-Type": "application/json",
      "Authorization": "bearer " + token
    }})
    .then(response => response.json())
      .then(result => {
            dispatch({
                type: 'GET_ITINERARIES',
                payload: result.sort((a, b) => (a.title > b.title) ? 1 : -1)
            })
        })
      .catch(e => window.location.href = "http://localhost:3000/");
}