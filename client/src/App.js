import React from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter, Route, Switch } from 'react-router-dom';

//Pages//
import BMI from './Components/BMI';

const App = () => {
  return (
          <BrowserRouter>
              <Switch>
                  <Route path='/home' component={BMI} />
              </Switch>
          </BrowserRouter>
  )
};

export default App;
