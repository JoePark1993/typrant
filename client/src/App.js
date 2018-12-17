import React, { Component } from 'react';
import './App.css';
import PhaserContainer from './PhaserContainer.js';

class App extends Component {
  state={
    data:null,
  };

  componentDidMount(){
    this.callBackEndAPI()
      .then(res=> this.setState({data:res.express}))
      .catch(err=> console.log(err));
  }

  callBackEndAPI = async() => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if( response.status !== 200 ){
      throw Error(body.message)
    }
    return body;
  };

  render() {
    return (
      <div className="App">
        <PhaserContainer/>
      </div>
    );
  }
}



export default App;
