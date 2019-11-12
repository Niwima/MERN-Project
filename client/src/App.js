import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'
import './App.css';
import Landing from './components/Landing'
import Cities from "./components/Cities"

function App() {
  return (
    <BrowserRouter>
      <div className="app">
          <Route exact path='/' component={Landing} key= "1"/>
          <Route exact path='/cities' component={Cities} key= "2"/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
