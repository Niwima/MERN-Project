export const getItineraries = (cityname) => dispatch => {

    fetch("http://localhost:5000/itineraries/" + cityname)
    .then(response => response.json())
      .then(result => {
            dispatch({
                type: 'GET_ITINERARIES',
                payload: result.sort((a, b) => (a.title > b.title) ? 1 : -1)
            })
        })
      .catch(e => console.log(e));
}