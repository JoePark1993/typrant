import React, {Component} from 'react';
import Phaser from 'phaser';
import GameScene from './game/Scenes/GameScene.js';
import config from './game/Config/config.js';


class PhaserContainer extends Component{
  componentDidMount(){
    class Game extends Phaser.Game{
      constructor(){
        super(config);
        this.scene.add('Game', GameScene);
        this.scene.start('Game');
      }
    }

    window.game = new Game();
  }

  render(){
    return (
      <div className="phaserContainer" id="phaser-container">
      </div>
    );
  }
}

export default PhaserContainer;
