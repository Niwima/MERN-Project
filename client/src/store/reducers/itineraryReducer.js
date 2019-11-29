const initState = {
    itineraries: [],
}
const itineraryReducer = (state = initState, action) => {
    switch (action.type) {
        case ('GET_ITINERARIES'):
            return {
                ...state,
                itineraries: action.payload
            }
        
        default:
            return state;
    }
}
export default itineraryReducer;