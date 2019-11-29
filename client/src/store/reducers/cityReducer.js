const initState = {
    cities: [],
    selectedCity: "No city selected, returning to cities..."
}
const cityReducer = (state = initState, action) => {
    switch (action.type) {
        case ('GET_CITIES'):
            return {
                ...state,
                cities: action.payload
            }
        case ('SELECT_CITY'):
            return {
                ...state,
                selectedCity: action.payload
            }
        default:
            return state;
    }
}
export default cityReducer;