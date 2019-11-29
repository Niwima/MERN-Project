export const getCities = () => dispatch => {

    fetch("http://localhost:5000/cities/all")
    .then(response => response.json())
      .then(result => {
            dispatch({
                type: 'GET_CITIES',
                payload: result.sort((a, b) => (a.name > b.name) ? 1 : -1)
            })
        })
      .catch(e => console.log(e));
}

export const selectCity = (city) => dispatch => {
  dispatch({
    type: 'SELECT_CITY',
    payload: city
  })
}
