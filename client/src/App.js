import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing'
import Cities from "./components/Cities"
import Itineraries from "./components/Itineraries"
import AddCity from "./components/AddCity"
import CreateAccount from "./components/CreateAccount"
import Login from "./components/Login"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route path='/landing/:token' component={Landing} key= "1"/>
          <Route exact path='/cities' component={Cities} key= "2"/>
          <Route exact path='/itineraries' component={Itineraries} key= "3"/>
          <Route exact path='/addcity' component={AddCity} key= "4"/>
          <Route exact path='/createaccount' component={CreateAccount} key="5"/>
          <Route exact path='/' component={Login} key="6"/>
      </div>
    </BrowserRouter>
  );
}

export default App;
