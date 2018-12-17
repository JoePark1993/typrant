import React, { Component } from 'react';
import './App.css';
import Phaser from 'phaser'

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

class PhaserContainer extends Component{
    
    componentDidMount(){
      var config = {
        type: Phaser.AUTO,
        width: 800,
        height: 600,
        physics: {
          default: 'arcade',
          arcade: {
            gravity: { y: 200 }
          }
        },
        scene: {
          preload: preload,
          create: create
        }
      };
      var game = new Phaser.Game(config);
      function preload ()
      {
        this.load.setBaseURL('http://labs.phaser.io');
        this.load.image('sky', 'assets/skies/space3.png');
        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
      }
      function create ()
      {
        this.add.image(400, 300, 'sky');
        var particles = this.add.particles('red');
        var emitter = particles.createEmitter({
          speed: 100,
          scale: { start: 1, end: 0 },
          blendMode: 'ADD'
        });
        var logo = this.physics.add.image(400, 100, 'logo');
        logo.setVelocity(100, 200);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);
        emitter.startFollow(logo);
      }

    }
  render(){
    return (
      <div className="phaserContainer" id="phaser-container">
      </div>
    );
  }
}

export default App;
