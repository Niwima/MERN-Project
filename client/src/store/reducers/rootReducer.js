import { combineReducers } from "redux";
import cityReducer from "./cityReducer";
import itineraryReducer from "./itineraryReducer"; 

const rootReducer = combineReducers({cities: cityReducer, itineraries: itineraryReducer});



export default rootReducer;