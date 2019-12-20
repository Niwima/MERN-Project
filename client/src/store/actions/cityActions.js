export const getCities = (token) => dispatch => {
    fetch("http://localhost:5000/cities/all",{
      headers:{
      "Content-Type": "application/json",
      "Authorization": "bearer " + token
    }})
    .then(response => response.json())
      .then(result => {
            dispatch({
                type: 'GET_CITIES',
                payload: result.sort((a, b) => (a.name > b.name) ? 1 : -1)
            })
        })
      .catch(e => window.location.href = "http://localhost:3000/");
}

export const selectCity = (city) => dispatch => {
  dispatch({
    type: 'SELECT_CITY',
    payload: city
  })
}
