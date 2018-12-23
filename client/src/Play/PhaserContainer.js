import React, {Component} from 'react';
import Phaser from 'phaser';

import config from './game/Config/config.js';


class PhaserContainer extends Component{
  componentDidMount(){
    class Game extends Phaser.Game{
      constructor(){
        super(config);
        this.scene.start('MenuScene');
      }
    }

    window.game = new Game();
  }
  componentWillUnmount(){
    window.game.destroy()
  }

  render(){
    return (
      <div>
        <main role="main" id = "content">
        <div id = "promptBox">
          <div >
            <h5 >Enter the following prompt</h5>
            <p id = "tester">Prompt will appear here</p>
          </div>
        </div>
        <p  id = "tester"></p>
      </main>
      <div  id = "inputBox">
        <input type="text" placeholder="Enter prompt here" id="userInput" name="carrot"/>
      </div>
        <div className="phaserContainer" id="phaser-container">
        </div>
      </div>
    );
  }
}

export default PhaserContainer;
