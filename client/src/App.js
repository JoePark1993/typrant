import React, { Component } from 'react';
import{
  Link,
  BrowserRouter,
  Route,
} from 'react-router-dom'
import './App.css'

import Play from './Play/Play.js';
import Home from './Home.js';
import Login from './Login/Login.js';
import Navigation from './Components/Navigation';
import StickyFooter from './Components/Footer';

class App extends Component {

  constructor(){
    super()
    this.state={
      endpoint:"https://localhost:5000"
    }
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
          <Navigation /> 
          {/* <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Play/Play'>Play</Link></li>
            <li><Link to='/Login/Login'>Login</Link></li>
          </ul> */}
          <Route path="/" exact={true} component={Home}/>
          <Route 
            path="/Play/Play"
            render={(props)=><Play/>}
          />
          <Route 
            path="/Login/Login"
            render={(props)=><Login/>}
          />
          <StickyFooter />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
