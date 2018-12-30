import React, { Component } from 'react';
import{
  Link,
  BrowserRouter,
  Route,
} from 'react-router-dom'

import Play from './Play/Play.js';
import Home from './Home.js';
import Login from './Login/Login.js';

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
          <ul>
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/Play/Play'>Play</Link></li>
            <li><Link to='/Login/Login'>Login</Link></li>
          </ul>
          <Route path="/" exact={true} component={Home}/>
          <Route 
            path="/Play/Play"
            render={(props)=><Play/>}
          />
          <Route 
            path="/Login/Login"
            render={(props)=><Login/>}
          />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}



export default App;
